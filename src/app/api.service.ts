import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Md5} from 'ts-md5/dist/md5';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  PUBLIC_KEY = '041b90eed79e598540b02a91e2b44dbf';
  PRIVATE_KEY = '8b0d5c29106e4ed2f686647807fb2907d499e825';
  TimeStamp = '1';
  HASH = Md5.hashStr(`${this.TimeStamp}${this.PRIVATE_KEY}${this.PUBLIC_KEY}`).toString();;
  URL_API = ''
  total:number;
  constructor(private http: HttpClient) { }

  getAll(menu:string,limit:string="20",offset:string='0',filter:string="",order="") {
    return this.http.get<any>(this.getURL(menu,limit, offset, filter,order))
    .pipe(map((data: any) => data.data.results))
  }

  getNum(menu:string,limit:string="20",offset:string='0',filter:string="") : Observable<any> {
    return this.http.get<any>(this.getURL(menu,limit, offset, filter))
    .pipe(map((data: any) => data.data.total))
  }

  getURL(url:string, limit:string="20", offset:string='0', filter="", order="") {
    return this.URL_API = `https:gateway.marvel.com/v1/public/${url}?${filter}${order}limit=${limit}&offset=${offset}&ts=${this.TimeStamp}&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;
  }

  getDetail (url:string,character:string) : Observable<any> {
    return this.http.get<any>(this.getURLDetail(url,character))
    .pipe(map((data: any) => data.data.results))
  }

  getURLDetail(url:string, id:string) {
    return this.URL_API = `https:gateway.marvel.com/v1/public/${url}/${id}?ts=${this.TimeStamp}&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;
  }

  getDetailDetail(url,id,what): Observable<any> {
    return this.http.get<any>(this.getURLExtra(url,id,what))
    .pipe(map((data: any) => data.data.results))
  }

  getURLExtra(url:string, id:string, need:string) {
    return this.URL_API = `https:gateway.marvel.com/v1/public/${url}/${id}/${need}?ts=${this.TimeStamp}&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;
  }
}
