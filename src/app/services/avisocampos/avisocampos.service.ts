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
    this.message.aviso = 1;
  }

  mudarAviso(aviso: number) {
    this.messageSource.next(aviso);
  }
}
