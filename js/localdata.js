
// use strict directive goes here?

let pageNav = document.getElementById('page-nav');
let statusContainer = document.getElementById('status');
let contentContainer = document.getElementById('main-content');
let weatherURL = "../weather/weather.json";

fetchData(weatherURL);
function fetchData(weatherURL){
  let cityName = 'Greenville'; // The data we want from the weather.json file
  fetch(weatherURL)
  .then(function(response) {
  if(response.ok){
  return response.json();
  }
  throw new ERROR('Network response was not OK.');
  })
  .then(function(data){
    // Check the data object that was retrieved

    console.log(data);
    // data is the full JavaScript object, but we only want the greenville part
    // shorten the variable and focus only on the data we want to reduce typing
    
    let g = data[cityName];
    //the g in the funtion stands for greenville

    // ************ Get the content ******************************

    // Get the location data
    let locName = g.City;
    let locState = g.State;
    // Put them together
    let fullName = locName+', '+locState;
    // See if it worked
    console.log('fullName is: '+fullName);

    // Get the temperature data
let tempData = g.Temp;
console.log(tempData);

    // Get the wind data 
let windData = g.Wind;
console.log(windData);

    // Get the current conditions !Check your HTML
let curConditions = g.Summary;
console.log(curConditions);

    // Get the hourly data 
let hourData = g.Hourly;
console.log(hourData);

let windBox = g.Direction;

let elevationBox = g.Elevation;

let longBox = g.Longitude;

let latBox = g.Latitude;

let windirBox = g.Direction;

let gustBox = g.Gusts;

let highBox = g.High;

let lowBox = g.Low;

let percBox = g.Precip;

    // ************ Display the content ******************************
    // Set the title with the location name at the first
    // Gets the title element so it can be worked with
    
    let pageTitle = document.getElementById('page-title');
    
    // Create a text node containing the full name 
    let fullNameNode = document.createTextNode(fullName);

    // inserts the fullName value before any other content that might exist
    pageTitle.insertBefore(fullNameNode, pageTitle.childNodes[0]);
    // When this is done the title should look something like this:
    // Greenville, SC | The Weather Site

    // Set the Location information
    // Get the h1 to display the city location
    let contentHeading = document.getElementById('locName');
    contentHeading.innerHTML = fullName;
    // The h1 in main h1 should now say "Greenville, SC"

   // General information Boxes
    document.getElementById("long").innerHTML = longBox;

    document.getElementById("lat").innerHTML = latBox;

    document.getElementById("wind-dir").innerHTML = windirBox;

    document.getElementById("gusts").innerHTML = gustBox;

    document.getElementById("high").innerHTML = highBox;

    document.getElementById("low").innerHTML = lowBox;

    document.getElementById("perc").innerHTML = percBox;

    // Set the temperature information
    document.getElementById("curTemp").innerHTML = tempData;

    // Set the wind information
    document.getElementById("wind-speed").innerHTML = windData;
    buildWC(windData,tempData);

    // Set the current conditions information
    document.getElementById("sumTitle").innerHTML = curConditions;

    // Set the hourly temperature information
    document.getElementById("hourly-deg").innerHTML = buildHourlyData( nextHour,hourData);

   let conditions = getcondition(curConditions);
   backgroundImage(conditions);

   windDial(windBox);

   meter2feet(elevationBox);

    // Change the status of the containers
    contentContainer.setAttribute('class', ''); // removes the hide class
    statusContainer.setAttribute('class', 'hide'); // hides the status container
  })
  .catch(function(error){
  console.log('There was a fetch problem: ', error.message);
  statusContainer.innerHTML = 'Sorry, the data could not be processed.';
  })
}