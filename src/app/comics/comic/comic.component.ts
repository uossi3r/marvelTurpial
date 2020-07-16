import { Component, OnInit, Input } from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {

  value:string;
  name:string;
  
  @Input() comic: any;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
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

  // open(content:any) {
  //   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult = `Dismissed`;
  //   });
  // }


}
