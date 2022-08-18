import { Guid } from "./guid.model.js";

export abstract class EntidadeBase{
   public id: string;

   constructor(){
    this.id = new Guid().gerarNovoId();
   }
}