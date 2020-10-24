import { Component, Injectable, OnInit } from '@angular/core';
import { FoodService } from 'src/app/common/services/food.service';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  constructor(private data: FoodService) { }

  ngOnInit(): void {}

}
