import { Component, OnInit } from '@angular/core';
import { fromEvent, observable } from "rxjs";

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit {
  data$:any=[];
  subscription:any;
  observable:any;
  constructor() {
      this.observable = fromEvent(document,"click");
       this.subscription =this.observable.subscribe(
        e=>{
            setTimeout(() => {
              this.data$.push([e.x,e.y])
            }, 1000);
        } 
       
      );


   }

  ngOnInit() {
  }


  ngOnDestory(){
    console.log("IN");
    
    this.subscription.unsubscribe()
  }
}
