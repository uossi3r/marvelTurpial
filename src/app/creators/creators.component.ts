import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'
import { Observable } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.css']
})
export class CreatorsComponent implements OnInit {

  constructor(private creatorSvc: ApiService) { }
  allCreators : Observable<any>;
  numCreators : Observable<any>;
  url=window.location.href.split("/").pop()
  alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  filterLetter="";

  length=this.numCreators;
  pageIndex=0;
  pageSize=20;

  ngOnInit(): void {
    this.getCreators();
    this.getNumCreators()
  }

getCreators() {
  this.allCreators = this.creatorSvc.getAll(this.url);
}

getNumCreators() {
  this.numCreators = this.creatorSvc.getNum(this.url);
}

onPageChange(event:PageEvent){
  this.pageIndex=event.pageIndex;
  this.pageSize=event.pageSize;
  this.allCreators = this.creatorSvc.getAll(this.url,event.pageSize.toString(),(event.pageIndex*event.pageSize).toString(),this.filterLetter);
}

onKeyChange(event) {
  this.filterLetter = (event.path[0].value!='' ? "nameStartsWith="+event.path[0].value+"&" : '')
  this.allCreators = this.creatorSvc.getAll(this.url,this.pageSize.toString(),(this.pageIndex*this.pageSize).toString(),this.filterLetter);
  this.numCreators = this.creatorSvc.getNum(this.url,this.pageSize.toString(),(this.pageIndex*this.pageSize).toString(),this.filterLetter);
}

onClick(event) {
  this.filterLetter = "nameStartsWith="+event.path[0].innerHTML+"&";
  this.allCreators = this.creatorSvc.getAll(this.url,this.pageSize.toString(),(this.pageIndex*this.pageSize).toString(),this.filterLetter);
  this.numCreators = this.creatorSvc.getNum(this.url,this.pageSize.toString(),(this.pageIndex*this.pageSize).toString(),this.filterLetter);
}

}
