import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/Service/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor( public weather : WeatherService) { }

  ngOnInit(): void {
  }

}
