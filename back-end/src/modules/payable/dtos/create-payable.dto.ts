import { IsNotEmpty, IsNumber, IsUUID, IsString } from 'class-validator';

export class CreatePayableDto {
  @IsNotEmpty()
  @IsNumber()
  value: number;

  @IsNotEmpty()
  @IsString()
  emissionDate: string;

  @IsNotEmpty()
  @IsUUID()
  assignorId: string;
}
