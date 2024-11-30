import { Module } from '@nestjs/common';
import { JobModule } from './job/job.module';
import { UserModule } from './user/user.module';
import { EmailModule } from './email/email.module';

@Module({
  imports: [JobModule, UserModule, EmailModule],
})
export class AppModule {}
