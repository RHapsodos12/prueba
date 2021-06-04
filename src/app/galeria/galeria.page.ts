import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.page.html',
  styleUrls: ['./galeria.page.scss'],
})
export class GaleriaPage implements OnInit {

  constructor() { }
  opcion = {
    slidesPerView: 1.5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    autoplay: true,
  }
  ngOnInit() {
  }

}
