import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [ReactiveFormsModule],
  
  
  templateUrl: './employee.component.html',
  //template: "<p>Here will go an employee in line</p>",


  styleUrl: './employee.component.css'
  //styles:["p{max-width: 100%; color: red; margin: 0 auto; text-align: center;}"]
})
export class EmployeeComponent {

  nombre:string = "Juan";
  apellido:string = "Díaz";
  private edad: number = 8;
  empresa: string = "Decroly S.A."
  form: FormGroup;

  disableProperty = true;

  userRegister = false;

  constructor(private fb: FormBuilder)
  {
    this.form = this.fb.group
    (
      {
        nuevaEmpresa:[''],
        nuevoApellido:['']
      }
    )
  }

  getEdad()
  {
    return this.edad;
  }
  changeEmployeeForm()
  {
    const nuevaEmpresa = this.form.get('nuevaEmpresa')!.value;

    const nuevoApellido = this.form.get('nuevoApellido')!.value;

   if (nuevaEmpresa !== '') {
    this.empresa = nuevaEmpresa;
  } 
   if (nuevoApellido !== '') {
    this.apellido = nuevoApellido;
  }

  //limpiar los fields

  this.form.get('nuevaEmpresa')!.setValue('');
  this.form.get('nuevoApellido')!.setValue('');

  }

 
  getUserRegister()
  {
    this.userRegister = true;
  }



}
