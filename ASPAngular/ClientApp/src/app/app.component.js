var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
    constructor() {
        this.title = 'app';
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app',
        templateUrl: './app.component.html' //,
        //providers: [DataService]
    })
], AppComponent);
export { AppComponent };
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
//# sourceMappingURL=app.component.js.map