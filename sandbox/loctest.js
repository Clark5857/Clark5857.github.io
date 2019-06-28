//these functions will work together to get weather informaton for the current location and populate a web page with the data

'use strict';


var storage = window.localstorage; 

// Gets longitude and latitude of current location
function getGeoLocation() {

} // end getGeoLocation

const status = document.getElementById('status');
 status.innerHTML = 'Getting Location...';

 // Call the function to get our location
getGeoLocation();

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
     const lat = position.coords.latitude;
     const long = position.coords.longitude;
  
     // Combine the values
     const locale = lat + "," + long;
     console.log(`Lat and Long are: ${locale}.`);
  
  
    })
   } else {
    status.innerHTML = "Your browser doesn't support Geolocation or it is not enabled!";
   } // end else
  } //end getGeoLocation

  console.log(`Lat and Long are: ${locale}.`);

  // Call getLocation function, send locale
  getLocation(locale);