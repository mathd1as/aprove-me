import { IsString, IsOptional, IsNumber, IsUUID } from 'class-validator';

export class UpdatePayableDto {
  @IsNumber()
  @IsOptional()
  value: number;

  @IsString()
  @IsOptional()
  emissionDate: string;

  @IsOptional()
  @IsUUID()
  assignorId: string;
}
