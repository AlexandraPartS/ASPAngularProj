import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Employee } from './employee';

@Component({
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

export class EmplDataComponent implements OnInit {

    employee: Employee = new Employee();
    employees: Employee[];
    tableMode: boolean = true;

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.loadProducts();
    }

    loadProducts() {
        this.dataService.getEmployees()
            .subscribe((data: Employee[]) => this.employees = data);
    }

    save() {
        if (this.employee.id == null) {
            this.dataService.createEmployee(this.employee)
                .subscribe((data: Employee) => this.employees.push(data));
        } else {
            this.dataService.updateEmployee(this.employee)
                .subscribe(data => this.loadProducts());
        }
        this.cancel();
    }

    editProduct(p: Employee) {
        this.employee = p;
    }

    cancel() {
        this.employee = new Employee();
        this.tableMode = true;
    }

    delete(p: Employee) {
        this.dataService.deleteEmployee(p.id)
            .subscribe(data => this.loadProducts());
    }

    add() {
        this.cancel();
        this.tableMode = false;
    }
}