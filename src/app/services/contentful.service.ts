import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { createClient } from 'contentful';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  private accessToken = "MKqyb0tL1jhJZAsMiMqTOaCj2_OhUn-LgkcKzhw3fjc"
  private apiUrl = 'https://cdn.contentful.com/spaces/86u18vaonixa/entries';
  private spaceID = "86u18vaonixa";
  private baseUrlAssets = `https://cdn.contentful.com/spaces/${this.spaceID}/assets`;
  private client = createClient({
    space: this.spaceID,
    accessToken: this.accessToken
  });


  constructor(private http: HttpClient) { }

  async getAsset(imgId: any): Promise<string | null> {
    try {
      const response = await this.client.getAssets();
  
      for (let asset of response.items) {
        if (asset.sys.id === imgId) {
          return asset.fields.file?.url || null;
        }
      }
  
      // Si l'actif n'est pas trouvé, vous pouvez renvoyer null ou une chaîne vide, selon vos besoins
      return null;
    } catch (error) {
      console.error('Erreur lors de la récupération des actifs :', error);
      return null;
    }
  }

  getAides() {
    const url = `${this.apiUrl}?access_token=${this.accessToken}&content_type=aides`;
    return this.http.get(url);
  }

  getFaq() {
    const url = `${this.apiUrl}?access_token=${this.accessToken}&content_type=faq`;
    return this.http.get(url);
  }

  getBlog() {
    const url = `${this.apiUrl}?access_token=${this.accessToken}&content_type=blog`;
    return this.http.get(url);
  }
  

}



