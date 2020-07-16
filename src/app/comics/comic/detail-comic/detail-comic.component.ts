import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../api.service'
import { Observable, Subscriber } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-comic',
  templateUrl: './detail-comic.component.html',
  styleUrls: ['./detail-comic.component.css']
})
export class DetailComicComponent implements OnInit {

  public id: string;
  data:any;
  characters : any;
  creators: any;
  comic: any;
  url=window.location.href.split("/").pop();

  value:string;
  name:string;

  constructor(private comicSvc: ApiService,private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      this.getComicDetail();
      this.detailCharacter(this.url);
      this.detailCreators(this.url);
  }

  
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
  
  getComicDetail() {
      this.comicSvc.getDetail("comics",this.id).subscribe(
          (subscriptor)=>{
              this.comic = subscriptor[0];
          }
      );
  }

  getID(url:string) {
    return url.split("/").pop();
}

  async detailCharacter(url:string){
    this.comicSvc.getDetailDetail("comics",this.id,"characters").subscribe(
        (subscriptor)=>this.characters = subscriptor);
}

async detailCreators(url:string){
  this.comicSvc.getDetailDetail("comics",this.id,"creators").subscribe(
      (subscriptor)=>this.creators = subscriptor);
      
}
  
}
