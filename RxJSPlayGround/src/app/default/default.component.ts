import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  dataFromObservable:string[] = [];
 subscription1:any;
 observable1:any;






  constructor(){
   
   
  
  // observable2.of(()=>{})
  
  
  }

  ngOnInit() {
    this.observable1 = Observable.create((observer:any)=>{
      observer.next("Hello, I am Observable 1");
      setTimeout(() => {
        throw "Look, this Error will throw to the console only"
      }, 500);
      setInterval(()=>{
        observer.next(console.log("still subscribed"))
      },1000)
      
      setTimeout(() => {
        observer.next("Hello, I am Observable 2")
      }, 2000);
      var i = 1;
      setInterval(()=>{
        observer.next(i++)

      },1000)
    
      setTimeout(() => {
        observer.complete()
      }, 6001);
    
      
    });
  

 
  this.subscription1 =this.observable1.subscribe(
    (x)=>{
      this.dataFromObservable.push(x)
    } ,
    (error)=>this.dataFromObservable.push(error),
    ()=>this.dataFromObservable.push("compelete, in next million second this observable will be unsubscribed"))

   
   setTimeout(() => {
    this.subscription1.unsubscribe()
   }, 6002);
  
   setTimeout(() => {
   this.subscription1= this.observable1.subscribe(
       (x)=>this.dataFromObservable.push("new subsrciption coming:"+x),
       (error)=>this.dataFromObservable.push(error),
       ()=>this.dataFromObservable.push("compelete, in next million second this observable will be unsubscribed")
   );
    },6003)
  }

  ngOnDestroy(){
    console.log("In");
    
    this.subscription1.unsubscribe()
  }


}
