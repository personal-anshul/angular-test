(function getMyLocation() {
  function currentLocation(locationInfo) {
    var url = "http://maps.googleapis.com/maps/api/geocode/json?latlng=" + locationInfo.coords.latitude + "," + locationInfo.coords.longitude + "&sensor=true";
    //Ajax call
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState === 4 && xhttp.status === 200) {
        var results = (JSON.parse(xhttp.responseText)).results;
        for(var i = 0; ; i++) {
          if(results[i].address_components.length === 2) {
            document.getElementById('location').innerHTML = (results[i].formatted_address);
            break;
          }
        }
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  }
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(currentLocation);
  }
})();
