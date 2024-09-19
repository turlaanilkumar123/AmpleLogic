import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AmpleLogic';
  startbar=0;
  bar=0;
  showProgress:boolean=true;
  alertinfo:boolean=false;
  
  constructor(private dialog:MatDialog){}
  showBar(){
this.showProgress=true;
setInterval(()=>{
  if(this.bar<100){
    this.bar=this.bar+1;
  }
  if(this.bar>=100){
   this.alertinfo=true;
   
  }
},100)
  }
}
