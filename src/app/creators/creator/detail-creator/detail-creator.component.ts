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

  constructor(private creatorSvc: ApiService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getCreatorDetail();
  }

  async getCreatorDetail() {
    this.creatorSvc.getDetail("creators",this.id).subscribe(
        (subscriptor)=>this.creator = subscriptor[0]);
}

  getID(url:string) {
      return url.split("/").pop();
  }

}
