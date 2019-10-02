import { Cadastro } from './../../models/cadastro/cadastro';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  public message = new Cadastro();

  public messageSource = new BehaviorSubject(this.message);
  currentMessage = this.messageSource.asObservable();

  constructor() {
  }

  getCadastro(cadastro: Cadastro) {
    this.messageSource.next(cadastro);
  }

}
