import { Field, ObjectType } from "@nestjs/graphql";
import { User2 } from "../user2/base/User2";

@ObjectType()
export class User2Info implements Partial<User2> {
  @Field(() => String)
  id!: string;
  @Field(() => String)
  username!: string;
  @Field(() => [String])
  roles!: string[];
  @Field(() => String, { nullable: true })
  accessToken?: string;
}
