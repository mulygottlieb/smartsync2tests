import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  firstName?: string | null;
  fld1?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
