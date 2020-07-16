import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'
import { Observable } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  constructor(private serieSvc: ApiService) { }
  allSeries : Observable<any>;
  numSeries : Observable<any>;
  url=window.location.href.split("/").pop()
  alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  filterLetter="";

  serieType=""

  length=this.numSeries;
  pageIndex=0;
  pageSize=20;

  ngOnInit(): void {
    this.getSeries();
    this.getNumSeries()
  }

  getSeries() {
    this.allSeries = this.serieSvc.getAll(this.url);
  }
  
  getNumSeries() {
    this.numSeries = this.serieSvc.getNum(this.url);
  }
  
  onPageChange(event:PageEvent){
    this.pageIndex=event.pageIndex;
    this.pageSize=event.pageSize;
    this.allSeries = this.serieSvc.getAll(this.url,event.pageSize.toString(),(event.pageIndex*event.pageSize).toString(),this.filterLetter);
  }

  onKeyChange(event) {
    this.filterLetter = (event.path[0].value!='' ? "titleStartsWith="+event.path[0].value+"&" : '')
    console.log(this.filterLetter);
    this.allSeries = this.serieSvc.getAll(this.url,this.pageSize.toString(),(this.pageIndex*this.pageSize).toString(),this.filterLetter,this.serieType);
    this.numSeries = this.serieSvc.getNum(this.url,this.pageSize.toString(),(this.pageIndex*this.pageSize).toString(),this.filterLetter);
  }

  onClick(event) {
    this.filterLetter = "titleStartsWith="+event.path[0].innerHTML+"&";
    this.allSeries = this.serieSvc.getAll(this.url,this.pageSize.toString(),(this.pageIndex*this.pageSize).toString(),this.filterLetter,this.serieType);
    this.numSeries = this.serieSvc.getNum(this.url,this.pageSize.toString(),(this.pageIndex*this.pageSize).toString(),this.filterLetter);
  }

  onChange(event) {
    this.serieType = `seriesType=${event.target.options[event.target.options.selectedIndex].value}&`;
    this.allSeries = this.serieSvc.getAll(this.url,this.pageSize.toString(),(this.pageIndex*this.pageSize).toString(),this.filterLetter,this.serieType);
  }
}
