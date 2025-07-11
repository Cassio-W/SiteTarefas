import { IsDate, IsDateString, IsEnum, IsNotEmpty, IsString } from "class-validator";


export class CreateTaskDto {

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsEnum(['Aguardando', 'Concluido', 'Em_Andamento'], {
    message: 'Status incorrect'
  })
  status: 'Aguardando' | 'Concluido' | 'Em_Andamento';

  @IsDateString()
  finalDate: string;
}