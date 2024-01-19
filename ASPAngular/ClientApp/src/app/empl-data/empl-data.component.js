var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Employee } from './employee';
let EmplDataComponent = 
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
class EmplDataComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.employee = new Employee();
        this.tableMode = true;
    }
    ngOnInit() {
        this.loadProducts();
    }
    loadProducts() {
        this.dataService.getEmployees()
            .subscribe((data) => this.employees = data);
    }
    save() {
        if (this.employee.id == null) {
            this.dataService.createEmployee(this.employee)
                .subscribe((data) => this.employees.push(data));
        }
        else {
            this.dataService.updateEmployee(this.employee)
                .subscribe(data => this.loadProducts());
        }
        this.cancel();
    }
    editProduct(p) {
        this.employee = p;
    }
    cancel() {
        this.employee = new Employee();
        this.tableMode = true;
    }
    delete(p) {
        this.dataService.deleteEmployee(p.id)
            .subscribe(data => this.loadProducts());
    }
    add() {
        this.cancel();
        this.tableMode = false;
    }
};
EmplDataComponent = __decorate([
    Component({
        imports: [
            Employee
        ],
        selector: 'app-empl-data',
        templateUrl: './empl-data.component.html',
        providers: [DataService]
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
], EmplDataComponent);
export { EmplDataComponent };
//# sourceMappingURL=empl-data.component.js.map