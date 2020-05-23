import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  isEditForm: boolean = true;
  todayDat: Date;
  billForm: FormGroup;
  dataList = [];
  data = [];

  constructor(private fb: FormBuilder, private router: Router, private service: DataServiceService) {

  }

  ngOnInit() {
    this.billForm = this.fb.group({
      invoiceNo: "",
      todayDate: "",
      goodsDesc: "",
      hsnCode: "25231000",
      quantity: 0,
      rate: 0,
      gst: 0,
      consignee: "",
      custGST: "",
      vehicleNo: "",
      dispatch: "",
      mobile: "",
      idMark: "53 GRADE",
      igst: 0,
      invoice: "",
      custState: "",
      custStateCode: "",
      freight: ""
    });
    this.todayDat = new Date();
    var newDate = this.todayDat.getDate() + '/' + (this.todayDat.getMonth() + 1) + '/' + this.todayDat.getFullYear();
    this.billForm.controls.todayDate.setValue(newDate);

    this.service.currentMessage.subscribe(data => this.data = data);
    if (this.data != null) {
      this.billForm.setValue({
        invoiceNo: this.data[0].invoiceNo,
        todayDate: this.data[0].todayDate,
        goodsDesc: this.data[0].goodsDesc,
        hsnCode: this.data[0].hsnCode,
        quantity: this.data[0].quantity,
        rate: this.data[0].rate,
        gst: this.data[0].gst,
        consignee: this.data[0].consignee,
        custGST: this.data[0].custGST,
        vehicleNo: this.data[0].vehicleNo,
        dispatch: this.data[0].dispatch,
        mobile: this.data[0].mobile,
        idMark: this.data[0].idMark,
        igst: this.data[0].igst,
        invoice: this.data[0].invoice,
        custState: this.data[0].custState,
        custStateCode: this.data[0].custStateCode,
        freight: this.data[0].freight
      })
    }
  }


  previewPage() {
    this.dataList.push({
      'invoiceNo': this.billForm.get('invoiceNo').value,
      'todayDate': this.billForm.get('todayDate').value,
      'goodsDesc': this.billForm.get('goodsDesc').value,
      'hsnCode': this.billForm.get('hsnCode').value,
      'quantity': this.billForm.get('quantity').value,
      'rate': this.billForm.get('rate').value,
      'gst': this.billForm.get('gst').value,
      'consignee': this.billForm.get('consignee').value,
      'custGST': this.billForm.get('custGST').value,
      'vehicleNo': this.billForm.get('vehicleNo').value,
      'dispatch': this.billForm.get('dispatch').value,
      'mobile': this.billForm.get('mobile').value,
      'idMark': this.billForm.get('idMark').value,
      'igst': this.billForm.get('igst').value,
      'invoice': this.billForm.get('invoice').value,
      'custState': this.billForm.get('custState').value,
      'custStateCode': this.billForm.get('custStateCode').value,
      'freight': this.billForm.get('freight').value
    });
    console.log(this.dataList);
    this.service.changeMessage(this.dataList);
    this.router.navigate(['/preview']);
  }


}
