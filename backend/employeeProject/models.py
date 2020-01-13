from django.db import models


class Employee(models.Model):
    firstName = models.CharField(max_length=100)
    secondName = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    username = models.CharField(max_length=100)
    birthOfDate = models.CharField(max_length=100)

    class Meta:
        db_table = "employee"
