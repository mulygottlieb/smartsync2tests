import { Credentials } from "../../auth/Credentials";
import { User2Info } from "../../auth/User2Info";

export const VALID_ID = "1";

export const TEST_USER: User2Info = {
  id: "cl7qmjh4h0000tothyjqapgj5",
  roles: ["User"],
  username: "ofek",
};
export const SIGN_TOKEN = "SIGN_TOKEN";
export const VALID_CREDENTIALS: Credentials = {
  username: "Valid User",
  password: "Valid User Password",
};
export const INVALID_CREDENTIALS: Credentials = {
  username: "Invalid User",
  password: "Invalid User Password",
};
