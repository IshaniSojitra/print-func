import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  sr =  12000;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    window.print();
  }

}
