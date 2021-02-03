  
// Visualizing-Earthquake Data

// GeoJSON URL 
var earthquakesURL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_hour.geojson"

// Create a map object
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5
});

// Add a tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

// An array containing each city's name, location, and icon
var cities = [{
  location: [-155.891830444336,19.4553337097168],
  name: "Hawaii",
  icon: "ion-settings",
  iconColor: "black",
  shape:"penta"
},
{
  location: [-117.974,35.9803333,3],
  name: "California",
  icon: "ion-settings",
  iconColor: "black",
  shape:"penta"
},
{
  location: [-140.6165,60.0686,9.8],
  name: "Alaska",
  icon: "ion-settings",
  iconColor: "black",
  shape:"penta"
}
];

// Loop through the cities array and create one marker for each city, bind a popup containing its name and population add it to the map
for (var i = 0; i < cities.length; i++) {
  var city = cities[i];
  L.marker(city.location)
    .bindPopup("<h1>" + city.name + "</h1> <hr> <h3>Population " + city.population + "</h3>")
    .addTo(myMap);
}