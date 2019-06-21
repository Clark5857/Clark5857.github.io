// Weather Site JavaScript Functions

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
    wc = (wc > temp)?temp:wc;
   
    // Display the windchill
    console.log(wc);
    // wc = 'Feels like '+wc+'°F';
    feelTemp.innerHTML = wc;
    }


    
    // Wind Dial Function
function windDial(direction){
    // Get the container
    let dial = document.getElementById("dial");
    console.log(direction);
    // Determine the dial class
    switch (direction){
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

//    if statments
let conditions = "clear";
let backImages = getcondition (conditions);


function getcondition (conditions) {
let result;

    if (conditions.includes("clear") || conditions.includes("sun")) {
         result = "clear";
    }
    else if (conditions.toLowerCase().includes ("clouds") || conditions.toLowerCase().includes("shade")) {
        result = "clouds";
    }
    else if (conditions.includes("fog") || conditions.includes("moisture")) {
        result = "fog";
    }
    else if (conditions.toLowerCase().includes("rain") || conditions.toLowerCase().includes("thunderstorms")) {
        result = "rain";
    }
    else if (conditions.includes("snow") || conditions.includes("fluff")) {
        result = "snow";
    }
return result;

}

//    Background Images
backgroundImage(backImages)

function backgroundImage(backImages){

    let curWeather = document.getElementById("curWeather");
    let sumimage = document.getElementById("sumimage");
    console.log(backImages);

    switch (backImages){

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

// Meters to Feet Function

let meters = 1514.246; 

meter2feet(meters);

function meter2feet(meters) {
    let elevation = document.getElementById('elevation');
   
    
    let mf = meters * 3.28 ; 

    mf = Math.floor(mf); 

    elevation.innerHTML = mf;
}
   

// Convert, Format time to 12 hour format
function format_time(hour) {
    if(hour > 23){ 
     hour -= 24; 
    } 
    let amPM = (hour > 11) ? "pm" : "am"; 
    if(hour > 12) { 
     hour -= 12; 
    } 
    if(hour == 0) { 
     hour = "12"; 
    } 
    return hour + amPM;
   }

   // Build the hourly temperature list
function buildHourlyData(nextHour,hourlyTemps) {
    // Data comes from a JavaScript object of hourly temp name - value pairs
    // Next hour should have a value between 0-23
    // The hourlyTemps variable holds an array of temperatures
    // Line 8 builds a list item showing the time for the next hour 
    // and then the first element (value in index 0) from the hourly temps array
     let hourlyListItems = '<li>' + format_time(nextHour) + ': ' + hourlyTemps[0] + '&deg;F</li>';
     // Build the remaining list items using a for loop
     for (let i = 1, x = hourlyTemps.length; i < x; i++) {
      hourlyListItems += '<li>' + format_time(nextHour+i) + ': ' + hourlyTemps[i] + '&deg;F</li>';
     }
     console.log('HourlyList is: ' +hourlyListItems);
     return hourlyListItems;
    }

    // Get the next hour based on the current time
let date = new Date(); 
let nextHour = date.getHours() + 1;
    
