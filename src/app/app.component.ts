import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
  }
  title = 'Hello';
  number=5;
  obj={}

add(){
  this.number=this.number+1;
  this.obj={
    a:"hello"
  }
}
}
