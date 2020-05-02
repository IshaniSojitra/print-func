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
  lrNo;

  totAmount;
  halfgst;
  halfgstAmt;
  grandTot;
  roundOff;

  grandTotWord;
  totgstWord;

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
    this.lrNo = this.data[0].lrNo;

    this.totAmount = this.rate * this.quantity;
    this.halfgst = this.gst / 2;
    this.halfgstAmt = this.totAmount * (this.halfgst / 100);
    this.grandTot = this.totAmount + (this.halfgstAmt * 2);
    this.roundOff = Math.round(this.grandTot) - this.grandTot;
    this.grandTot = Math.round(this.grandTot);

    this.grandTotWord = (numToWords(this.grandTot, { ands: true })).toUpperCase() + " ONLY";
    var re = /\-/gi;
    this.grandTotWord = this.grandTotWord.replace(re, " ");

    var gstTotal = this.halfgstAmt * 2;
    var gstTotalPs = (gstTotal.toFixed(2)).split('.');
    var newgstPs = parseInt(gstTotalPs[1]);
    var newgstPsWord;
  
    var andF = false;
    if(newgstPs != 0){
      newgstPsWord = " And " + numToWords(newgstPs) + " Paise";
    }
    else{
      newgstPsWord = "";
      andF = true;
    }

    this.totgstWord =  numToWords(gstTotal, { ands: andF }) + newgstPsWord + " Only";
    var re = /\-/gi;
    this.totgstWord = this.totgstWord.replace(re, " ");
  }

  onSubmit() {
    window.print();
  }

}
