var mymap = L.map('mapid').setView([48.802989, 19.835406], 8);

var access_token = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw';

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + access_token, {
    maxZoom: 20,
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    id: 'mapbox.streets'
}).addTo(mymap);

var addMarker = function (coordinates) {
    return L.marker([coordinates.lat, coordinates.lng]);
};

var coverage_area = function (radius, location) {
    return L.circle([location.lat, location.lng], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.2,
        radius: radius
    })
};

function Coordinates(latitude, longitude) {
    this.lat = latitude;
    this.lng = longitude;
}

var bratislava = new Coordinates(48.143889, 17.109722);
var michalovce = new Coordinates(48.755677, 21.918386);
var trnava = new Coordinates(48.380416, 17.587819);

var banska_bystrica = new Coordinates(48.73946, 19.15349);
var levice = new Coordinates(48.216454, 18.600445);

var trencin = new Coordinates(48.891132, 18.042297);
var piestany = new Coordinates(48.589233, 17.834047);


var pointA = new L.LatLng(bratislava.lat, bratislava.lng);
var pointB = new L.LatLng(michalovce.lat, michalovce.lng);
var pointList = [pointA, pointB];

var addLine = new L.Polyline(pointList, {
    color: 'blue',
    weight: 3,
    smoothFactor: 1
});
addLine.addTo(mymap);


var rad = function(x) {
    return x * Math.PI / 180;
};

getDistance = function (p1, p2) {
    var R = 6378137; // Earth’s mean radius in meter
    var dLat = rad(p2.lat - p1.lat);
    var dLong = rad(p2.lng - p1.lng);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(rad(p1.lat)) * Math.cos(rad(p2.lat)) *
        Math.sin(dLong / 2) * Math.sin(dLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // returns the distance in meter
};

addMarker(michalovce).addTo(mymap);
addMarker(bratislava).addTo(mymap);
addMarker(trnava).addTo(mymap);
// coverage_area(getDistance(bratislava,trnava),bratislava).addTo(mymap);

addMarker(banska_bystrica).addTo(mymap);
addMarker(levice).addTo(mymap);
// coverage_area(getDistance(banska_bystrica,levice),banska_bystrica).addTo(mymap);

addMarker(trencin).addTo(mymap);
addMarker(piestany).addTo(mymap);
// coverage_area(getDistance(trencin,piestany),trencin).addTo(mymap);
