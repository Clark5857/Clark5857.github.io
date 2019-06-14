// Weather Site JavaScript Functions

console.log('My javascript is being read.');

// Calculate the Windchill
const temp = 31;
const speed = 5;

buildWC(speed, temp);

function buildWC(speed, temp) {
    const feelTemp = document.getElementById('feelTemp');
   
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
    const dial = document.getElementById("dial");
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

    if (conditions == "clear") {
         result = "clear";
    }
    else if (conditions == "clouds"){
        result = "clouds";
    }
    else if (conditions == "fog") {
        result = "fog";
    }
    else if (conditions == "rain") {
        result = "rain";
    }
    else if (conditions == "snow"){
        result = "snow";
    }
return result;

}

//    Background Images
backgroundImage(backImages)

function backgroundImage(backImages){

    const curWeather = document.getElementById("curWeather");
    const sumimage = document.getElementById("sumimage");
    console.log(backImages);

    switch (backImages){

    case "clear":
        curWeather.setAttribute("class", "clear");
        sumimage.setAttribute("class", "clear1");
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

const meters = 1514.246; 

meter2feet(meters);

function meter2feet(meters) {
    const elevation = document.getElementById('elevation');
   
    
    let mf = meters * 3.28 ; 

    mf = Math.floor(mf); 

    elevation.innerHTML = mf;
}
   
    
