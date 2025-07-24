import { Module } from '@nestjs/common';
import { UserService } from '../application/services/user.service';
import { UserResolver } from '../interfaces/user.resolver';

@Module({
  providers: [UserService, UserResolver],
})
export class UsersModule {}
