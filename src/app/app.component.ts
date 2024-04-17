import { Component } from '@angular/core';
import { allIcons } from 'ngx-bootstrap-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'El pepe SA';
  products = [{
    imageSrc: "../../../assets/imgs/camara.jpg",
    name: "Cámara fotográfica",
    code: "tbx-0022",
    date: new Date("02-27-2019"),
    price: 12,
    rating: 5
  },{
    imageSrc: "../../../assets/imgs/taladro.jpeg",
    name: "Taladro de circuncisión",
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
  }];
}
