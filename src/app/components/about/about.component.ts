import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() {
    let a: number;
    a = 10;
    let array: any;
    let str: string;
    str = 'string';
    array = ['string', 1, { 'key': 'value' }];

    const colorRed = 0;
    const colorGreen = 1;

    enum Color { Red = 0, Green = 1 }
    let backgroundColor = Color.Green;
  }

  ngOnInit() {
  }

}

class About {
  constructor(private _title: string, private _year: number) {
  }

  printAbout() {
    return this._title + ' | ' + this._year;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
  }

  get year() {
    return this._year;
  }

  set year(value) {
    this._year = value;
  }
}

const about = new About('PSL', 2017);
console.log(about.printAbout());
about.title = 'Persistent systems limited.';
console.log(about.title);


