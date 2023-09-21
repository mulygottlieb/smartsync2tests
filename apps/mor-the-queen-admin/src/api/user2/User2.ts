import { JsonValue } from "type-fest";

export type User2 = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  username: string;
  roles: JsonValue;
};
