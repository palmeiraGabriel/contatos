import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Contato } from 'src/app/models/Contato';
import { ContatoService } from 'src/app/service/contato.service';

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

  cs:ContatoService = new ContatoService;

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

  salvar(){
    this.cs.addContato(this.novoContato);
    this.novoContato = {
      name:'',
      email:'',
      telefones: ['']
    }   
  }

  removeTelefone(i:number):void{
    this.novoContato.telefones.splice(i,1)
  }

}
