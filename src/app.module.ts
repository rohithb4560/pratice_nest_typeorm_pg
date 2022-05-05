import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { userModule } from './user/user.module';

@Module({
  imports: [userModule,
  RouterModule.register([
    {
      path:'api/users',
      module:userModule
    }
  ])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
