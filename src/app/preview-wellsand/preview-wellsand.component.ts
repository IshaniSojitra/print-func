import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import numToWords from 'num-to-words';

@Component({
  selector: 'app-preview-wellsand',
  templateUrl: './preview-wellsand.component.html',
  styleUrls: ['./preview-wellsand.component.css']
})
export class PreviewWellsandComponent implements OnInit {

  data;
  invoiceNo;
  todayDate;
  goodsDesc;
  hsnCode;
  quantity;
  rate;
  discount;
  otherCharge;
  consignee;
  custGST;
  vehicleNo;
  dispatch;
  mobile;
  idMark;
  invoice;
  custCity;
  custState;
  custStateCode;
  freight;

  totAmount;
  discountAmount;
  igstAmt;
  grandTot;
  roundOff;

  grandTotWord;
  totgstWord;
  totigstWord;

  constructor(private service: DataServiceService) { }

  ngOnInit() {
    this.service.curWellsandMessage.subscribe(data => this.data = data);
    console.log(this.data);
    this.invoiceNo = this.data[0].invoiceNo;
    this.todayDate = this.data[0].todayDate;
    this.goodsDesc = this.data[0].goodsDesc;
    this.hsnCode = this.data[0].hsnCode;
    this.quantity = this.data[0].quantity;
    this.rate = this.data[0].rate;
    this.discount = this.data[0].discount;
    this.otherCharge = this.data[0].otherCharge;
    this.consignee = this.data[0].consignee;
    this.custGST = this.data[0].custGST;
    this.vehicleNo = this.data[0].vehicleNo;
    this.dispatch = this.data[0].dispatch;
    this.mobile = this.data[0].mobile;
    this.idMark = this.data[0].idMark;
    this.invoice = this.data[0].invoice;
    this.custCity = this.data[0].custCity;
    this.custState = this.data[0].custState;
    this.custStateCode = this.data[0].custStateCode;
    this.freight = this.data[0].freight;

    this.totAmount = this.rate * this.quantity;
    this.grandTot = this.totAmount;
    if (this.discount != 0 && this.discount != null) {
      this.grandTot = this.grandTot - this.discount;
    }

    if(this.otherCharge != 0 && this.otherCharge != null){
      this.grandTot = this.grandTot + this.otherCharge;
    }

    if (this.grandTot != undefined) {
      this.roundOff = Math.round(this.grandTot) - this.grandTot;
      this.grandTot = Math.round(this.grandTot);

      this.grandTotWord = numToWords(this.grandTot, { ands: true }) + " Only";
      var re = /\-/gi;
      this.grandTotWord = this.grandTotWord.replace(re, " ");
    }
  }

  onSubmit() {
    window.print();
  }

}
