import { Component, Input, OnInit } from '@angular/core';
import Article from '../models/article.model';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  private symbols: number = 250;
  @Input() article: Article = new Article("", "", "", "");
  @Input() articleDesc: string = this.article.description;
  descToShow: string;
  articleDescLen: number;
  showReadMoreBtn: boolean = true;
  showHideBtn: boolean = false;
  imageIsShown: boolean = false;
  imageButtonTitle: string = "Show Image";

  constructor() {
    this.articleDescLen = 0;
    this.descToShow = "";
   }

  ngOnInit(): void {
  }

  readMore(): void {
    this.articleDescLen += this.symbols;
    if(this.articleDescLen >= this.articleDesc.length){
      this.showReadMoreBtn = false;
      this.showHideBtn = true;
    } else {
      this.descToShow = this.articleDesc.substring(0, this.articleDescLen);
    }
  }

  hideDesc(): void {
    this.descToShow = "";
    this.articleDescLen = 0;
    this.showHideBtn = false;
    this.showReadMoreBtn = true;
  }

  toggleImage(): void {
    this.imageIsShown = !this.imageIsShown; // = !this.imageIsShown? true : false;
    this.imageButtonTitle = this.imageIsShown ? "Hide Image" : "Show image";
    
  }
}
