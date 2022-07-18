import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-new-user',
  templateUrl: './create-new-user.component.html',
  styleUrls: ['./create-new-user.component.css']
})
export class CreateNewUserComponent implements OnInit {

  userForm = this.fb.group(
    {
      name: ['',Validators.required],
      lastName:['',Validators.required],
      date: ['',Validators.required],
      cpf: ['',Validators.required],
      phone: ['',Validators.required],
      email: ['',Validators.required],
      password: ['',Validators.required],
      cep: ['',Validators.required],
      streetName: ['',Validators.required],
      numb: ['',Validators.required],
      complement: ['',Validators.required],
      district: ['',Validators.required],
      city: ['',Validators.required]
    }
  )

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    console.warn(this.userForm.value)
  }

}
