import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaTopHeadLines } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) {

  }

  getTopHeadLines() {
    return this
    .http
    .get<RespuestaTopHeadLines>
    (`https://newsapi.org/v2/top-headlines?country=us&apiKey=5c745cce56944855a3e831b00ce7882e`);
  }
}
