import { Component, OnInit } from '@angular/core';
import { SwiftapiService } from "../service/swiftapi.service";

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {

  constructor(private _services:SwiftapiService) { }

  techNewsDisplay:any = [];
  techErrorDisplay:any;

  ngOnInit(): void {

    this._services.techNews().subscribe((result) => {
      this.techNewsDisplay = result.articles;
    }, (err) => {
      this.techErrorDisplay = "Could not process request!";
    })

  }

}
