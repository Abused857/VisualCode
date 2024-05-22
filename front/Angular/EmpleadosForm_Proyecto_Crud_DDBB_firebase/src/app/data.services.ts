import { HttpClient } from "@angular/common/http";
import { Employee } from "./employee.component";
import { Injectable } from "@angular/core";
import { LoginService } from "./login/login.service";

@Injectable()
export class DataServices
{
    constructor(private httpClient:HttpClient, private loginService:LoginService){}

    cargarEmpleados()
    {
        const token = this.loginService.getIdToken();
        return this.httpClient.get('https://mis-clientes-90acb-default-rtdb.europe-west1.firebasedatabase.app/datos.json?auth=' + token);
        
    }

    guardarEmpleado(empleado:Employee[])
    {
        this.httpClient.put('https://mis-clientes-90acb-default-rtdb.europe-west1.firebasedatabase.app/datos.json', empleado).subscribe
            (
                response=>console.log("Se han guardado los empleados: " + response),
                error=> console.log("Error "  + error )
            );
    }
    actualizarEmpleados(indice:number, empleado:Employee)
    {
        let url = ('https://mis-clientes-90acb-default-rtdb.europe-west1.firebasedatabase.app/datos/' + indice + '.json');

        this.httpClient.put(url, empleado).subscribe
        (
            response=>console.log("Se ha modificado correctamente el empleado: " + response),
            error=> console.log("Error "  + error )
        );
    }

    eliminarEmpleados(indice:number)
    {
        let url = ('https://mis-clientes-90acb-default-rtdb.europe-west1.firebasedatabase.app/datos/' + indice + '.json');

        this.httpClient.delete(url).subscribe
        (
            response=>console.log("Se ha eliminafo correctamente el empleado: " + response),
            error=> console.log("Error "  + error )
        );
    }
}


