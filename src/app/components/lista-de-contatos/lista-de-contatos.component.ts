import { Component, OnInit } from '@angular/core';
import { Contato } from 'src/app/models/Contato';
import { ContatoService } from 'src/app/service/contato.service';

@Component({
  selector: 'lista-de-contatos',
  templateUrl: './lista-de-contatos.component.html',
  styleUrls: ['./lista-de-contatos.component.css']
})
export class ListaDeContatosComponent implements OnInit {

  contatos:Contato[]
  private cs:ContatoService = new ContatoService();

  constructor() { 
    this.contatos = this.cs.getContatos();
  }

  ngOnInit(): void {
  }

}
