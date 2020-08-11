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

  addData(){
    // console.log(this.inputData);
    if(this.inputData.length > 0){
      console.log(this.inputData);
      this.dataList.push(this.inputData);
      this.inputData = "";
    } 
  }

}
