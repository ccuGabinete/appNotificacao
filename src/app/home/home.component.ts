import { AlertaComponent } from './../alerta/alerta.component';
import { Observable, Subscription } from 'rxjs';
import { LoginService } from './../services/acesso/login.service';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { SucessoService } from '../services/sucesso/SucessoService';
import { LogadoService } from '../services/logado/logado.service';
import { first } from 'rxjs/operators';
import { Usuario } from '../models/usuario/usuario';
import { AvisocamposComponent } from '../avisocampos/avisocampos.component';
import { AvisocamposService } from '../services/avisocampos/avisocampos.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [LoginService]
})

export class HomeComponent implements OnInit {

  headers: string[];
  nome: string;
  link: string;

  constructor(
    private router: Router,
    public usuario: Usuario,
    public login: LoginService,
    private _snackBar: MatSnackBar,
    private aviso: SucessoService,
    private logado: LogadoService,
    private serviceCampos: AvisocamposService
  ) { }

  observer: Subscription;
  durationInSeconds = 225;

  @ViewChild('submitButton', { static: true }) submitButton;

  openSnackBar() {
    const config = new MatSnackBarConfig();
    config.duration = 5000;
    config.verticalPosition = 'top';
    this._snackBar.openFromComponent(AlertaComponent, config);
  }

  ngOnInit(): void {
    this.usuario.login = '';
    this.usuario.senha = '';
  }

  changeEvent($event) {
    this.submitButton.focus();
  }

  openSnackBarCampos() {
    const config = new MatSnackBarConfig();
    config.duration = 5000;
    config.verticalPosition = 'top';
    this._snackBar.openFromComponent(AvisocamposComponent, config);
  }

  onSubmit() {
    if (!this.usuario.login || !this.usuario.senha) {
      this.openSnackBar();
    } else {

      this.login.getUser(this.usuario)
        .subscribe(res => {
          const user = new Usuario();
          if (res.body.setor === 'autos' || res.body.setor === 'gabinete') {
            user.nome = res.body.nome;
            user.link = res.body.link;
            this.logado.mudarUsuario(user);
            this.router.navigateByUrl('dados');
          } else {
            this.serviceCampos.mudarAviso(5);
            this.openSnackBarCampos();
          }
        },

          error => {
            this.openSnackBar();
          }

        );

    }
  }
}
