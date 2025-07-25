import { IsDate, IsDateString, IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";


export class CreateTaskDto {

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsEnum(['Aguardando', 'Concluido', 'Em_Andamento'], {
    message: 'Status incorrect'
  })
  status: 'Aguardando' | 'Concluido' | 'Em_Andamento';

  @IsDateString()
  @IsOptional()
  finalDate: string;
}