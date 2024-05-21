import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class PayableService {
  constructor(private prisma: PrismaService) {}

  async create(data: any) {
    try {
      const payable = await this.prisma.payable.create({
        data,
      });
      return payable;
    } catch (error) {
      console.log(error);
    }
  }
}
