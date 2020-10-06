import {Component, OnInit } from '@angular/core';
import 'src/js/swiper.min.js';
declare var Swiper: any;
declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // Calendar Date Time Picker
    $('#datepicker-inline').datetimepicker({
      inline: true
    });

    // Swiper.js
    const swiper = new Swiper('.swiper-container', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    });
  }

}
