import { Cadastro } from './../models/cadastro/cadastro';
import { CadastroService } from './../services/cadastro/cadastro.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
cadastro: Cadastro = new Cadastro();
logo = require('../../../prefeitura/logo.png');
  constructor(private cadastroservice: CadastroService,  private router: Router) {}

  ngOnInit() {
        this.cadastroservice.currentMessage.subscribe(data => {
        this.cadastro = data;
      }
    );
  }

  onPrint() {
    window.print();
  }

  onSucess() {
    const cadastro = new Cadastro();
    cadastro.numero = '';
    this.cadastroservice.getCadastro(cadastro);
    this.router.navigateByUrl('dados');
  }


}
