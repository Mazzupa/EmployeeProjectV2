import json

from django.views.decorators.csrf import csrf_exempt

from employeeProject.models import Employee
from django.http import JsonResponse, HttpResponse
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView


class EmployeeView(APIView):
    permission_classes = (IsAuthenticated,)

    # Get all employees
    @csrf_exempt
    def get(self, request):
        employees = Employee.objects.all().values()
        employees_list = list(employees)
        return JsonResponse(employees_list, safe=False)

    # Add employee
    @csrf_exempt
    def post(self, request):
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)

        employee = Employee()
        employee.username = body['username']
        employee.firstName = body['firstName']
        employee.secondName = body['secondName']
        employee.country = body['country']
        employee.birthOfDate = body['birthOfDate']

        Employee.save(employee)
        return HttpResponse(request.body)

    # Edit Employee
    @csrf_exempt
    def put(self, request):
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)
        employees = Employee.objects.all().values().filter(id=body["id"])
        employees_list = list(employees)
        if len(employees_list) == 0:
            return HttpResponse("Not Found")
        else:
            employee = Employee()
            employee.id = body['id']
            employee.username = body['username']
            employee.firstName = body['firstName']
            employee.secondName = body['secondName']
            employee.country = body['country']
            employee.birthOfDate = body['birthOfDate']

            Employee.save(employee)


class EmployeeIdView(APIView):

    # Delete Employee
    @csrf_exempt
    def delete(self, request, id):
        employee = Employee.objects.get(id=id)
        employee.delete()
        return JsonResponse(True, safe=False)

    # Get employee by id
    @csrf_exempt
    def get(self, request, id):
        employees = Employee.objects.all().values().filter(id=id)
        employees_list = list(employees)
        if len(employees_list) == 0:
            return HttpResponse("Not Found")
        else:
            return JsonResponse(employees_list[0], safe=False)


class EmployeeUsernameView(APIView):
    @csrf_exempt
    def get(self, request, username):
        employees = Employee.objects.all().values().filter(username=username)
        employees_list = list(employees)
        if len(employees_list) == 0:
            return JsonResponse(False, safe=False)
        else:
            return JsonResponse(True, safe=False)
