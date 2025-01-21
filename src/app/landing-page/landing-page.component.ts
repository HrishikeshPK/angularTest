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
  productList:any=[]

  constructor(private api:ApiService){}
  ngOnInit(): void {
    this.getProduct()
  }

  getProduct(){
    this.api.getProductApi().subscribe((response:any)=>{
      console.log(response);
      this.productList=response.products
    })
  }

}

