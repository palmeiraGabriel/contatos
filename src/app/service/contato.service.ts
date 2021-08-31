import { Injectable } from '@angular/core';
import { Contato } from '../models/Contato';

const BASE_DE_CONTATOS:Contato[] = [
  {
    name:'Sérgio Moura 1',
    email:'sergio1@email.com',
    telefones: ['1111-1111']
  },
  {
    name:'Sérgio Moura 2',
    email:'sergio2@email.com',
    telefones: ['2222-2222','2221-2223']
  },
  {
    name:'Sérgio Moura 3',
    email:'sergio3@email.com',
    telefones: ['3333-3333']
  },
  {
    name:'Sérgio Moura 4',
    email:'sergio4@email.com',
    telefones: ['4444-4444']
  },
  {
    name:'Sérgio Moura 5',
    email:'sergio5@email.com',
    telefones: ['5555-5555']
  },
  {
    name:'Sérgio Moura 6',
    email:'sergio6@email.com',
    telefones: ['6666-6666']
  },
  {
    name:'Sérgio Moura 7',
    email:'sergio7@email.com',
    telefones: ['7777-7777']
  },
  {
    name:'Sérgio Moura 8',
    email:'sergio8@email.com',
    telefones: ['8888-8888']
  },
  {
    name:'Sérgio Moura 9',
    email:'sergio9@email.com',
    telefones: ['9999-9999']
  },]

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor() { }

  getContatos():Contato[]{
     return BASE_DE_CONTATOS 
  }

}
