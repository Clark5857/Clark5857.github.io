// Weather Site JavaScript Functions

// Set global variable for custom header required by NWS API
var idHeader = {
  headers: {
    "User-Agent": "Student Learning Project - cla18002@byui.edu"
  }
};

var storage = window.localStorage;

console.log('My javascript is being read.');

// Calculate the Windchill
let temp = 31;
let speed = 5;

buildWC(speed, temp);

function buildWC(speed, temp) {
  let feelTemp = document.getElementById('feelTemp');

  // Compute the windchill
  let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
  console.log(wc);

  // Round the answer down to integer
  wc = Math.floor(wc);

  // If chill is greater than temp, return the temp
  wc = (wc > temp) ? temp : wc;

  // Display the windchill
  console.log(wc);
  // wc = 'Feels like '+wc+'°F';
  feelTemp.innerHTML = wc + '&deg;F';
}



// ************************ Wind Dial Function *********************** 
function windDial(direction) {
  // Get the container
  let dial = document.getElementById("dial");
  console.log(direction);
  // Determine the dial class
  switch (direction) {
    case "North":
    case "N":
      dial.setAttribute("class", "n"); //"n" is the CSS rule selector
      break;
    case "NE":
    case "NNE":
    case "ENE":
      dial.setAttribute("class", "ne");
      break;
    case "NW":
    case "NNW":
    case "WNW":
      dial.setAttribute("class", "nw");
      break;
    case "South":
    case "S":
      dial.setAttribute("class", "s");
      break;
    case "SE":
    case "SSE":
    case "ESE":
      dial.setAttribute("class", "se");
      break;
    case "SW":
    case "SSW":
    case "WSW":
      dial.setAttribute("class", "sw");
      break;
    case "East":
    case "E":
      dial.setAttribute("class", "e");
      break;
    case "West":
    case "W":
      dial.setAttribute("class", "w");
      break;
  }
}

function windDial2(numDirection) {

  let dial2 = document.getElementById("dial");
  console.log(numDirection);
  console.log(typeof(numDirection));

  if ((numDirection == 0 && numDirection < 30) || (numDirection > 330 && numDirection < 360)) {
    dial2.setAttribute("class", "n")
  } else if (numDirection >= 30 && numDirection < 90) {
    dial2.setAttribute("class", "ne")
  } else if (numDirection >= 90 && numDirection < 120) {
    dial2.setAttribute("class", "e")
  } else if (numDirection >= 120 && numDirection < 150) {
    dial2.setAttribute("class", "se")
  } else if (numDirection >= 150 && numDirection < 210) {
    dial2.setAttribute("class", "s")
  } else if (numDirection >= 210 && numDirection < 240) {
    dial2.setAttribute("class", "sw")
  } else if (numDirection >= 240 && numDirection < 300) {
    dial2.setAttribute("class", "w")
  } else if (numDirection >= 300 && numDirection < 330) {
    dial2.setAttribute("class", "nw")
  }
}


//    if statments
let conditions = "clear";
let backImages = getcondition(conditions);


function getcondition(conditions) {
  let result;

  if (conditions.includes("clear") || conditions.includes("sun")) {
    result = "clear";
  } else if (conditions.toLowerCase().includes("clouds") || conditions.toLowerCase().includes("shade")) {
    result = "clouds";
  } else if (conditions.includes("fog") || conditions.includes("moisture")) {
    result = "fog";
  } else if (conditions.toLowerCase().includes("rain") || conditions.toLowerCase().includes("thunderstorms")) {
    result = "rain";
  } else if (conditions.includes("snow") || conditions.includes("fluff")) {
    result = "snow";
  }
  return result;

}

//    Background Images
backgroundImage(backImages)

function backgroundImage(backImages) {

  let curWeather = document.getElementById("curWeather");
  let sumimage = document.getElementById("sumimage");
  console.log(backImages);

  switch (backImages) {

    case "clear":
      curWeather.setAttribute("class", "clear");
      sumimage.setAttribute("class", "clear");
      break;
    case "clouds":
      curWeather.setAttribute("class", "clouds");
      sumimage.setAttribute("class", "clouds");
      break;
    case "fog":
      curWeather.setAttribute("class", "fog");
      sumimage.setAttribute("class", "fog");
      break;
    case "rain":
      curWeather.setAttribute("class", "rain");
      sumimage.setAttribute("class", "rain");
      break;
    case "snow":
      curWeather.setAttribute("class", "snow");
      sumimage.setAttribute("class", "snow");
      break;
  }
}

//**************/ Meters to Feet Function ********************

// let meters = 1514.246;

let meters 

meter2feet(meters);

function meter2feet(meters) {
  let elevation = document.getElementById('elevation');


  let mf = meters * 3.28;

  mf = Math.floor(mf);

  elevation.innerHTML = mf;
}

//**************/ Celsius to Fahrenhit Function ******************** 

function convert2celcius(ferHight){
  let fahrenheit = Math.floor((ferHight * 9/5) +32);
  console.log("Returns value of" + fahrenheit);
  return fahrenheit;
}


// *************** Convert, Format time to 12 hour format ***************
function format_time(hour) {
  if (hour > 23) {
    hour -= 24;
  }
  let amPM = (hour > 11) ? "pm" : "am";
  if (hour > 12) {
    hour -= 12;
  }
  if (hour == 0) {
    hour = "12";
  }
  return hour + amPM;
}

// Build the hourly temperature list
function buildHourlyData(nextHour, hourlyTemps) {
  // Data comes from a JavaScript object of hourly temp name - value pairs
  // Next hour should have a value between 0-23
  // The hourlyTemps variable holds an array of temperatures
  // Line 8 builds a list item showing the time for the next hour 
  // and then the first element (value in index 0) from the hourly temps array
  let hourlyListItems = '<li>' + format_time(nextHour) + ': ' + hourlyTemps[0] + '&deg;F</li>';
  // Build the remaining list items using a for loop
  for (let i = 1, x = hourlyTemps.length; i < x; i++) {
    hourlyListItems += '<li>' + format_time(nextHour + i) + ': ' + hourlyTemps[i] + '&deg;F</li>';
  }
  console.log('HourlyList is: ' + hourlyListItems);
  return hourlyListItems;
}

// Get the next hour based on the current time
let date = new Date();
let nextHour = date.getHours() + 1;

// Gets location information from the NWS API
function getLocation(locale) {
  const URL = "https://api.weather.gov/points/" + locale;
  // NWS User-Agent header (built above) will be the second parameter 
  fetch(URL, idHeader)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
      throw new ERROR('Response not OK.');
    })
    .then(function (data) {
      // Let's see what we got back
      console.log('Json object from getLocation function:');
      console.log(data);
      // Store data to localstorage 
      storage.setItem("locName", data.properties.relativeLocation.properties.city);
      storage.setItem("locState", data.properties.relativeLocation.properties.state);

      // Next, get the weather station ID before requesting current conditions 
      // URL for station list is in the data object 
      let stationsURL = data.properties.observationStations;
      // Call the function to get the list of weather stations
      getStationId(stationsURL);
    })
    .catch(error => console.log('There was a getLocation error: ', error))
} // end getLocation function

// Gets weather station list and the nearest weather station ID from the NWS API
function getStationId(stationsURL) {
  // NWS User-Agent header (built above) will be the second parameter 
  fetch(stationsURL, idHeader)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
      throw new ERROR('Response not OK.');
    })
    .then(function (data) {
      // Let's see what we got back
      console.log('From getStationId function:');
      console.log(data);

      // Store station ID and elevation (in meters - will need to be converted to feet) 
      let stationId = data.features[0].properties.stationIdentifier;
      let stationElevation = data.features[0].properties.elevation.value;
      console.log('Station and Elevation are: ' + stationId, stationElevation);

      // Store data to localstorage 
      storage.setItem("stationId", stationId);
      storage.setItem("stationElevation", stationElevation);

      // Request the Current Weather for this station 
      getWeather(stationId);
    })
    .catch(error => console.log('There was a getStationId error: ', error))
} // end getStationId function

// Gets current weather information for a specific weather station from the NWS API
function getWeather(stationId) {
  // This is the URL for current observation data 
  const URL = 'https://api.weather.gov/stations/' + stationId + '/observations/latest';
  // NWS User-Agent header (built above) will be the second parameter 
  fetch(URL, idHeader)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
      throw new ERROR('Response not OK.');
    })
    .then(function (data) {
      // Let's see what we got back
      console.log('From getWeather function:');
      console.log(data);

      // Store weather information to localStorage 
      storage.setItem("windDirection", data.properties.windDirection.value);
      storage.setItem("windSpeed", data.properties.windSpeed.value);
      storage.setItem("windDirection", data.properties.windDirection.value);
      storage.setItem("temperature", data.properties.temperature.value);
      storage.setItem("textDescription", data.properties.textDescription);
      // Build the page for viewing 
      // viewPage()
      getForcast();
    })
    .catch(error => console.log('There was a getWeather error: ', error))
} // end getWeather function



// *********************** Gets forcast information *******************

function getForcast() {
  //url for forcast info.
  const URL = 'https://api.weather.gov/gridpoints/PIH/125,87/forecast';
  // NWS User-Agent header (built above) will be the second parameter 
  fetch(URL, idHeader)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
      throw new ERROR('Response not OK.');
    })
    .then(function (data) {
      // Let's see what we got back
      console.log('Json object from getForcast function:');
      console.log(data);

      // Store data to localstorage 
      storage.setItem("highTemp", data.properties.periods[0].temperature);
      storage.setItem("lowTemp", data.properties.periods[1].temperature);
      storage.setItem("windGust", data.properties.periods[0].windSpeed);

      // Build the page for viewing 
      buildPage();
      getHourly();
    })
    .catch(error => console.log('There was a getForcast error: ', error))
} // end getForcast function


// *********************** Gets Hourly forcast  *******************

function getHourly() {
  //url for forcast info.
  const URL = 'https://api.weather.gov/gridpoints/PIH/125,87/forecast/hourly';
  // NWS User-Agent header (built above) will be the second parameter 
  fetch(URL, idHeader)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
      throw new ERROR('Response not OK.');
    })
    .then(function (data) {
      // Let's see what we got back
      console.log('Json object from getForcast function:');
      console.log(data);

      // Store data to localstorage 
    let hourlyForcast = [];
    for (let i = 0; i < 13; i++){
      hourlyForcast[i] = data.properties.periods[i].temperature;
    }
storage.setItem('hourForcast', buildHourlyData(nextHour, hourlyForcast));


      // Build the page for viewing 
    })
    .catch(error => console.log('There was a getForcast error: ', error))
} // end getForcast function


function buildPage() {
  // Task 1 - Feed data to WC
  buildWC(storage.getItem("windSpeed"), convert2celcius(storage.getItem("temperature")));
  document.getElementById("curTemp").innerHTML = convert2celcius(storage.getItem("temperature"))+ '&deg;F';
  //WindDial call funtion
  windDial2(Number(storage.getItem("windDirection")));

  //Image call funtion
  let Imagecatch = getcondition(storage.getItem("textDescription"));
  backgroundImage(Imagecatch);

  //meters to feet call funtion
  meter2feet(storage.getItem("elevation"));

  //high/low temp call funtion
  document.getElementById("high").innerHTML = storage.getItem("highTemp")+ '&deg;F';
  document.getElementById("low").innerHTML = storage.getItem("lowTemp")+ '&deg;F';

  let pageTitle = document.getElementById('page-title');
  let fullName = storage.getItem("locName")+', '+storage.getItem("locState");
    
  // Create a text node containing the full name 
  let fullNameNode = document.createTextNode(fullName);
  pageTitle.insertBefore(fullNameNode, pageTitle.childNodes[0]);

  document.getElementById("locName").innerHTML = fullName;

  //hourly temp call funtion
  document.getElementById("hourly-deg").innerHTML = storage.getItem("hourForcast");

  // Task 2 - Populate location information
  document.getElementById("lat").innerHTML = Number(storage.getItem("lat")).toFixed(2);
  document.getElementById("long").innerHTML = Number(storage.getItem("long")).toFixed(2);


  // Task 3 - Populate weather information
  document.getElementById("wind-speed").innerHTML = storage.getItem("windSpeed")+ 'mph';
  document.getElementById("wind-dir").innerHTML = storage.getItem("windDirection")+ '&deg;';
  document.getElementById("sumTitle").innerHTML = storage.getItem("textDescription");
  document.getElementById("gusts").innerHTML = storage.getItem("windGust");

  // Task 4 - Hide status and show main
  let statusContainer = document.getElementById('status');
let contentContainer = document.getElementById('main-content');

  contentContainer.setAttribute('class', ''); // removes the hide class
  statusContainer.setAttribute('class', 'hide'); // hides the status container
}