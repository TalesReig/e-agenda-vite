import { EntidadeBase } from "./entidade.model";

export interface IRepositorio<T extends EntidadeBase> {

  inserir(registro: T): void;
  editar(id:string, registroEditado: T): void;
  excluir(id:string): void;
  selecionarTodos(): T[];
  selecionarPorId(id: string): T | undefined;
}