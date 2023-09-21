import { SortOrder } from "../../util/SortOrder";

export type User2OrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
};
