import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { OnModuleDestroy, OnModuleInit } from '@nestjs/common';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect;
  }

  async onModuleDestroy() {
    await this.$disconnect;
  }
}
