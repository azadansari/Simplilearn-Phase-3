import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
@Input()
parentname:string="";  // normal variable use to access the value of parent variable
childAge:number=21;

@Output()
eventRef = new EventEmitter<number>();
childDesg:string="Tester";
  constructor() { }

  ngOnInit(): void {
  }

  passValue():void{
    this.eventRef.emit(this.childAge);
  }
  name:Array<string>=["Raj","Azad","Amar"];

}
