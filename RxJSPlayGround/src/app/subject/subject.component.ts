import { Component, OnInit } from '@angular/core';
import { Subject } from "rxjs";

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {
subject:any;
data$:string[]=[];
  constructor() { }

  ngOnInit() {
this.subject = new Subject()

this.subject.subscribe(
  (x:any)=>{
    this.data$.push(x)
  }
)

this.subject.next("Subject is coming to you")


  }

}
