import { Component, OnInit } from '@angular/core';

//import { ModalDeleteComponent } from './modal-delete.component';
import { DataService } from './data.service';
import { Employee } from './employee';
;

@Component({
    selector: 'app-empl-data',
    //imports: [ModalDeleteComponent],
    templateUrl: './empl-data.component.html',
    providers: [DataService]//,
})

export class EmplDataComponent implements OnInit {

    employee: Employee = new Employee();
    employees: Employee[];
    tableMode: boolean = true;

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.loadEmployees();
    }

    loadEmployees() {
        this.dataService.getEmployees()
            .subscribe((data: Employee[]) => this.employees = data);
    }

    save() {
        if (this.employee.id == null) {
            this.dataService.createEmployee(this.employee)
                .subscribe((data: Employee) => this.employees.push(data));
        } else {
            this.dataService.updateEmployee(this.employee)
                .subscribe(data => this.loadEmployees());
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
            .subscribe(data => this.loadEmployees());
    }

    add() {
        this.cancel();
        this.tableMode = false;
    }
}