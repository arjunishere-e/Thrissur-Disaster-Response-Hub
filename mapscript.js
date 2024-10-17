// Initialize the map and set the view to Thrissur's coordinates (default location if geolocation fails)
var map = L.map('map').setView([10.5276, 76.2144], 13); // Thrissur coordinates

// Load and display OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Function to handle successful geolocation
function onLocationFound(e) {
  var radius = e.accuracy / 2;

  // Add a marker for the current location
  L.marker(e.latlng).addTo(map)
    .bindPopup("You are within " + radius + " meters from this point").openPopup();

  // Add a circle to show the accuracy of the location
  L.circle(e.latlng, radius).addTo(map);
}

// Function to handle geolocation errors
function onLocationError(e) {
  alert("Geolocation failed: " + e.message);
}

// Use the browser's geolocation API to get the current location
map.locate({ setView: true, maxZoom: 16 });

// Attach event listeners for when the location is found or if there is an error
map.on('locationfound', onLocationFound);
map.on('locationerror', onLocationError);
L.marker([lat, long]).addTo(map)
    .bindPopup('<b>Food Center Name</b><br>Available Supplies: Yes.')
    .openPopup();
