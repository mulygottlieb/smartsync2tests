/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, User2 } from "@prisma/client";
import { PasswordService } from "../../auth/password.service";
import { transformStringFieldUpdateInput } from "../../prisma.util";

export class User2ServiceBase {
  constructor(
    protected readonly prisma: PrismaService,
    protected readonly passwordService: PasswordService
  ) {}

  async count<T extends Prisma.User2CountArgs>(
    args: Prisma.SelectSubset<T, Prisma.User2CountArgs>
  ): Promise<number> {
    return this.prisma.user2.count(args);
  }

  async findMany<T extends Prisma.User2FindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.User2FindManyArgs>
  ): Promise<User2[]> {
    return this.prisma.user2.findMany(args);
  }
  async findOne<T extends Prisma.User2FindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.User2FindUniqueArgs>
  ): Promise<User2 | null> {
    return this.prisma.user2.findUnique(args);
  }
  async create<T extends Prisma.User2CreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.User2CreateArgs>
  ): Promise<User2> {
    return this.prisma.user2.create<T>({
      ...args,

      data: {
        ...args.data,
        password: await this.passwordService.hash(args.data.password),
      },
    });
  }
  async update<T extends Prisma.User2UpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.User2UpdateArgs>
  ): Promise<User2> {
    return this.prisma.user2.update<T>({
      ...args,

      data: {
        ...args.data,

        password:
          args.data.password &&
          (await transformStringFieldUpdateInput(
            args.data.password,
            (password) => this.passwordService.hash(password)
          )),
      },
    });
  }
  async delete<T extends Prisma.User2DeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.User2DeleteArgs>
  ): Promise<User2> {
    return this.prisma.user2.delete(args);
  }
}