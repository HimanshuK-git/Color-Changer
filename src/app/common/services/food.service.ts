import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService implements OnInit {

  apiKey = "25afd5eaa4f846c1a19e7f8a627a5751";
  api = "772ea3f410aa4c8ea2fcf9f44746bbae";
  url = "https://api.spoonacular.com/recipes/informationBulk?ids=";

  constructor(private http: HttpClient) { }

  ngOnInit(){}

  getData(id){
    return this.http.get(`${this.url}${id}&apiKey=${this.apiKey}&includeNutrition=true`);
  }

}
