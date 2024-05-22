import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  
  
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

  RegisterText = "there is no one register";

  companyBinding = "Google";

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


  setCheckboxEvent( event: Event)
  {
    //alert(`El usuario hizo click en el checkbox`)
    //this.RegisterText = `THERE IS ONE USER REGISTER`;
    //if(<HTMLInputElement>event.target).value == " si"
    const target = event.target as HTMLInputElement;
    if (target.value == "si") {
      this.RegisterText = `THERE IS ONE USER REGISTER`;
    } else {
      this.  RegisterText = "there is no one register";
    }

  }




}
