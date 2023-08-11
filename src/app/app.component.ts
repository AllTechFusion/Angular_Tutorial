import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
  }
  title = 'All tech fusion';
count=1;
size: number | undefined;
value: number | undefined;
addedValue :number | undefined;
flag:boolean | undefined;
add(){
  this.value=undefined;
  this.count=this.count+5;
  if(this.count % 2==0){
    this.value=this.count;
    this.flag= true;
  }
  else{
    this.flag= false
  }
  this.addedValue=this.count;
}

}
