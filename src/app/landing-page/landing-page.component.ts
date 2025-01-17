import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit {
  quotes:any=[]

  constructor(private api:ApiService){}
  ngOnInit(): void {
    this.getDetails()
  }

  getDetails(){
    this.api.getProductDetailsApi().subscribe((res:any)=>{
      console.log(res)
      this.quotes=res
    })
  }
}
