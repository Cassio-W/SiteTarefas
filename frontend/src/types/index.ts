export type TaskType = {
    id: string
    title: string;
    description: string;
    status: string;
    finalDate: string;
  }

export type StatusType = 'Pendente' | 'Em_Andamento' | 'Concluido';