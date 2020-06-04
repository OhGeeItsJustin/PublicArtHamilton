/*
 * I justin fallis, 000398973 certify that this material is my original work.
 * No other person's work has been used without due acknowledgement. 
 * I have not made my work available to anyone else.
 *
 * Script used for beta project
 */
var map;
/**
 * When page is loaded get users location call showPosition function or showError function.
 * Create a new Gmap and create markers for all Public Art in Hamilton.
 */
$(document).ready(function ()
{
    //get current location
    gps = document.getElementById("location");
    navigator.geolocation.getCurrentPosition(showPosition, showError);
    //create map for application
    map = new GMaps({
        div: '#map',
        lat: 43.255703,
        lng: -79.871175,
        zoom: 11,
	gestureHandling: 'greedy'});
    //loop through the data and create markers on the map
    for (var i = 0; i < artList.length; i++) {
	//get data and create urls for the google map links for directions and location searches
	var city = artList[i].city;
        var cityNoSpace = city.replace(/\s/g, '');
        var postalCode = artList[i].postal_code;
        var postalCodeNoSpace = postalCode.replace(/\s/g, '');
        var search = "https://www.google.com/maps/search/?api=1&query=" + postalCodeNoSpace + "+" + cityNoSpace;
        var dir = "https://www.google.com/maps/dir/?api=1&origin=&destination=" + artList[i].latitude + "+" + artList[i].longitude;
	if(artList[i].category === "Public Art")
	{      
                       	map.addMarker({
            		lat: artList[i].latitude,
            		lng: artList[i].longitude,
            		title: artList[i].name,
            		infoWindow: {
                		content: "<div class='info'>" + "<img style='float:right;' src='Art.png' alt='Public Art Icon' height='50' width='50'>" + "<strong>Name: </strong>" + artList[i].name + "<br/>" + "<strong>Description: </strong>" + artList[i].description + "<br/>" + "<strong>Category: </strong>" + artList[i].category + "<br/>" + "<strong>Address: </strong>" + artList[i].street + "<br/>" + "<strong>City: </strong>" + artList[i].city + " " + "<strong>Province: </strong>" + artList[i].province + "<br/>" + '<a href=' + search + '>Location Area View |</a>' + " " + '<a href=' + dir + '>Directions To Location</a>' + "</div>"
            		}
        	});
	}
	if(artList[i].category === "Monument")
	{
        	map.addMarker({
            		lat: artList[i].latitude,
            		lng: artList[i].longitude,
            		title: artList[i].name,
            		infoWindow: {
                		content: "<div class='info'>" + "<img style='float:right;' src='Art.png' alt='Public Art Icon' height='50' width='50'>" + "<strong>Name: </strong>" + artList[i].name + "<br/>" + "<strong>Description: </strong>" + artList[i].description + "<br/>" + "<strong>Category: </strong>" + artList[i].category + "<br/>" + "<strong>Address: </strong>" + artList[i].street + "<br/>" + "<strong>City: </strong>" + artList[i].city + " " + "<strong>Province: </strong>" + artList[i].province + "<br/>" + '<a href=' + search + '>Location Area View |</a>' + " " + '<a href=' + dir + '>Directions To Location</a>' + "</div>"
			}
        	});
	}
	if(artList[i].category === "N/A")
	{
        	map.addMarker({
            		lat: artList[i].latitude,
            		lng: artList[i].longitude,
            		title: artList[i].name,
            		infoWindow: {
                		content: "<div class='info'>" + "<img style='float:right;' src='Art.png' alt='Public Art Icon' height='50' width='50'>" + "<strong>Name: </strong>" + artList[i].name + "<br/>" + "<strong>Description: </strong>" + artList[i].description + "<br/>" + "<strong>Category: </strong>" + artList[i].category + "<br/>" + "<strong>Address: </strong>" + artList[i].street + "<br/>" + "<strong>City: </strong>" + artList[i].city + " " + "<strong>Province: </strong>" + artList[i].province + "<br/>" + '<a href=' + search + '>Location Area View |</a>' + " " + '<a href=' + dir + '>Directions To Location</a>' + "</div>"
            		}
        	});
	}

    }
});
/**
 * When all Markers button is clicked create marks for all of the area
 */
function allMarkers() {
    //remove markers
    map.removeMarkers();
    //check if we have users lat and long and create a marker for user
    if (lat !== null && long !== null)
    {
        map.addMarker({
            lat: lat,
            lng: long,
            title: "Current Location",
            infoWindow: {
                content: '<p>Current Location</p>'
            }
        });
    }
    //loop through the data and create markers on the map
    for (var i = 0; i < artList.length; i++) {
	//get data and create urls for the google map links for directions and location searches
	var city = artList[i].city;
        var cityNoSpace = city.replace(/\s/g, '');
        var postalCode = artList[i].postal_code;
        var postalCodeNoSpace = postalCode.replace(/\s/g, '');
        var search = "https://www.google.com/maps/search/?api=1&query=" + postalCodeNoSpace + "+" + cityNoSpace;
        var dir = "https://www.google.com/maps/dir/?api=1&origin=&destination=" + artList[i].latitude + "+" + artList[i].longitude;
        if(artList[i].category === "Public Art")
	{
        	map.addMarker({
            		lat: artList[i].latitude,
            		lng: artList[i].longitude,
            		title: artList[i].name,
            		infoWindow: {
                		content: "<div class='info'>" + "<img style='float:right;' src='Art.png' alt='Public Art Icon' height='50' width='50'>" + "<strong>Name: </strong>" + artList[i].name + "<br/>" + "<strong>Description: </strong>" + artList[i].description + "<br/>" + "<strong>Category: </strong>" + artList[i].category + "<br/>" + "<strong>Address: </strong>" + artList[i].street + "<br/>" + "<strong>City: </strong>" + artList[i].city + " " + "<strong>Province: </strong>" + artList[i].province + "<br/>" + '<a href=' + search + '>Location Area View |</a>' + " " + '<a href=' + dir + '>Directions To Location</a>' + "</div>"
           		}
        	});
	}
	if(artList[i].category === "Monument")
	{
        	map.addMarker({
            		lat: artList[i].latitude,
            		lng: artList[i].longitude,
            		title: artList[i].name,
            		infoWindow: {
                		content: "<div class='info'>" + "<img style='float:right;' src='Art.png' alt='Public Art Icon' height='50' width='50'>" + "<strong>Name: </strong>" + artList[i].name + "<br/>" + "<strong>Description: </strong>" + artList[i].description + "<br/>" + "<strong>Category: </strong>" + artList[i].category + "<br/>" + "<strong>Address: </strong>" + artList[i].street + "<br/>" + "<strong>City: </strong>" + artList[i].city + " " + "<strong>Province: </strong>" + artList[i].province + "<br/>" + '<a href=' + search + '>Location Area View |</a>' + " " + '<a href=' + dir + '>Directions To Location</a>' + "</div>"
           		}
        	});
	}
	if(artList[i].category === "N/A")
	{
        	map.addMarker({
            		lat: artList[i].latitude,
            		lng: artList[i].longitude,
            		title: artList[i].name,
            		infoWindow: {
                		content: "<div class='info'>" + "<img style='float:right;' src='Art.png' alt='Public Art Icon' height='50' width='50'>" + "<strong>Name: </strong>" + artList[i].name + "<br/>" + "<strong>Description: </strong>" + artList[i].description + "<br/>" + "<strong>Category: </strong>" + artList[i].category + "<br/>" + "<strong>Address: </strong>" + artList[i].street + "<br/>" + "<strong>City: </strong>" + artList[i].city + " " + "<strong>Province: </strong>" + artList[i].province + "<br/>" + '<a href=' + search + '>Location Area View |</a>' + " " + '<a href=' + dir + '>Directions To Location</a>' + "</div>"
          		}
        	});
	}
    }
}
/**
 * When Public Art button is clicked create marks for all the Public Art category
 */
function publicArtMarkers() {
    //remove all the markers
    map.removeMarkers();
    //check if we have users lat and long and create a marker for user
    if (lat !== null && long !== null)
    {
        map.addMarker({
            lat: lat,
            lng: long,
            title: "Current Location",
            infoWindow: {
                content: '<p>Current Location</p>'
            }
        });
    }
    //loop through the data and create markers on the map
    for (var i = 0; i < artList.length; i++) {
	//get data and create urls for the google map links for directions and location searches
	var city = artList[i].city;
        var cityNoSpace = city.replace(/\s/g, '');
        var postalCode = artList[i].postal_code;
        var postalCodeNoSpace = postalCode.replace(/\s/g, '');
        var search = "https://www.google.com/maps/search/?api=1&query=" + postalCodeNoSpace + "+" + cityNoSpace;
        var dir = "https://www.google.com/maps/dir/?api=1&origin=&destination=" + artList[i].latitude + "+" + artList[i].longitude;
        if(artList[i].category === "Public Art")
	{
        	map.addMarker({
            		lat: artList[i].latitude,
            		lng: artList[i].longitude,
            		title: artList[i].name,
            		infoWindow: {
                		content: "<div class='info'>" + "<img style='float:right;' src='Art.png' alt='Public Art Icon' height='50' width='50'>" + "<strong>Name: </strong>" + artList[i].name + "<br/>" + "<strong>Description: </strong>" + artList[i].description + "<br/>" + "<strong>Category: </strong>" + artList[i].category + "<br/>" + "<strong>Address: </strong>" + artList[i].street + "<br/>" + "<strong>City: </strong>" + artList[i].city + " " + "<strong>Province: </strong>" + artList[i].province + "<br/>" + '<a href=' + search + '>Location Area View |</a>' + " " + '<a href=' + dir + '>Directions To Location</a>' + "</div>"
	       		}
        	});
	}
    }
}
/**
 * When Monument Button is clicked create marks for all the monuments category
 */
function monumentMarkers() {
    //remove all the markers
    map.removeMarkers();
    //check if we have users lat and long and create a marker for user
    if (lat !== null && long !== null)
    {
        map.addMarker({
            lat: lat,
            lng: long,
            title: "Current Location",
            infoWindow: {
                content: '<p>Current Location</p>'
            }
        });
    }
    //loop through the data and create markers on the map
    for (var i = 0; i < artList.length; i++) {
	//get data and create urls for the google map links for directions and location searches
	var city = artList[i].city;
        var cityNoSpace = city.replace(/\s/g, '');
        var postalCode = artList[i].postal_code;
        var postalCodeNoSpace = postalCode.replace(/\s/g, '');
        var search = "https://www.google.com/maps/search/?api=1&query=" + postalCodeNoSpace + "+" + cityNoSpace;
        var dir = "https://www.google.com/maps/dir/?api=1&origin=&destination=" + artList[i].latitude + "+" + artList[i].longitude;
        if(artList[i].category === "Monument")
	{
        	map.addMarker({
            		lat: artList[i].latitude,
            		lng: artList[i].longitude,
            		title: artList[i].name,
            		infoWindow: {
                		content: "<div class='info'>" + "<img style='float:right;' src='Art.png' alt='Public Art Icon' height='50' width='50'>" + "<strong>Name: </strong>" + artList[i].name + "<br/>" + "<strong>Description: </strong>" + artList[i].description + "<br/>" + "<strong>Category: </strong>" + artList[i].category + "<br/>" + "<strong>Address: </strong>" + artList[i].street + "<br/>" + "<strong>City: </strong>" + artList[i].city + " " + "<strong>Province: </strong>" + artList[i].province + "<br/>" + '<a href=' + search + '>Location Area View |</a>' + " " + '<a href=' + dir + '>Directions To Location</a>' + "</div>"
          		}
        	});
	}
    }
}
/**
 * Get lat and long from user and create a marker from the location and display the loction to user
 */
function showPosition(position) {
    lat = position.coords.latitude;
    long = position.coords.longitude;
    gps.innerHTML = "GPS puts you at: <br/>Latitude: " + position.coords.latitude + "<br/>Longitude: " + position.coords.longitude;
    map.addMarker({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        title: "Current Location",
        infoWindow: {
            content: '<p>Current Location</p>'
        }
    });
}
/**
 * Display error message when the program cant get users location
 */
function showError(error) {
    lat = null;
    long = null;
    switch (error.code) {
        case error.PERMISSION_DENIED:
            gps.innerHTML = "GPS Co-ordinates Unavailable! Default values used.<br/> PERMISSION_DENIED: The location acquisition process failed because the document does not have permission to use the Geolocation API."
            break;
        case error.POSITION_UNAVAILABLE:
            gps.innerHTML = "GPS Co-ordinates Unavailable! Default values used.<br/> PERMISSION_DENIED: The location acquisition process failed because the Location information is unavailable."
            break;
        case error.TIMEOUT:
            gps.innerHTML = "GPS Co-ordinates Unavailable! Default values used.<br/> PERMISSION_DENIED: The location acquisition process failed because the request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            gps.innerHTML = "GPS Co-ordinates Unavailable! Default values used.<br/> PERMISSION_DENIED: The location acquisition process failed because an unknown error occurred."
            break;
    }
}
/**
 * When showProgram function is ran display the aboutProgramText div and hide the aboutMeText div
 */
function showProgram() {
	$("#aboutProgramText").removeClass('hidden');
	$("#aboutMeText").addClass('hidden');	
}
/**
 * When showMe function is ran display the aboutMeText div and hide the aboutProgramText div
 */

function showMe() {
	$("#aboutMeText").removeClass('hidden');
	$("#aboutProgramText").addClass('hidden');	
}
