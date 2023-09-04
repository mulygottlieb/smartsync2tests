import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  firstName: string | null;
  fld1: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
