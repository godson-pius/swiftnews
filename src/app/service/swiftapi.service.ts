import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwiftapiService {

  constructor(private _https:HttpClient) { }

  //= News Url
  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1c5e2237fcd342bf86e1cc62c9d23654";

  //= Tech news Url
  techApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=1c5e2237fcd342bf86e1cc62c9d23654"

  topHeading():Observable<any> {
      return this._https.get(this.newsApiUrl);
  }

  techNews():Observable<any> {
    return this._https.get(this.techApiUrl);
  }
}
