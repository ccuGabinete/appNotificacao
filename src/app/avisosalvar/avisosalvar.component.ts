import { Component, OnInit } from '@angular/core';
import { AvisosalvarService } from '../services/avisosalvar/avisosalvar.service';

@Component({
  selector: 'app-avisosalvar',
  templateUrl: './avisosalvar.component.html',
  styleUrls: ['./avisosalvar.component.scss']
})
export class AvisosalvarComponent implements OnInit {
  loadingSalvar = false;

  constructor(private avisosalvar: AvisosalvarService) { }

  ngOnInit() {
    this.avisosalvar.currentMessage.subscribe(x =>  {
      this.loadingSalvar = x;
    });
  }

}
