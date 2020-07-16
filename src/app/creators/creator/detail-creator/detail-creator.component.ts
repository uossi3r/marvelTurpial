import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-creator',
  templateUrl: './detail-creator.component.html',
  styleUrls: ['./detail-creator.component.css']
})
export class DetailCreatorComponent implements OnInit {

  public id: string;
  data:any;
  creator : any;
  comics: any;
  series:any;
  url=window.location.href.split("/").pop();

  value:string;
  name:string;

  constructor(private creatorSvc: ApiService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getCreatorDetail();
    this.detailComics(this.url);
    this.detailSeries(this.url)
  }

  async getCreatorDetail() {
    this.creatorSvc.getDetail("creators",this.id).subscribe(
        (subscriptor)=>this.creator = subscriptor[0]);
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
  async detailComics(url:string){
    this.creatorSvc.getDetailDetail("creators",this.id,"comics").subscribe(
        (subscriptor)=>this.comics = subscriptor);
        
}

async detailSeries(url:string){
    this.creatorSvc.getDetailDetail("creators",this.id,"series").subscribe(
        (subscriptor)=>this.series = subscriptor);
        
}

}
