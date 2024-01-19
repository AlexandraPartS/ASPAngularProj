import { Component, OnInit } from '@angular/core';
import { DataService } from './empl-data/data.service';
import { Employee } from './empl-data/empl-data.component';
      
@Component({
    selector: 'app',
    templateUrl: './app.component.html'//,
    //providers: [DataService]
})
export class AppComponent {
    title = 'app';
}

//export class AppComponent implements OnInit {

//    employee: Employee = new Employee(); 
//    employees: Employee[];                
//    tableMode: boolean = true;          

//    constructor(private dataService: DataService) { }

//    ngOnInit() {
//        this.loadProducts();
//    }

//    loadProducts() {
//        this.dataService.getEmployees()
//            .subscribe((data: Employee[]) => this.employees = data);
//    }

//    save() {
//        if (this.employee.id == null) {
//            this.dataService.createEmployee(this.employee)
//                .subscribe((data: Employee) => this.employees.push(data));
//        } else {
//            this.dataService.updateEmployee(this.employee)
//                .subscribe(data => this.loadProducts());
//        }
//        this.cancel();
//    }

//    editProduct(p: Employee) {
//        this.employee = p;
//    }

//    cancel() {
//        this.employee = new Employee();
//        this.tableMode = true;
//    }

//    delete(p: Employee) {
//        this.dataService.deleteEmployee(p.id)
//            .subscribe(data => this.loadProducts());
//    }

//    add() {
//        this.cancel();
//        this.tableMode = false;
//    }
//}