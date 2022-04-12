import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.page.html',
  styleUrls: ['./item-detail.page.scss'],
})
export class ItemDetailPage implements OnInit {

  constructor() { }

  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: {
      disableOnInteraction: false
    },
    loop: true,
    speed: 1000
  };
  ngOnInit() {
  }

}
