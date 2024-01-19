import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms"

import { DataService } from './data.service';
import { Employee } from './employee';
;

@Component({
    selector: 'app-empl-data',
    standalone: true,
    templateUrl: './empl-data.component.html',
    providers: [DataService],
    imports: [FormsModule]
})

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