import { Component, Inject } from '@angular/core';
//import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-empl-data',
    templateUrl: './empl-data.component.html'
})
//export class EmplDataComponent {
//  public forecasts: WeatherForecast[] = [];

//  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
//    http.get<WeatherForecast[]>(baseUrl + 'weatherforecast').subscribe(result => {
//      this.forecasts = result;
//    }, error => console.error(error));
//  }
//}

//interface WeatherForecast {
//  date: string;
//  temperatureC: number;
//  temperatureF: number;
//  summary: string;
//}
export class Employee {
    constructor(
        public id?: number,
        public name?: string,
        public birthday?: string,
        public employmentDate?: string,
        public salary?: number,
        public departmentName?: string,
        public departmentId?: number
    ) { }
}