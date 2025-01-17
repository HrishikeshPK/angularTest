import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email:string=""
  pswd:string=""

  constructor(private route:Router){}

  login(){
    if(this.email&&this.pswd){
      const userEmail = localStorage.getItem('email')
      const userpswd = localStorage.getItem('pswd')
      console.log(userEmail)
      console.log(userpswd)
      if(this.email==userEmail && this.pswd==userpswd){
        alert("Login success")
      }
      else{
        alert("invalid credentials")
      }
      
      this.route.navigateByUrl('/dashboard')
    }
    else{
      alert("Please fill the form")
    }
  }

}
