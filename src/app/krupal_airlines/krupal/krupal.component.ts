import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-krupal',
  templateUrl: './krupal.component.html',
  styleUrls: ['./krupal.component.css']
})
export class KrupalComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {

  }
  customOptions: OwlOptions = {
    autoWidth: true,
    autoplay:true,
    autoHeight:true,
    rewind:true,
		autoplaySpeed: 700,
    dotsSpeed: 500,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: [ '<i class="fa-solid fa-circle-chevron-left fa-beat"></i>', '<i class="fa-solid fa-circle-chevron-right fa-beat"></i>' ],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    // nav:true
  }

}
