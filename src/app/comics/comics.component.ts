import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'
import { Observable } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  constructor(private comicSvc: ApiService) { }
  allComics : Observable<any>;
  numComics : Observable<any>;
  url=window.location.href.split("/").pop()
  alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  filterLetter="";
  order="";

  length=this.numComics;
  pageIndex=0;
  pageSize=20;

  ngOnInit(): void {
    this.getComics();
    this.getNumsComics();
  }

  getComics() {
    this.allComics = this.comicSvc.getAll(this.url);
  }

  getNumsComics() {
    this.numComics = this.comicSvc.getNum(this.url);
  }

  onPageChange(event:PageEvent){
    this.pageIndex=event.pageIndex;
    this.pageSize=event.pageSize;
    this.allComics = this.comicSvc.getAll(this.url,event.pageSize.toString(),(event.pageIndex*event.pageSize).toString(),this.filterLetter);
  }

  onKeyChange(event) {
    this.filterLetter = (event.path[0].value!='' ? "titleStartsWith="+event.path[0].value+"&" : '')
    console.log(this.filterLetter);
    this.allComics = this.comicSvc.getAll(this.url,this.pageSize.toString(),(this.pageIndex*this.pageSize).toString(),this.filterLetter,this.order);
    this.numComics = this.comicSvc.getNum(this.url,this.pageSize.toString(),(this.pageIndex*this.pageSize).toString(),this.filterLetter);
  }

  onClick(event) {
    this.filterLetter = "titleStartsWith="+event.path[0].innerHTML+"&";
    this.allComics = this.comicSvc.getAll(this.url,this.pageSize.toString(),(this.pageIndex*this.pageSize).toString(),this.filterLetter,this.order);
    this.numComics = this.comicSvc.getNum(this.url,this.pageSize.toString(),(this.pageIndex*this.pageSize).toString(),this.filterLetter);
  }

  onChange(event) {
    this.order = `orderBy=${event.target.options[event.target.options.selectedIndex].value}&`;
    this.allComics = this.comicSvc.getAll(this.url,this.pageSize.toString(),(this.pageIndex*this.pageSize).toString(),this.filterLetter,this.order);
  }

}
