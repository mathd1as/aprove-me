import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreatePayableDto {
  @IsNotEmpty()
  value: number;

  @IsNotEmpty()
  emissionDate: string;

  @IsNotEmpty()
  @IsUUID()
  assignorId: string;
}
