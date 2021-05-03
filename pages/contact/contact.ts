import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  styleUrls: ['contact.css']
})
export class ContactPage {
  w: number;
  a: number;
  d: number;
  METS: number;

  C: number;
  BC: number;
  WL: number;

  constructor() {}

  calculateCBC() {
    this.C = this.METS * 3.5 * (this.w / 200);
    this.C = parseFloat(this.C.toFixed(2));

    this.BC = this.C * this.d;
    this.BC = parseFloat(this.BC.toFixed(2));

    this.WL = this.C / 7700;
    this.WL = parseFloat(this.WL.toFixed(2));
  }
}
