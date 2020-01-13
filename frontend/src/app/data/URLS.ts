interface Url {
  action: Actions;
  url: string;
}

export enum Actions {

  GET_EMPLOYEE,
  GET_EMPLOYEE_BY_UUID,
  GET_SKILLS,
  GET_MARITAL_STATUSES,
  SAVE,
  EDIT,
  GET_PROPERTIES,
  DELETE,
  UPLOAD_IMG,
  GET_IMG,
  GET_ROLES,
  USER_EXIST,
  CHANGE_PASSWORD
}

export const BASE_URL = 'http://localhost:8000/';

export const URLS: Url[] = [
  {
    action: Actions.GET_EMPLOYEE,
    url: BASE_URL + 'employee/'
  },
  {
    action: Actions.GET_EMPLOYEE_BY_UUID,
    url: BASE_URL + 'employee'
  },
  {
    action: Actions.GET_SKILLS,
    url: BASE_URL + 'getSkill'
  },
  {
    action: Actions.GET_MARITAL_STATUSES,
    url: BASE_URL + 'getMaritalStatus'
  },
  {
    action: Actions.SAVE,
    url: BASE_URL + 'employee/'
  },
  {
    action: Actions.EDIT,
    url: BASE_URL + 'employee/'
  },
  {
    action: Actions.GET_PROPERTIES,
    url: BASE_URL + 'getProperties'
  },
  {
    action: Actions.DELETE,
    url: BASE_URL + 'employee'
  },
  {
    action: Actions.UPLOAD_IMG,
    url: BASE_URL + 'file/save'
  },
  {
    action: Actions.DELETE,
    url: BASE_URL + 'file/get'
  },
  {
    action: Actions.GET_ROLES,
    url: BASE_URL + 'getRoles'
  },
  {
    action: Actions.USER_EXIST,
    url: BASE_URL + 'employee'
  },
  {
    action: Actions.CHANGE_PASSWORD,
    url: BASE_URL + 'changePassword'
  }
];
