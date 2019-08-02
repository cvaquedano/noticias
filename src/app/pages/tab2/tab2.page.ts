import { Component,  OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { NoticiasService } from 'src/app/services/noticias.service';
import { Article } from 'src/app/interfaces/interfaces';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

@ViewChild(IonSegment, {static: false}) segment: IonSegment;

  categorias: string[] = [
              'business',
              'entertainment',
              'general',
              'health',
              'science',
              'sports',
              'technology'
  ];
  noticias: Article[] = [];

  constructor( private noticiasService: NoticiasService) {}
  ngOnInit() {
    this.cargarNoticias(this.categorias[0]);
  }

  cambioCategoria( event ) {
    this.noticias = [];
    this.cargarNoticias(event.detail.value);

  }

  cargarNoticias(cateogira: string) {


      this.noticiasService.getTopHeadlinesCategoria(cateogira)
      .subscribe( resp => {
        this.noticias.push(...resp.articles);
      });
  }
}




