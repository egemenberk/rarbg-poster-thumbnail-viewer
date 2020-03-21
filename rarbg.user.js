

// ==UserScript==
// @name         Rarbg
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       egemenberk
// @match        https://addons.opera.com/en/extensions/details/tampermonkey-beta/
// @include      *rarb*
// @grant        none
// ==/UserScript==
var i = 0;
var movieList = null

if (document.URL.includes("rarbg")) {
   movieList = document.getElementsByClassName("lista2");
} else {
   movieList = document.querySelector(
         '#mcol > div > div.block-content > div > div > div > table > tbody')
      .getElementsByTagName("tr");
   [].slice.call(movieList, 3, movieList.length - 1);
}

for (i in movieList) {
   var movie = movieList[i].querySelector('td:nth-child(2) > a:nth-child(1)')
      .getAttribute("onmouseover");
   var moviePosterUrl = movie.split("\'")[2];
   var url = moviePosterUrl.substring(0, moviePosterUrl.length - 1);

   var height = "320";
   var width = "200";

   // For Games
   if (url.includes("static/over")) {
      var ar = url.split("static/over");
      url = ar[0] + "posters2/" + ar[1][1] + ar[1];
   }
   // For Movies
   else if (url.includes("mimages")) {
      url = url.replace("over", "poster");
   }
   movieList[i].querySelector('td:nth-child(1) > a > img').setAttribute("src",
      url);
   movieList[i].querySelector('td:nth-child(1) > a > img').setAttribute(
      "height", height);
   movieList[i].querySelector('td:nth-child(1) > a > img').setAttribute("width",
      width);
}
