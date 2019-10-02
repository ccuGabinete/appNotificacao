import { Component, OnInit } from '@angular/core';
import { SucessoService } from '../services/sucesso/SucessoService';
import { AvisocamposService } from '../services/avisocampos/avisocampos.service';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.scss']
})
export class AlertaComponent implements OnInit {
  loadingAcesso: boolean =  false;
  

  constructor(
        private aviso: SucessoService        
  ) { }

  ngOnInit() {
    this.aviso.currentMessage.subscribe(x =>  {
      this.loadingAcesso = x.aviso;
      console.log(this.loadingAcesso);
    })

  }

}
