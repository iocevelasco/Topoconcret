"use strict";

window.initMap = function() {
  var customMapType = new google.maps.StyledMapType([
    {
      stylers: [
        {'saturation': -100},
        {'lightness': 50},
        {'visibility': 'simplified'}
      ]
    },
    {
      elementType: 'labels',
      stylers: [{visibility: 'on'}]
    },
    {
      featureType: 'road',
      stylers: [{color: '#bbb'}]
    }
  ], {
    name: 'Dublin'
  });

  var image = new google.maps.MarkerImage(
  	'img/widgets/gmap-pin.png',
  	new google.maps.Size(48,54),
  	new google.maps.Point(0,0),
  	new google.maps.Point(24,54)
	);

  var customMapTypeId = 'custom_style';

  var panama = {lat: 8.9701809, lng:-79.5306512};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    scrollwheel: false,
    streetViewControl: false,
    mapTypeControl: false,
    center: panama, // Brooklyn.

  });

  var contentString = '<div class="box-maps" id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Panama</h1>'+
    '<div id="bodyContent">'+
    '<p>Av balboa, <br>  Sky Business Center </p>'+
    '</div>'+
    '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: 300
  });

  var marker = new google.maps.Marker({
    map: map,
    clickable: true,
    icon: image,
    title: 'Panama',
    position: panama
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });

  map.mapTypes.set(customMapTypeId, customMapType);
  map.setMapTypeId(customMapTypeId);
}

