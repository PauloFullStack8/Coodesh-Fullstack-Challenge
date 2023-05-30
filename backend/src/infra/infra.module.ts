import { Module } from '@nestjs/common'
import { PrismaService } from './database/prisma/prisma.service'
import { UserRepository } from './repositories/prisma/user-repository'

@Module({
  providers: [PrismaService, UserRepository],
  exports: [UserRepository],
})
export class InfraModule {}
