import { Module } from '@nestjs/common';
import { UserService } from './application/user/user.service';
import { UserResolver } from './interfaces/graphql/user/user.resolver';

@Module({
  providers: [UserService, UserResolver],
})
export class UsersModule {}
