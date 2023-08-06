import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
  }
  title = 'All tech fusion -Plz Subscribe';
isDisabled=false;
count=1;
add(){
  this.count=this.count+1;
}
text='Template <script>alert("script")</script> syntax'
}
