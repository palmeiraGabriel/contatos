import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Contato } from 'src/app/models/Contato';

@Component({
  selector: 'app-create-contato',
  templateUrl: './create-contato.component.html',
  styleUrls: ['./create-contato.component.css']
})
export class CreateContatoComponent implements OnInit {

  @Output() onCancelarModalClick:EventEmitter<null> = new EventEmitter()

  novoContato:Contato = {
    name:'',
    email:'',
    telefones: ['']
  }

  constructor() { }

  fecharModalClick(){
    this.onCancelarModalClick.emit();
  }

  track(index:number,value:string){
    return index
  }

  ngOnInit(): void {
  }

  addTelefone(){
    this.novoContato.telefones.push('')
  }

  removeTelefone(t:any){
    this.novoContato.telefones.splice(this.novoContato.telefones.indexOf(t),1)
  }

}
