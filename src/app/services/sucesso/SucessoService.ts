import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Aviso } from '../../models/aviso/aviso';
@Injectable({
  providedIn: 'root'
})
export class SucessoService {
    public message = new Aviso();
    public messageSource = new BehaviorSubject(this.message);
    currentMessage = this.messageSource.asObservable();

    constructor() { 
        this.message.aviso = false;
    }

    mudarAviso(aviso: boolean){
        this.messageSource.next(this.message);
    }
}
