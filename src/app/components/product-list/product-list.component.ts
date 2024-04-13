import { Component } from '@angular/core';
import { allIcons } from 'ngx-bootstrap-icons';
import { Producto } from '../../models/product';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  showImage: boolean;
  products: Producto[];
  constructor() {
    this.showImage = true;
    this.products = [{
      imageSrc: "../../../assets/imgs/camara.jpg",
      name: "Cámara fotográfica",
      code: "tbx-0022",
      date: new Date("02-27-2019"),
      price: 12,
      rating: 5
    },{
      imageSrc: "../../../assets/imgs/taladro.jpeg",
      name: "Taladro de precusión",
      code: "gmg-0042",
      date: new Date("09-06-2016"),
      price: 36,
      rating: 4
    },{
      imageSrc: null,
      name: "Notebook Toshiba",
      code: "45sd54",
      date: new Date("06-24-2020"),
      price: 1000,
      rating: 5
    }]
  }

  imageToggle(){
    this.showImage = !this.showImage;
  }

  rating(index: number, rate: number){
    if(index<= rate) return "star-fill";
    return "star";
  }
}
