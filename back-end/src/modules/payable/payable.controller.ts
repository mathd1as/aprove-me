import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PayableService } from './payable.service';
import { CreatePayableDto } from './dtos/create-payable.dto';
import { UpdatePayableDto } from './dtos/update-payable.dto';

@Controller('payable')
export class PayableController {
  constructor(private readonly payableService: PayableService) {}

  @Get(':id')
  async get(@Param() param: { id: string }) {
    return this.payableService.get(param.id);
  }

  @Post()
  async create(@Body() body: CreatePayableDto) {
    return this.payableService.create(body);
  }

  @Put(':id')
  async update(@Param() param: { id: string }, @Body() body: UpdatePayableDto) {
    return this.payableService.update({ id: param.id, payableProps: body });
  }

  @Delete(':id')
  async delete(@Param() param: { id: string }) {
    return this.payableService.delete(param.id);
  }
}
