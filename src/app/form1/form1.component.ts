import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss']
})
export class Form1Component implements OnInit {

  constructor() { }
  dataList = ["a", "b"];
  inputData:string = "";
  currentIndex:number= -1;
  ngOnInit() {}

  addData(){
    if(this.inputData.length > 0){
      //console.log(this.inputData);
      this.dataList.push(this.inputData);
      this.inputData = "";
    } 
  }
  remove(i){
    this.dataList.splice(i, 1);
  }
  edit(i){
    this.currentIndex = i;
    this.inputData = this.dataList[i];
  }
  update(){
    this.dataList[this.currentIndex] = this.inputData;
    this.currentIndex = -1;
    this.inputData = "";
  }

}
