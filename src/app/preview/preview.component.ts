import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import numToWords from 'num-to-words';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  data;
  invoiceNo;
  todayDate;
  goodsDesc;
  hsnCode;
  quantity;
  rate;
  gst;
  consignee;
  custGST;
  vehicleNo;
  dispatch;
  mobile;
  idMark;
  igst;
  invoice;
  custState;
  custStateCode;
  freight;

  totAmount;
  halfgst;
  halfgstAmt;
  igstAmt;
  grandTot;
  roundOff;

  grandTotWord;
  totgstWord;
  totigstWord;

  constructor(private service: DataServiceService) { }

  ngOnInit() {
    this.service.currentMessage.subscribe(data => this.data = data);
    console.log(this.data);
    this.invoiceNo = this.data[0].invoiceNo;
    this.todayDate = this.data[0].todayDate;
    this.goodsDesc = this.data[0].goodsDesc;
    this.hsnCode = this.data[0].hsnCode;
    this.quantity = this.data[0].quantity;
    this.rate = this.data[0].rate;
    this.gst = this.data[0].gst;
    this.consignee = this.data[0].consignee;
    this.custGST = this.data[0].custGST;
    this.vehicleNo = this.data[0].vehicleNo;
    this.dispatch = this.data[0].dispatch;
    this.mobile = this.data[0].mobile;
    this.idMark = this.data[0].idMark;
    this.igst = this.data[0].igst;
    this.invoice = this.data[0].invoice;
    this.custState = this.data[0].custState;
    this.custStateCode = this.data[0].custStateCode;
    this.freight = this.data[0].freight;

    this.totAmount = this.rate * this.quantity;

    if (this.gst != 0) {
      this.halfgst = this.gst / 2;
      this.halfgstAmt = this.totAmount * (this.halfgst / 100);

      var gstTotal = this.halfgstAmt * 2;
      var gstTotalPs = (gstTotal.toFixed(2)).split('.');
      var newgstPs = parseInt(gstTotalPs[1]);
      var newgstPsWord;

      var andF = false;
      if (newgstPs != 0) {
        newgstPsWord = " And " + numToWords(newgstPs) + " Paise";
      }
      else {
        newgstPsWord = "";
        andF = true;
      }

      this.totgstWord = numToWords(gstTotal, { ands: andF }) + newgstPsWord + " Only";
      var re = /\-/gi;
      this.totgstWord = this.totgstWord.replace(re, " ");

      this.grandTot = this.totAmount + (this.halfgstAmt * 2);
    }

    if (this.igst != 0) {
      this.igstAmt = this.totAmount * (this.igst / 100);

      var igstTotal = this.igstAmt;
      var igstTotalPs = (igstTotal.toFixed(2)).split('.');
      var newigstPs = parseInt(igstTotalPs[1]);
      var newigstPsWord;

      var andF = false;
      if (newigstPs != 0) {
        newigstPsWord = " And " + numToWords(newigstPs) + " Paise";
      }
      else {
        newigstPsWord = "";
        andF = true;
      }

      this.totigstWord = numToWords(igstTotal, { ands: andF }) + newigstPsWord + " Only";
      var re = /\-/gi;
      this.totigstWord = this.totigstWord.replace(re, " ");

      this.grandTot = this.totAmount + this.igstAmt;
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
