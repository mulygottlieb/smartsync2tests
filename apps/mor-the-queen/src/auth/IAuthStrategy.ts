import { User2Info } from "./User2Info";

export interface IAuthStrategy {
  validate: (...any: any) => Promise<User2Info>;
}
