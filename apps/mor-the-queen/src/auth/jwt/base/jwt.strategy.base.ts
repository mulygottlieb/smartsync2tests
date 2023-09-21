import { UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { IAuthStrategy } from "../../IAuthStrategy";
import { User2Info } from "../../User2Info";
import { User2Service } from "../../../user2/user2.service";

export class JwtStrategyBase
  extends PassportStrategy(Strategy)
  implements IAuthStrategy
{
  constructor(
    protected readonly secretOrKey: string,
    protected readonly user2Service: User2Service
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey,
    });
  }

  async validate(payload: User2Info): Promise<User2Info> {
    const { username } = payload;
    const user = await this.user2Service.findOne({
      where: { username },
    });
    if (!user) {
      throw new UnauthorizedException();
    }
    if (
      !Array.isArray(user.roles) ||
      typeof user.roles !== "object" ||
      user.roles === null
    ) {
      throw new Error("User roles is not a valid value");
    }
    return { ...user, roles: user.roles as string[] };
  }
}
