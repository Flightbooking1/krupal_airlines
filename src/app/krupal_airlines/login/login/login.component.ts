import { Component, DoCheck, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent  implements DoCheck, OnChanges,OnInit  {

  showForgotPassword:boolean=false;
  isenteringotp:boolean=false;
  changepassword:boolean=false;

  constructor(private router:Router,private formBuild:FormBuilder,private service:UserService,private messageService: MessageService) { }

  resetForm=this.formBuild.group({
    password:new FormControl('',[Validators.required,Validators.minLength(6)]),
    confirmpassword:new FormControl('',[Validators.required,Validators.minLength(6)])
   })

  loginForm=this.formBuild.group({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(6)])
   })

   forgotpasswordForm=this.formBuild.group({
    email:new FormControl('',[Validators.required,Validators.email])
   })


   registerForm=this.formBuild.group({
    first_name:new FormControl('',[Validators.required]),
    last_name:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(6)]),
    phone_number:new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}')]),
    role:new FormControl('user'),
    status:new FormControl('active'),
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
   showError() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid Credentials' });
   }
   get confirmpassword(){
    return this.resetForm.get('confirmpassword')
   }

   getcurrentuser(){
    let token= localStorage.getItem("token")
    let user=localStorage.getItem("user")
    if(token!=null&& user!=null){
      // console.log(atob(tok));
      // console.log(JSON.parse(atob(user)));
    }
   }

   onLogin(){
    console.log(this.loginForm.value)
    this.service.loginUser(this.loginForm.value).subscribe(
      (data:any)=>{
        localStorage.setItem("token",btoa(data.jwt))
        localStorage.setItem("user",btoa(JSON.stringify(data.user)))
      },
      (error)=>{
        this.showError()
      }
    )
   }

   showSuccess(){
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Password Reset Successful' });
   }
   reset(){
    console.log(this.resetForm.value)
    let email= localStorage.getItem("email") || ""
    this.service.newpassword(this.resetForm.value,email).subscribe(
      (data:any)=>{
        console.log(data);
        this.proceedtoResetpage=false;
        this.isotpcorrectcolour=false;
        this.showForgotPassword=false;
        this.showSuccess()
        this.isenteringotp=false;
        this.changepassword=false;
        this.isotpcorrect=false;
      })
      this.proceedtoResetpage=false;
      this.isotpcorrectcolour=false;
      this.showForgotPassword=false;
      this.isenteringotp=false;
      this.changepassword=false;
      this.isotpcorrect=false;
      console.log(this.proceedtoResetpage)
  }

   onRegister(){
    console.log("register")
    console.log(this.registerForm.value);
    this.service.registerUser(this.registerForm.value).subscribe(
      data=>console.log(data)
    )
   }
   hidePassword: boolean = true;

  togglePasswordVisibility(): void {
  this.hidePassword = !this.hidePassword;
}

deleteUser(user_id:number){
  this.service.deleteuser(user_id)
  this.gettingAllUsers
}
gettingAllUsers(){
  this.service.gettingallUsers();
}
gettingAllEmails(){
  this.service.getallemails();
}

forgotpassword(){
  this.showForgotPassword=true;
  console.log(this.showForgotPassword)
}

onSubmitForgotPassword(){
  this.isenteringotp=true
 localStorage.setItem('email',btoa(this.forgotpasswordForm.value.email))
 if(this.forgotpasswordForm.value.email!=null){
  this.sendemailForgotPassword(this.forgotpasswordForm.value)
 }
 }

sendemailForgotPassword(email:any){
  this.startTimer(); // start timer for verify otp
  this.service.forgotpassword(email).subscribe(data=>{
  this.currentotp=(Number(data.Secretkey)-12345)+""
   })
}

currentotp:string=""
first:string=""
second:string=""
third:string=""
fourth:string=""
isotpcorrect:boolean=false
proceedtoResetpage:boolean=false

remainingTime: number = 60;
  timerId: any;

ngOnInit() {
}

resetFields() {
  this.first = '';
  this.second = '';
  this.third = '';
  this.fourth = '';
}
resendotp() {
  this.resetFields();
  this.remainingTime = 60;
  let email=localStorage.getItem('email')
  if(email!=null){
 this.sendemailForgotPassword({"email":atob(email)+""})
  }
  this.borderColor='blue'
}

startTimer() {
    this.timerId = setInterval(() => {
      this.remainingTime--;
      if (this.remainingTime === 0) {
        this.timerExpired();
        this.stopTimer();
      }
    }, 1000);
}

timerExpired() {
    console.log('Timer expired!');
}

stopTimer() {
    clearInterval(this.timerId);
}

ngOnChanges(changes: SimpleChanges) {
  // if (changes) {
  //   console.log('Input property "data" changed',changes);
  // }
}

ngDoCheck() {
  // Custom change detection logic
  // console.log('Change detection performed',this.first,this.second,this.third,this.fourth);

  if(this.first!=''&& this.second!=''&& this.third!=''&& this.fourth!=''
||this.first!=undefined&& this.second!=undefined&& this.third!=undefined&& this.fourth!=undefined
||this.first!=' '&& this.second!=' '&& this.third!=' '&& this.fourth!=' '){
  // console.log('Changing inside ',this.first,this.second,this.third,this.fourth);
if(this.currentotp!=""){
  // console.log('comparing',this.first,this.second,this.third,this.fourth,this.currentotp.charAt(0),this.currentotp.charAt(1),this.currentotp.charAt(2),this.currentotp.charAt(3));
 let otpentered=this.first+""+this.second+""+this.third+""+this.fourth
//  console.log(otpentered)
//  console.log(this.currentotp);
  if (otpentered==this.currentotp) {
    // console.log("OTP is correct");
   this. isotpcorrectcolour=true;
   this.getDynamicStyles();
    setTimeout(() => {
      this.proceedtoResetpage=true;

    }, 1000);

  } else {
    // console.log(otpentered)
    if(otpentered.trim().length<4){
      return
    }
    this.isotpcorrect = false;
    this.getDynamicStyles();
    // console.log("Incorrect OTP");
  }
}
}
}
isotpcorrectcolour:boolean=false
borderColor:string='blue';
getDynamicStyles() {
  if(this.isotpcorrectcolour) {
        this.borderColor='green'
  }else{
    this.borderColor='red'
  }
}
}
