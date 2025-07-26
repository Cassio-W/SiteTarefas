import { IsDate, IsDateString, IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";


export class CreateTaskDto {

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsOptional()
  @IsEnum(['Pendente', 'Concluido', 'Em_Andamento'], {
    message: 'Status incorrect'
  })
  status: 'Pendente' | 'Concluido' | 'Em_Andamento';

  @IsDateString()
  @IsOptional()
  finalDate: string;
}