import { Body, Controller, Post } from '@nestjs/common';
import { PayableService } from './payable.service';
import { CreatePayableDto } from './dtos/create-payable.dto';

@Controller('payable')
export class PayableController {
  constructor(private readonly payableService: PayableService) {}

  @Post()
  async create(@Body() data: CreatePayableDto) {
    return this.payableService.create(data);
  }
}
