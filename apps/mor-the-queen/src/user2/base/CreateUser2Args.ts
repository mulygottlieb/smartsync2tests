/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { User2CreateInput } from "./User2CreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateUser2Args {
  @ApiProperty({
    required: true,
    type: () => User2CreateInput,
  })
  @ValidateNested()
  @Type(() => User2CreateInput)
  @Field(() => User2CreateInput, { nullable: false })
  data!: User2CreateInput;
}

export { CreateUser2Args as CreateUser2Args };