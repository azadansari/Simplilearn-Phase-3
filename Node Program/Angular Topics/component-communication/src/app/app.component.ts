import { AfterViewChecked, Component, ViewChild } from '@angular/core';
import { Child1Component } from './child1/child1.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked{
  pname:string="Raj Kumar";
  cAge:number=0;
  cDesg:string="Tester";

  @ViewChild(Child1Component)
  childRef?:Child1Component

  ngAfterViewChecked(): void {
      if(this.childRef!=null){
        this.cDesg=this.childRef?.childDesg;
      }
  }
}
