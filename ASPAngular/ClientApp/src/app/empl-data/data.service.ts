import { Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './empl-data.component';
//import { Employee } from './app/empl-data/empl-data.component';

@Inject('BASE_URL')
export class DataService {
    private url = "/api/empl";

    constructor(private http: HttpClient) { }

    getEmployees() {
        return this.http.get(this.url);
    }

    getEmployee(id: number) {
        return this.http.get(this.url + '/' + id);
    }

    createEmployee(empl: Employee) {
        return this.http.post(this.url, empl);
    }

    updateEmployee(empl: Employee) {

        return this.http.put(this.url, empl);
    }

    deleteEmployee(id: number) {
        return this.http.delete(this.url + '/' + id);
    }
}