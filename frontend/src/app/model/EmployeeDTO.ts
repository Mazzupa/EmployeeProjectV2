import {MaritalStatus} from './MaritalStatus';
import {Skill} from './Skill';
import {Role} from './Role';

export class EmployeeDTO {
  id: string;
  username: string;
  firstName: string;
  secondName: string;
  country: string;
  birthOfDate: string;
  maritalStatus: MaritalStatus;
  skills: Skill[];
  image: string;
  role: Role;
}
