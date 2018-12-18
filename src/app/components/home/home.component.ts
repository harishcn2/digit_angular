import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 phones = [];
 activeDevice={};
 index=[];
 config = {
  // Default parameters for smallest screen
  slidesPerView: 3,
  spaceBetween: 0,
  // Responsive breakpoints
  breakpointsInverse: true,
  breakpoints: {
    // when window width is >= 320px
    375: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 0
    }    ,
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 0
    }
  }
}
  constructor() {
 		this.phones = [
 		{ 'mobile':'iPhone7','id':1},
 		{ 'mobile':'Google Pixel','id':2},
 		{ 'mobile':'One Plus 5','id':3},
 		{ 'mobile':'Samsung Galaxy 8','id':4},
 		{ 'mobile':'HTC Desire X','id':5}
 		];	
 }
  ngOnInit() {
  	console.log(this.phones)
  	this.activeDevice = { 'mobile':'One Plus 5','id':3}
  var acc = document.getElementsByClassName("accordion");
	var i;

	for (i = 0; i < acc.length; i++) {
	  acc[i].addEventListener("click", function() {
	    this.classList.toggle("active");
	    var panel = this.nextElementSibling;
	    if (panel.style.maxHeight){
	      panel.style.maxHeight = null;
	    } else {
	      panel.style.maxHeight = panel.scrollHeight + "px";
	    } 
	  });
	}
  }

  updateMobile (phone) {
  	this.activeDevice = phone
  }

}
