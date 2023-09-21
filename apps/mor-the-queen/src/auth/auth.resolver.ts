import * as common from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { AuthService } from "./auth.service";
import { GqlDefaultAuthGuard } from "./gqlDefaultAuth.guard";
import { UserData } from "./userData.decorator";
import { LoginArgs } from "./LoginArgs";
import { User2Info } from "./User2Info";

@Resolver(User2Info)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}
  @Mutation(() => User2Info)
  async login(@Args() args: LoginArgs): Promise<User2Info> {
    return this.authService.login(args.credentials);
  }

  @Query(() => User2Info)
  @common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
  async user2Info(@UserData() entityInfo: User2Info): Promise<User2Info> {
    return entityInfo;
  }
}
