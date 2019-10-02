import { BuscacepService } from './../services/buscacep/buscacep.service';
import { Localmulta } from './../models/localmulta/localmulta';
import { InscricaomunicipalService } from '../services/inscricaomunicipal/InscricaomunicipalService';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Setores } from '../models/setores/setores';
import { Documentos } from '../models/documentos/documentos';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { AvisosalvarService } from '../services/avisosalvar/avisosalvar.service';
import { AvisosalvarComponent } from '../avisosalvar/avisosalvar.component';
import { AvisocamposComponent } from '../avisocampos/avisocampos.component';
import { LogadoService } from '../services/logado/logado.service';
import { AvisocamposService } from '../services/avisocampos/avisocampos.service';
import * as moment from 'moment-timezone';
import { Buscacadastro } from '../models/busca/buscacadastro';
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


  constructor(
    private router: Router,
    public notificado: Notificado,
    public inscmunservice: InscricaomunicipalService,
    private _snackBar: MatSnackBar,
    private serviceSalvar: AvisosalvarService,
    private serviceCampos: AvisocamposService,
    private logado: LogadoService,
    public documento: Buscacadastro,
    public local: Localmulta,
    public buscacepService: BuscacepService,
    private pdfservice: PdfService
  ) { }

  setores = new Setores().getTipos();
  documentos = new Documentos().getDocs();
  @ViewChild('submitButton', { static: true }) submitButton;
  ngOnInit() {
    this.notificado = new Notificado();
    this.local = new Localmulta();
    this.documento = new Buscacadastro(); // classe que representa apenas um atributo para resgatar o número do documento entre views
    this.documento.numero = '';

    this.logado.currentMessage.subscribe(user => {
      this.usuario = user.nome;
      (user.link) ? this.link = user.link.replace('open', 'uc') : this.link = '';

    });
  }

  downloadPDF() {
    this.notificado.dataTexto = this.pdfservice.getDataExtenso(this.gerarData());
    this.notificado.data = this.gerarData();
    this.notificado.notificacao = '4245';
    // tslint:disable-next-line: max-line-length
    this.notificado.qrcode = googleUrl + this.notificado.infracao;
    return this.pdfservice.downloadPDF(this.notificado);
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


  onSubmit() {
    if (1 === 1) {
      this.serviceCampos.mudarAviso(false);
      this.openSnackBarCampos();
    } else {
      this.serviceSalvar.mudarAviso(true);

    }
  }

  openSnackBarSalvar() {
    const config = new MatSnackBarConfig();
    config.duration = 5000;
    config.verticalPosition = 'top';
    this._snackBar.openFromComponent(AvisosalvarComponent, config);
  }

  openSnackBarCampos() {
    const config = new MatSnackBarConfig();
    config.duration = 5000;
    config.verticalPosition = 'top';
    this._snackBar.openFromComponent(AvisocamposComponent, config);
  }

  reset() {
    this.nome = null;
  }

  gerarData() {
    const data = Date.now();
    const dateMoment = moment(data);
    return dateMoment.tz('America/Sao_Paulo').format('DD/MM/YYYY');
  }

  openSource() {
    this.documento.numero = this.documento.numero
      .split('/').join('')
      .split('.').join('')
      .split('-').join('')
      .split(',').join('');

  }

  buscaNotificado(value) {
    if (value && value.length === 8) {
      this.inscmunservice.buscarCadastro(value).subscribe(resp => {
        this.notificado = resp.body;
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
    this.serviceSalvar.mudarAviso(false);
  }

}
