(function getMyLocation() {
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(currentLocation);
  }
  function currentLocation(currentLocation) {
    var location = "";
    location = "latitude: " + currentLocation.coords.latitude + " and longitude: " + currentLocation.coords.longitude;
    document.getElementById('location').innerHTML = location;
  }
})();
