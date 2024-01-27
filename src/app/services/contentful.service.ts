import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  private accessToken = "MKqyb0tL1jhJZAsMiMqTOaCj2_OhUn-LgkcKzhw3fjc"
  private apiUrl = 'https://cdn.contentful.com/spaces/86u18vaonixa/entries';

  constructor(private http: HttpClient) { }

  getAides() {
    const url = `${this.apiUrl}?access_token=${this.accessToken}&content_type=aides`;
    return this.http.get(url);
  }

  getFaq() {
    const url = `${this.apiUrl}?access_token=${this.accessToken}&content_type=faq`;
    return this.http.get(url);
  }
}



