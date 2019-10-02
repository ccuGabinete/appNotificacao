import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Cadastro } from '../../interfaces/cadastro';
import { Observable, of, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const apiUrl = 'https://ccuapi.herokuapp.com/';
const local = 'https://ccuapi.herokuapp.com/buscarDoc';


@Injectable({
  providedIn: 'root'
})
export class SalvarcadastroService {

  constructor(private http: HttpClient) { }

  salvarCadastro(cadastro: Cadastro): Observable<HttpResponse<Cadastro>> {
    return this.http.post<Cadastro>(apiUrl, cadastro, { observe: 'response' })
      .pipe(
        catchError(this.handleError)
      );
  }

  buscarCadastro(numero: string): Observable<HttpResponse<Cadastro>> {
    return this.http.post<Cadastro>(local, { numero: numero }, { observe: 'response' })
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
