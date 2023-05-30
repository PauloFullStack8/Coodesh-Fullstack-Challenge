import { Module } from '@nestjs/common'

import { UserModule } from './modules/user/user.module'
import { InfraModule } from './infra/infra.module'
import { AppController } from './app.controller'

@Module({
  imports: [InfraModule, UserModule],
  controllers: [AppController],
})
export class AppModule {}
