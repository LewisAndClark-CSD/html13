"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 1

   Author: Aspen Kersey & Jason Cobb
   Date:   4/11/19
   
   Filename: mpl_links.js

*/
/*Event listener that runs annoynomas funtions*/
window.addEventListener("load", function() {   
   /* All select variables in the gov links*/
   var allSelect = document.querySelectorAll("form#govLinks select");
	/*updates changes*/
	for (var i = 0; i < allSelect.length; i++) {
      allSelect[i].onchange = function(e) {
         location.href = e.target.value;
      }
   }
});
