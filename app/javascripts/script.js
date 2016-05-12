(function getMyLocation() {
  function currentLocation(locationInfo) {
    var location = "";
    location = "latitude: " + locationInfo.coords.latitude + " and longitude: " + locationInfo.coords.longitude;
    document.getElementById('location').innerHTML = location;
  }
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(currentLocation);
  }
})();
