import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  isEditForm : boolean = true;
  todayDat : Date;
  billForm : FormGroup;

  constructor(private fb: FormBuilder){

  }

  ngOnInit(){
    this.billForm = this.fb.group({
      invoiceNo : "",
      todayDate : "",
      goodsDesc : "",
      hsnCode : "",
      quantity : 0,
      rate : 0,
      gst : 0,
      consignee : "",
      custGST : "",
      vehicleNo : "",
      lrNo : ""
    });
    this.todayDat = new Date();
    var newDate = this.todayDat.getDate() + '/' + (this.todayDat.getMonth()+1) + '/' + this.todayDat.getFullYear();
    this.billForm.controls.todayDate.setValue(newDate);
  }
  

  backPage(){
    this.isEditForm = true;
  }


}
