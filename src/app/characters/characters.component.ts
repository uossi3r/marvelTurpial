import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'
import { Observable } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor(private characterSvc: ApiService) { }
  allCharacters : Observable<any>;
  numCharacters : Observable<any>;
  url=window.location.href.split("/").pop();
  alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  filterLetter="";

  length=this.numCharacters;
  pageIndex=0;
  pageSize=20;


  ngOnInit(): void {
    this.getCharacters();
    this.getNumCharacters();
  }

  getCharacters() {
    this.allCharacters = this.characterSvc.getAll(this.url);
  }

  getNumCharacters() {
    this.numCharacters = this.characterSvc.getNum(this.url);
  }

  onPageChange(event:PageEvent){
    this.pageIndex=event.pageIndex;
    this.pageSize=event.pageSize;
    this.allCharacters = this.characterSvc.getAll(this.url,event.pageSize.toString(),(event.pageIndex*event.pageSize).toString(),this.filterLetter);
  }

  onKeyChange(event) {
    this.filterLetter = (event.path[0].value!='' ? "nameStartsWith="+event.path[0].value+"&" : '')
    this.allCharacters = this.characterSvc.getAll(this.url,this.pageSize.toString(),(this.pageIndex*this.pageSize).toString(),this.filterLetter);
    this.numCharacters = this.characterSvc.getNum(this.url,this.pageSize.toString(),(this.pageIndex*this.pageSize).toString(),this.filterLetter);
  }

  onClick(event) {
    this.filterLetter = "nameStartsWith="+event.path[0].innerHTML+"&";
    this.allCharacters = this.characterSvc.getAll(this.url,this.pageSize.toString(),(this.pageIndex*this.pageSize).toString(),this.filterLetter);
    this.numCharacters = this.characterSvc.getNum(this.url,this.pageSize.toString(),(this.pageIndex*this.pageSize).toString(),this.filterLetter);
  }

}
