export class AddOrEditUserModel {
  id?: number;
  email!: string;
  firstName!: string;
  lastName!: string;
  roleId!: number;
  name?: string;
}

export default class UserModel {
  id?: number;
  email!: string;
  firstName!: string;
  lastName!: string;
  roleId!: number;
  role?: string;
  password?: string;
}
