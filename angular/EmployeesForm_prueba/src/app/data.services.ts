import { HttpClient } from "@angular/common/http";
import { Employee } from "./employee.component";
import { Observable } from "rxjs";

export class DataServices
{
    constructor(private httpClient:HttpClient){}

    guardarEmpleado(empleado: Employee[]): Observable<any> {
        return this.httpClient.post('https://mis-clientes-90acb-default-rtdb.europe-west1.firebasedatabase.app/datos.json', empleado);
      }
}