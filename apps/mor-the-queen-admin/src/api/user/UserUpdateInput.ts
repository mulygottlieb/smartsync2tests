import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  firstName?: string | null;
  fld1?: string | null;
  lastName?: string | null;
  otherroles?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
