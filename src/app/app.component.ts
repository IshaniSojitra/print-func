import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isEditForm : boolean = true;
  todayDat : Date;
  billForm : FormGroup;

  constructor(private fb: FormBuilder){

  }

  ngOnInit(){
    this.billForm = this.fb.group({
      invoiceNo : "",
      todayDate : "",
      customerName : ""
    });
    this.todayDat = new Date();
    var newDate = this.todayDat.getDate() + '/' + (this.todayDat.getMonth()+1) + '/' + this.todayDat.getFullYear();
    this.billForm.controls.todayDate.setValue(newDate);
  }
  onSubmit(){
    window.print();
  }

  backPage(){
    this.isEditForm = true;
  }

  previewPage(){
    this.isEditForm = false;
  }
}
