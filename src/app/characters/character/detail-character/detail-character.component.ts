import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../api.service';
import { Observable, Subscriber } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-character',
  templateUrl: './detail-character.component.html',
  styleUrls: ['./detail-character.component.css']
})
export class DetailCharacterComponent implements OnInit {

    public id: string;
    data:any;
    character : any;
    comics: any;
    series:any;
    url=window.location.href.split("/").pop();

    value:string;
    name:string;

    constructor(private characterSvc: ApiService,private comicSvc: ApiService,private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.id = this.route.snapshot.paramMap.get('id');
        this.getCharacterDetail();
        this.detailComics(this.url);
        this.detailSeries(this.url)
    }

    // getID(url:string) {
    //     return url.split("/").pop();
    // }

    artistFound (creators:any, role:string) {
        this.value= role + " not specified";
        this.name =""
        for (let i = 0; i < creators.length; i++) {
          if (creators[i].role==role.toLowerCase() && this.name==""){
            this.name = role + ": " + creators[i].name;
          }
        }
        if (this.name =="") {
          this.name=this.value;
        }
        return this.name;
    
      }

    async getCharacterDetail() {
        this.characterSvc.getDetail("characters",this.id).subscribe(
            (subscriptor)=>this.character = subscriptor[0]);
    }

    async detailComics(url:string){
        this.characterSvc.getDetailDetail("characters",this.id,"comics").subscribe(
            (subscriptor)=>this.comics = subscriptor);
            
    }

    async detailSeries(url:string){
        this.characterSvc.getDetailDetail("characters",this.id,"series").subscribe(
            (subscriptor)=>this.series = subscriptor);
            
    }

}
