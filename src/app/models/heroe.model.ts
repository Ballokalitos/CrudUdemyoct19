
// se pone export pq se va usar en otros archivos

export class HeroeModel {
  id:string;
  nombre:string;
  poder:string;
  vivo:boolean;

  constructor()
  {
    this.vivo = true;
  }
}
