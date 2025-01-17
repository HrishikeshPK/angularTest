import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private route:Router){}
  loginpage(){
    this.route.navigateByUrl('/login')
  }
  registerpage(){
    this.route.navigateByUrl('/register')
  }
}
