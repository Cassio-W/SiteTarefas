export type TaskType = {
  id: string;
  title: string;
  description: string;
  status: string;
  finalDate: string;
}

export type UserType = {
  id: string;
  username: string;
  email: string;
}

export type StatusType = 'Pendente' | 'Em_Andamento' | 'Concluido';

export type ValuesType = {
  title: string
  description: string
  status: StatusType
  finalDate: string
}