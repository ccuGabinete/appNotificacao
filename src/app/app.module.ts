import { BuscacepService } from './services/buscacep/buscacep.service';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { InscricaomunicipalService } from './services/inscricaomunicipal/InscricaomunicipalService';
import 'reflect-metadata';
import '../polyfills';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { MatDatepickerModule } from '@angular/material/datepicker';

// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { DadosComponent } from './dados/dados.component';
import { Cadastro } from './models/cadastro/cadastro';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoginService } from './services/acesso/login.service';
import { HomeComponent } from './home/home.component';

import { AppComponent } from './app.component';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AlertaComponent } from './alerta/alerta.component';
import { SucessoService } from './services/sucesso/SucessoService';
import { Aviso } from './models/aviso/aviso';
import { AvisocamposService } from './services/avisocampos/avisocampos.service';
import { AvisosalvarService } from './services/avisosalvar/avisosalvar.service';
import { Avisocamposmodel } from './models/avisoscamposmodel/avisocamposmodel';
import { Avisosalvarmodel } from './models/avisosalvarmodel/avisosalvarmodel';
import { AvisosalvarComponent } from './avisosalvar/avisosalvar.component';
import { AvisocamposComponent } from './avisocampos/avisocampos.component';
import { LogadoService } from './services/logado/logado.service';
import { FormularioComponent } from './formulario/formulario.component';
import { CadastroService } from './services/cadastro/cadastro.service';
import { MatIconModule } from '@angular/material/icon';
import { Buscacadastro } from './models/busca/buscacadastro';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Usuario } from './models/usuario/usuario';
import { Notificado } from './models/notificado/notificado';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { Localmulta } from './models/localmulta/localmulta';
import { PdfService } from './services/pdf/pdf.service';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    DadosComponent,
    HomeComponent,
    AlertaComponent,
    AvisosalvarComponent,
    AvisocamposComponent, FormularioComponent
  ],
  imports: [
    GooglePlaceModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgbModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatIconModule,
    MatTooltipModule,
    MatExpansionModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    PdfService,
    Localmulta,
    Cadastro,
    Aviso,
    LoginService,
    SucessoService,
    AvisocamposService,
    AvisosalvarService,
    Avisosalvarmodel,
    Avisocamposmodel,
    LogadoService,
    CadastroService,
    Buscacadastro,
    Usuario,
    Notificado,
    MatDatepickerModule,
    InscricaomunicipalService,
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
    BuscacepService
  ],
  bootstrap: [AppComponent],
  exports: [
    AlertaComponent,
    AvisocamposComponent,
    AvisosalvarComponent
  ],
  entryComponents: [
    AlertaComponent,
    AvisocamposComponent,
    AvisosalvarComponent
  ]

})
export class AppModule { }
