import { Component, Input, OnInit } from '@angular/core';
import { allIcons } from 'ngx-bootstrap-icons';
import { Producto } from '../../models/product';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit{
  showImage: boolean;
  @Input() products !: Producto[];
  constructor() {
    this.showImage = true;
  }
  ngOnInit(): void {
    
  }

  imageToggle(){
    this.showImage = !this.showImage;
  }

  rating(index: number, rate: number){
    if(index<= rate) return "star-fill";
    return "star";
  }
}
