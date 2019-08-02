import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RespuestaTopHeadLines } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';

const apikey = environment.apiKey;
const apiUrl = environment.apiUrl;

const headers = new HttpHeaders({
  'X-Api-key' : apikey
});
@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  headlinePage = 0;
  categoriaActual = '';
  categoriaPage = 0;

  constructor(private http: HttpClient) {

  }
  private ejecutarQuery<T>(query: string) {

    query = apiUrl + query;
    return  this.http.get<T>(query, {headers});

  }

  getTopHeadLines() {

    this.headlinePage++;
    return this.ejecutarQuery<RespuestaTopHeadLines>(`/top-headlines?country=us&page=${this.headlinePage}`);
   }

  getTopHeadlinesCategoria(categoria: string) {

    if  (this.categoriaActual === categoria) {
      this.categoriaPage++;
    } else {
      this.categoriaPage = 1;
      this.categoriaActual = categoria;

    }

    return this.ejecutarQuery<RespuestaTopHeadLines>(`/top-headlines?country=us&category=${ categoria }&page${this.categoriaPage}`);

  }
}


