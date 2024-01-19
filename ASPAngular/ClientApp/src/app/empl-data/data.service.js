var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Inject } from '@angular/core';
//import { Employee } from './app/empl-data/empl-data.component';
let DataService = class DataService {
    constructor(http) {
        this.http = http;
        this.url = "/api/empl";
    }
    getEmployees() {
        return this.http.get(this.url);
    }
    getEmployee(id) {
        return this.http.get(this.url + '/' + id);
    }
    createEmployee(empl) {
        return this.http.post(this.url, empl);
    }
    updateEmployee(empl) {
        return this.http.put(this.url, empl);
    }
    deleteEmployee(id) {
        return this.http.delete(this.url + '/' + id);
    }
};
DataService = __decorate([
    Inject('BASE_URL')
], DataService);
export { DataService };
//# sourceMappingURL=data.service.js.map