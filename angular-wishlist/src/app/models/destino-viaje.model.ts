import { v4 as uuid } from 'uuid';

export class DestinoViaje {
  private selected:boolean;
  public servicios:string[];

  id = uuid(); 
  public votes = 0;

  constructor(public nombre:string, public imagenUrl:string){
      this.servicios = ['pileta','desayuno'];
  }
  
  
  setSelected(s:boolean){
      this.selected = s;
  }

  isSelected():boolean{
    return this.selected;
}

  voteUp(): any {
      this.votes++;
  }

  voteDown(): any {
    this.votes--;
}
}