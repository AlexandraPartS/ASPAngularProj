var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
let Employee = 
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
class Employee {
    constructor(id, name, birthday, employmentDate, salary, departmentName, departmentId) {
        this.id = id;
        this.name = name;
        this.birthday = birthday;
        this.employmentDate = employmentDate;
        this.salary = salary;
        this.departmentName = departmentName;
        this.departmentId = departmentId;
    }
};
Employee = __decorate([
    Component({
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
], Employee);
export { Employee };
//# sourceMappingURL=empl-data.component.js.map