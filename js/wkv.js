var endpoint="https://en.wikipedia.org/w/api.php?";
var test="action=query&list=random&rnlimit=1&rnnamespace=0&format=json";

$(document).ready(function(){
  $("#random").on("click", function(){
    $.ajax({
      url: endpoint+test,
      data: {
        format: 'json'
      },
      type: 'GET',
      dataType: 'jsonp',
      jsonpCallback: "display",
<<<<<<< HEAD
=======
      /*
      success: function(data){
        var dataQuery = data.query.pages["15580374"].title;
        alert(dataQuery);

      },
      */
>>>>>>> 24a3cd4e16aee0445972d58c94c0ff7c422d3593
    });
  });
});

function display(data){
  alert(JSON.stringify(data));
<<<<<<< HEAD
  var tempVar = data.query.random[0].title;
  alert(tempVar);
  $("#wkPageTitle").html(tempVar);
  // alert(data.query.pages["15580374"].title);
=======
  alert(data.query.pages["15580374"].title)
>>>>>>> 24a3cd4e16aee0445972d58c94c0ff7c422d3593
};



/* 

NOTE: Commented out all the previous JS but left it here as a short term reference.
I'll get rid of it all once my actual js for this project is more mature.

// Let's be neat and tidy and declare all our Global variables up front
latLon=0;
latLonSepVal=0;
ipLat=0;
ipLon=0;
weather="";
tempDegC=0;
tempDegF=0;
tempTypeC=true;
cityName = "";
countryCode = "";
openWeatherMapAPIKey = "da1f88e7d56eae60905f0e8168805241";

// NOTE:
// I've written this JS code in a slightly untidy fashion, as I'm not properly
// using callbacks from the getJSON functions - instead I'm calling a function
// from within the getjSON function to avoid asynchronicity issues.
// ideally I should call the getJSON with a callback function, and then get on with other 
// things, and only do something with the data once it's returned.
//
// With this as it stands, it's calling the ipinfo function, then calling the weather data
// function, so I have chained functions which could be slow if one or the other takes a while to 
// respond. Not ideal. I'll re-write this once I am more confident in the use of callbacks.

// TODO:
// Add more weather summaries to the switch statement once I have a clearer picture of what options
// are returned from the openweather API - it's not clear what the simple list is that is returned.
// right now, if the conditions don't meet what is catered for, then the weather icons don't currently
// display.


$(document).ready(function(){

  // this function uses ipinfo.io to get Lat and Long data from our IP address
  // lat and long is passed to the weather query later
  $.getJSON("http://ipinfo.io/", function(data){
    latLon=(data.loc); // this appears in the format "lat, long" in a single string
    latLonSepVal = latLon.indexOf(","); // so find the point where the comma occurs in the string
    ipLat = latLon.substring(0,latLonSepVal); // then split out the latitude first...
    ipLon = latLon.substring(latLonSepVal+1, latLon.length); // longitude is everything left after the comma.
    weatherQuery(ipLat, ipLon); // then call the weather query function to get the weather
    // n.b. this is called as a function from within the getJSON function because getJSON is asynchronous, so we need to 
    // wait until we actually have a lat and long in the ipLat and ipLon variables.
  });

  // this function handles the switch between degrees C and F.
  // uses a simple boolean variable to check if the current display 
  // is degrees C, if not, changes the HTML to F and changes the variable
  // to suit. 
  // it's wrapped in the document ready function as it simply didn't work outside it
  // 
  $("#temp").on("click", function(){
    if (tempTypeC == true) {
      $("#temp").html(tempDegF+' <sup>o</sup>F');
      tempTypeC = false;
    }
    else {
      $("#temp").html(tempDegC+' <sup>o</sup>C');
      tempTypeC = true;
    };
  });
});

// we use the openweathermap API to retrieve city name, temperature in Celsius, and current weather conditions
// all this is based on the latitude and longitude data retrieved from the ipinfo.io API call earlier.
function weatherQuery(lat,lon){
  queryAddr = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&units=metric&APPID="+openWeatherMapAPIKey;
    $.getJSON(queryAddr, function(data){
      weather = data.weather[0].main;
      tempDegC = Math.round(data.main.temp); // round to the nearest integer
      tempDegF = (tempDegC * 9 / 5) + 32; // calc the Fahrenheit data from deg C rather than doing another API call...
      cityName = data.name;
      countryCode = data.sys.country;
      displayWeatherData();
      // again, as this getJSON is asynchronous, we have to wait until it's ready before using the data
    });
};

function displayWeatherData(){
  $("#location").html(cityName+", "+countryCode);
  $("#weather").html(weather);
  $("#temp").html(tempDegC+' <sup>o</sup>C');
  switch (weather) {
    case "Mist":
    case "Clouds":
    case "Fog":
    $("#weatherIcon").html('<div class="icon cloudy"><div class="cloud"></div><div class="cloud"></div></div>');
    break;
    case "Rain":
    $("#weatherIcon").html('<div class="icon rainy"><div class="cloud"></div><div class="rain"></div></div>');
    break;
  };
};


*/