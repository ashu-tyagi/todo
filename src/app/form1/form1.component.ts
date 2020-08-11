import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss']
})
export class Form1Component implements OnInit {
  constructor() { }
  dataList = ['Phones', 'Refregetor'];
  
  inputData:any;

  ngOnInit() {}
  addData(val){
    if(val.length>0){
      this.dataList.push(val);
      this.inputData = "";
    } 
  }

}
