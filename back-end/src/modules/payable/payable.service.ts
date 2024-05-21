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

  async get(id: string) {
    try {
      const payable = await this.prisma.payable.findUnique({
        where: {
          id: id,
        },
      });
      return payable;
    } catch (error) {
      console.log(error);
    }
  }

  async update(payload: { id: string; payableProps: any }) {
    if (Object.keys(payload.payableProps).length === 0) {
      throw new Error('At least one property must be passed');
    }
    const props = {
      value: payload.payableProps.value,
      emissionDate: payload.payableProps.emissionDate,
      assignorId: payload.payableProps.assignorId,
    };

    try {
      const updatedPayable = await this.prisma.payable.update({
        where: {
          id: payload.id,
        },
        data: {
          ...props,
        },
      });
      return updatedPayable;
    } catch (error) {
      console.log(error);
    }
  }

  async delete(id: string) {
    try {
      const deletedPayable = await this.prisma.payable.delete({
        where: {
          id: id,
        },
      });
      return deletedPayable;
    } catch (error) {
      console.log(error);
    }
  }
}
