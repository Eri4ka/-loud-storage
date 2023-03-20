export type UserLoginType = {
  email: string;
  password: string;
};

export interface IUser {
  diskSpace: number;
  email: string;
  id: string;
  usedSpace: number;
}

export interface IUserResponse extends IUser {
  token: string;
}
