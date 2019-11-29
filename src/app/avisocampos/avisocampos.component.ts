import { Component, OnInit } from '@angular/core';
import { AvisocamposService } from '../services/avisocampos/avisocampos.service';

@Component({
  selector: 'app-avisocampos',
  templateUrl: './avisocampos.component.html',
  styleUrls: ['./avisocampos.component.scss']
})
export class AvisocamposComponent implements OnInit {
  loadingCampos = 1;

  constructor(private avisocampos: AvisocamposService) { }

  ngOnInit() {
    this.avisocampos.currentMessage.subscribe(x =>  {
      this.loadingCampos = x;
    });
  }

}
