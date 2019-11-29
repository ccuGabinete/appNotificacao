import { SalvarcadastroService } from './../services/salvarcadastro/salvarcadastro.service';
import { BuscacepService } from './../services/buscacep/buscacep.service';
import { Localmulta } from './../models/localmulta/localmulta';
import { InscricaomunicipalService } from '../services/inscricaomunicipal/InscricaomunicipalService';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { AvisocamposComponent } from '../avisocampos/avisocampos.component';
import { LogadoService } from '../services/logado/logado.service';
import { AvisocamposService } from '../services/avisocampos/avisocampos.service';
import * as moment from 'moment-timezone';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario/usuario';
import { Notificado } from '../models/notificado/notificado';
import { PdfService } from '../services/pdf/pdf.service';
const googleUrl = 'https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=https://https://ccuapi.herokuapp.com/resposta/';


@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.scss']
})

export class DadosComponent implements OnInit, OnDestroy {
  nome: string;
  usuario: string;
  link: string;
  panelOpenState = false;
  base64Image: string;
  options = {
    types: ['geocode'],
    componentRestrictions: { country: 'BR' },
    location: [-22.921712, -43.449187]
  };

  loading = false;

  constructor(
    private router: Router,
    public notificado: Notificado,
    public inscmunservice: InscricaomunicipalService,
    private _snackBar: MatSnackBar,
    private serviceCampos: AvisocamposService,
    private logado: LogadoService,
    public local: Localmulta,
    public buscacepService: BuscacepService,
    private pdfservice: PdfService,
    private salvarnotificado: SalvarcadastroService
  ) { }

  @ViewChild('submitButton', { static: true }) submitButton;
  ngOnInit() {
    this.notificado = new Notificado();
    this.local = new Localmulta();

    this.logado.currentMessage.subscribe(user => {
      this.usuario = user.nome;
      (user.link) ? this.link = user.link.replace('open', 'uc') : this.link = '';
      this.notificado.agenterespcadastro = user.nome;
    });
  }

  downloadPDF() {
    this.pdfservice.downloadPDF(this.notificado);
  }

  onSubmit() {
    if (this.testaCampos()) {

      this.logado.currentMessage.subscribe(user => {
        this.notificado.data = this.gerarData();
        this.notificado.dataInfracao  = this.gerarMomentData(this.notificado.dataInfracao);
        this.notificado.dataacao  = this.gerarMomentData(this.notificado.dataacao);
        this.notificado.agenterespcadastro = user.nome;
        this.salvarnotificado.buscarCadastro().subscribe(data => {

          this.notificado.notificacao = data.body.total + 2007;
          this.notificado.notificacao = this.notificado.notificacao.toString();

          if (!this.notificado.complemento) {
            this.notificado.complemento = '';
          }
          this.notificado.dataTexto = this.pdfservice.getDataExtenso(this.gerarData());

          // tslint:disable-next-line: max-line-length
          this.notificado.qrcode = googleUrl + this.notificado.infracao;

          this.salvarnotificado.salvarCadastro(this.notificado).subscribe(() => {
            this.downloadPDF();
          }, error => this.serviceCampos.mudarAviso(4)
          );
        });
      });
    } else {
      this.serviceCampos.mudarAviso(2);
      this.openSnackBarCampos();
    }
  }

  testaCampos(): boolean {
    if (
      !this.notificado.matricula ||
      !this.notificado.nome ||
      !this.notificado.endereco ||
      !this.notificado.numero ||
      !this.notificado.municipio ||
      !this.notificado.bairro ||
      !this.notificado.cep ||
      !this.notificado.infracao ||
      !this.notificado.dataInfracao ||
      !this.notificado.dataacao ||
      !this.notificado.localacao ||
      !this.notificado.bairroacao ||
      !this.notificado.pontos
    ) {
      return false;
    } else {
      return true;
    }
  }

  changeEvent() {
    this.submitButton.focus();
  }

  onLogout() {
    const userLogout = new Usuario();
    userLogout.nome = '';
    userLogout.link = '';
    userLogout.senha = '';
    userLogout.isValid = false;
    userLogout.login = '';
    this.logado.mudarUsuario(userLogout);
    this.router.navigateByUrl('');
  }

  openSnackBarCampos() {
    const config = new MatSnackBarConfig();
    config.duration = 5000;
    config.verticalPosition = 'top';
    this._snackBar.openFromComponent(AvisocamposComponent, config);
  }



  gerarData() {
    const data = Date.now();
    const dateMoment = moment(data);
    return dateMoment.tz('America/Sao_Paulo').format('DD/MM/YYYY');
  }

  gerarMomentData(date) {
    const dateMoment = moment(date);
    return dateMoment.tz('America/Sao_Paulo').format('DD/MM/YYYY');
  }

  buscaNotificado(value) {
    if (value && value.length === 8) {
      this.loading = true;
      this.inscmunservice.buscarCadastro(value).subscribe(resp => {
        this.notificado = resp.body;
        this.loading = false;
      }, () => this.notificado.nome = 'Inscrição Municipal inexistente'
      );
    } else {
      this.notificado.nome = 'A matrícula tem 8 dígitos e foram digitados ' + value.length;
    }
  }

  limpaCampo() {
    this.notificado = new Notificado();
    this.local = new Localmulta();
  }

  public handleAddressChange(address: any) {
    if (address.address_components.length < 5) {
      this.notificado.bairroacao = '';
    } else {
      this.notificado.bairroacao = address.address_components[1].long_name;
    }
  }

  public handleAddressChangeCep(address: any) {
    // tslint:disable-next-line: prefer-const
    let cep = address.address_components[0].long_name;
    this.buscacepService.buscarCEP(cep).subscribe(data => {
      this.notificado.cep = data.body.cep;
      this.notificado.endereco = data.body.logradouro;
      this.notificado.municipio = data.body.localidade;
      this.notificado.bairro = data.body.bairro;
    });
  }

  ngOnDestroy(): void {
    this.serviceCampos.mudarAviso(1);
  }

}
