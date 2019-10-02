import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Avisocamposmodel } from '../../models/avisoscamposmodel/avisocamposmodel';

@Injectable({
  providedIn: 'root'
})
export class AvisocamposService {

  public message = new Avisocamposmodel();
  public messageSource = new BehaviorSubject(this.message.aviso);
  currentMessage = this.messageSource.asObservable();

  constructor() { 
      this.message.aviso = false;
  }

  mudarAviso(aviso: boolean){
      this.messageSource.next(aviso);
  }
}
