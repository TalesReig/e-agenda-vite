import { IPaginaHTML } from "./shared/pagina.interface";

class Index implements IPaginaHTML{
  btnCadastrar: HTMLButtonElement;

  constructor(){
    this.configurarElementos();
  }

  
  configurarElementos(): void {
    this.btnCadastrar = document.getElementById("btnCadastrar") as HTMLButtonElement;

    this.btnCadastrar.addEventListener("click", () => console.log("teste"))
  }
}

new Index();