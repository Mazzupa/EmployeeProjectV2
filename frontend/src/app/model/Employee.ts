import {MaritalStatus} from './MaritalStatus';
import {Skill} from './Skill';
import {Password} from './Password';
import {Role} from './Role';
import {EmployeeDTO} from './EmployeeDTO';

export class Employee extends EmployeeDTO{
  uuid: string;
  username: string;
  password: Password;
  passwordConfirm: Password;
  firstName: string;
  secondName: string;
  country: string;
  birthOfDate: string;
  maritalStatus: MaritalStatus;
  skills: Skill[];
  image: string;
  role: Role;
}

export const COLUMNS = [
  {
    label: 'Id',
    fieldName: 'id',
  },
  {
    label: 'Name',
    fieldName: 'firstName',
  },
  {
    label: 'Surname',
    fieldName: 'secondName',
  },
  {
    label: 'Birth Date',
    fieldName: 'birthOfDate',
  },
  {
    label: 'Country',
    fieldName: 'country',
  },
  {
    label: 'Username',
    fieldName: 'username',
  },
  // {
  //   label: 'Status',
  //   fieldName: 'maritalStatus.status',
  // },
  // {
  //   label: 'Skills',
  //   fieldName: 'skill',
  //   arrayField: 'skills'
  // },
  // {
  //   label: 'Role',
  //   fieldName: 'role.role'
  // }
];

export const ACTIONS = [
  {
    label: 'edit',
    actionType: 'GO_TO',
    getUrl: row => '/editForm/' + row.id,
  },
  {
    label: 'delete',
    actionType: 'DELETE'
  }
];
