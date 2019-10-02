import { Injectable } from '@angular/core';
import { Avisosalvarmodel } from '../../models/avisosalvarmodel/avisosalvarmodel';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvisosalvarService {

  public message = new Avisosalvarmodel();
  public messageSource = new BehaviorSubject(this.message.aviso);
  currentMessage = this.messageSource.asObservable();

  constructor() {
      this.message.aviso = false;
  }

  mudarAviso(aviso: boolean){
      this.messageSource.next(aviso);
  }
}
