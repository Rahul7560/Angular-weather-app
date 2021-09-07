import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchModel } from '../Model/SearchModel';
import { WeatherModel,Main } from '../Model/WeatherModel';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  Apiresponse: WeatherModel={};
  mains: Main = {} ;
  Search :SearchModel={};
  private Url = "https://api.openweathermap.org/data/2.5/weather?" ;  // URL to web api
  private key ="74ee4c17d9777b1febb466925d7dd0bf"

  public finalurl : string = "";


  SearchSubmit():void {
    if( this.Search.DropDownValue=='city'){
      if( this.Search.DropDownValue=='city'){
        this.finalurl   = this.Url+"q="+this.Search.SeachBoxValue+"&appid="+this.key;
      }
      else{
        this.finalurl   = this.Url+"id="+this.Search.SeachBoxValue+"&appid="+this.key;
      }

      console.log(this.Search.DropDownValue , this.Search.SeachBoxValue)
      this.http.get<any>(this.finalurl).subscribe(data => {
          this.Apiresponse = data;
          console.log(this.Apiresponse);

      },error =>
      {
        this.Apiresponse.main =this.mains ;
        alert("City entered doesnt exist")
      })
    }

  }
  constructor(  private http: HttpClient ) { }
}
