import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) {

  }

  getTopHeadLines(){
    return this.http.get(`https://newsapi.org/v2/everything?q=bitcoin&from=2019-06-30&sortBy=publishedAt&apiKey=71468da5ef6144bf87efbacc8f3435a0`)
  }
}
