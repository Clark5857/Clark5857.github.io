'use strict';

// Call the function to get our location
getGeoLocation();

 // Set global variable for custom header required by NWS API
 var idHeader = {
    headers: {
      "User-Agent": "Student Learning Project - cla18002@byui.edu"
    }
  };

var storage = window.localStorage; 

// Gets longitude and latitude of current location
function getGeoLocation() {


const status = document.getElementById('status');
 status.innerHTML = 'Getting Location...';


if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
     const lat = position.coords.latitude;
     const long = position.coords.longitude;
  
     // Combine the values
     const locale = lat + "," + long;

     // Call getLocation function, send locale
  getLocation(locale);


     console.log(`Lat and Long are: ${locale}.`);
  storage.setItem("lat", lat);
  storage.setItem("long", long);
  
    })
   } else {
    status.innerHTML = "Your browser doesn't support Geolocation or it is not enabled!";
   } // end else
  
  } //end getGeoLocation

 