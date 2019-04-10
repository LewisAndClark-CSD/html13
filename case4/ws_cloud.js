"use strict";
/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 4


   Filename: ws_cloud.js

   Author:  Annie Cho
   Date:    2018-03-01
   
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


window.addEventListener("load", function() {
   // Retrieve only the text of the speech
   var wordContent = document.getElementById("speech").textContent;
   
   // Change all characters to lowercase letters
   wordContent = wordContent.toLowerCase();
   
   // Remove all punctuation marks from the text
   wordContent = wordContent.replace(/[!\.,:;\?\'"\(\)\{\}\d\-]/g,"");
   
   // Remove all stop words from the text
   for (var i = 0; i < stopWords.length; i++) {
      var stopWordsRE = new RegExp("\\b"+stopWords[i]+"\\b", "g");
      wordContent = wordContent.replace(stopWordsRE, "");
   }
   
   // Remove all leading and trailing white space characters
   wordContent = wordContent.trim();
   
   // Split the text at every occurence of 1 or more white space characters
   var wordArray = wordContent.split(/\s+/g);
   
   // Generate a 2-D array of unique words and their counts
   var uniqueWords = findUnique(wordArray);
   
   // Sort the array in descending order of count
   uniqueWords.sort(sortByCount);   
   
   // Limit the array to the top 100 words
   uniqueWords.length = 100;
   
   // Determine the count of the least-used word in the array
   var minimumCount = uniqueWords[99][1];
   
   // Determine the count of the 3rd most-used word in the array
   var top3Count = uniqueWords[2][1];
   
   // Sort the array in alphabetical order
   uniqueWords.sort(sortByWord);
   

   // Loop through the unique words and format them according to their usage
   for (var i = 0; i < uniqueWords.length; i++) {
      var cloudWord = document.createElement("span");
      cloudWord.textContent = uniqueWords[i][0];
      var wordSize = Math.min(6, 0.45*uniqueWords[i][1]/minimumCount);
      cloudWord.style.fontSize = wordSize + "em";
      cloudWord.style.transform = "rotate(" + randomValue(-30, 30) + "deg)";
      if (uniqueWords[i][1] >= top3Count) {
         cloudWord.style.color = "rgb(251, 191, 191)";
         cloudWord.style.textShadow = "2px 2px 5px rgb(51, 51, 51)";
      }
      document.getElementById("cloud").appendChild(cloudWord);
   }
});



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

