import { UnauthorizedException } from "@nestjs/common";
import { mock } from "jest-mock-extended";
import { JwtStrategyBase } from "../../../auth/jwt/base/jwt.strategy.base";
import { TEST_USER } from "../constants";
import { User2Service } from "../../../user2/user2.service";
describe("Testing the jwtStrategyBase.validate()", () => {
  const userService = mock<User2Service>();
  const jwtStrategy = new JwtStrategyBase(userService, "Secrete");
  beforeEach(() => {
    userService.findOne.mockClear();
  });
  it("should throw UnauthorizedException where there is no user", async () => {
    //ARRANGE
    userService.findOne
      .calledWith({ where: { username: TEST_USER.username } })
      .mockReturnValue(Promise.resolve(null));
    //ACT
    const result = jwtStrategy.validate({
      id: TEST_USER.id,
      username: TEST_USER.username,
      roles: TEST_USER.roles,
    });
    //ASSERT
    return expect(result).rejects.toThrowError(UnauthorizedException);
  });
});
