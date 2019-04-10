"use strict";
/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 4


   Filename: ws_cloud.js

   Author:  
   Date:    
   
   Function List
   =============
   
   findUnique(arr)
      Returns the unique values in the "arr" array in the form of
      a two-dimension array
      array[i][j]
      where i is the ith unique entry, array[i][0] provides the
      value of the entry and array[i][1] provides the number 
      of repetitons of that value
   
   sortByCount(a,b)
      Compare function used in a two-dimensional arrays to be sorted
      in descending order of the values in the array's 2nd column
      
   sortByWord(a, b)
      Compare function used in a two-dimensional array to be sorted
      in ascending alphabetical order of the vlaues in the array's
      first column
   
   randomValue(minVal, maxVal)
      Returns a randome integer between minVal and maxVal

*/









function findUnique(arr) {
   var prevWord;
   var unique = [];
   var listNum = -1;
    arr.sort();
    for ( var i = 0; i < arr.length; i++ ) {
        if ( arr[i] !== prevWord ) {
           listNum++;           
           unique[listNum] = [];
           unique[listNum][0] = arr[i];
           unique[listNum][1] = 1;
        } else {
            unique[listNum][1] = unique[listNum][1]+1;
        }
        prevWord = arr[i];
    }

    return unique;  
}

function sortByCount(a,b) {
   return b[1]-a[1];
}

function sortByWord(a, b) {
   if (a[0] < b[0]) {
      return -1;
   } else if (a[0] > b[0]) {
      return 1;
   } else {
      return 0;
   }
}

function randomValue(minVal, maxVal) {
   var interval = maxVal - minVal;
   return Math.floor(minVal + interval*Math.random());
}

