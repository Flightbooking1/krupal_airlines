import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private formBuild:FormBuilder) { }


  loginForm=this.formBuild.group({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(7)])
   })

   registerForm=this.formBuild.group({
    first_name:new FormControl('',[Validators.required]),
    last_name:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(7)]),
    phone_number:new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}')])
   })

   get first_name(){
    return this.registerForm.get('first_name')
   }

   get last_name(){
    return this.registerForm.get('last_name')
   }
   get email(){
    return this.registerForm.get('email')
   }

   get password(){
    return this.registerForm.get('password')
   }

   get phone_number(){
    return this.registerForm.get('phone_number')
   }

   onLogin(){
    console.log(this.loginForm.value)
   }
   onRegister(){
    console.log("register")
    console.log(this.registerForm.value);
   }
   hidePassword: boolean = true;

  togglePasswordVisibility(): void {
  this.hidePassword = !this.hidePassword;
}
  ngOnInit(): void {
  }

}
