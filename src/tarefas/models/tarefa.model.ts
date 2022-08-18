import { EntidadeBase } from "../../shared/entidade.model";
import { Prioridade } from "./prioridade.enum";

export class Tarefa extends EntidadeBase{
  public descricao: string;
  public dataCriacao: Date;
  public dataConclusao: Date | "Em Aberto";
  public prioridade: Prioridade;

  constructor(descricao: string, prioridade: Prioridade, id?: string) {
    super();

    if(id){
      this.id = id;
    }
    
    this.descricao = descricao;
    this.dataCriacao = new Date(Date.now());
    this.dataConclusao = "Em Aberto";
    this.prioridade = prioridade;
  }
}