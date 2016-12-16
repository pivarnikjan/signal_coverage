var mymap = L.map('mapid').setView([48.802989, 19.835406], 8);

var access_token = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw';

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + access_token, {
    maxZoom: 20,
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>' + ' | ' + 'Jan Pivarnik',
    id: 'mapbox.streets'
}).addTo(mymap);

var addMarker = function (coordinates) {
    // lMarker = new L.marker([coordinates.lat, coordinates.lng]);
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

var convertCoordinates = function (startingPosition, endingPosition) {
    var pointA = new L.LatLng(startingPosition.lat, startingPosition.lng);
    var pointB = new L.LatLng(endingPosition.lat, endingPosition.lng);
    return [pointA, pointB];
};

var addLine = function (startingPosition, endingPosition, color) {
    polyLine = new L.Polyline(convertCoordinates(startingPosition, endingPosition), {
        color: color,
        weight: 3,
        smoothFactor: 1
    });
    return polyLine;
};

var convertStatusToBool = function (status) {
    return status === 'UP';
};

var signalColor = function (status1, status2) {
    if (convertStatusToBool(status1) && convertStatusToBool(status2)) {
        return 'blue'
    }
    else {
        return 'red'
    }
};

var makeConnection = function (record) {
    var startingPosition = {
        lat: record.site_lat,
        lng: record.site_lng
    };

    var endingPosition = {
        lat: record.cpe_lat,
        lng: record.cpe_lng
    };
    addMarker(startingPosition).addTo(mymap);
    addMarker(endingPosition).addTo(mymap);
    addLine(startingPosition, endingPosition, signalColor(record.site_status, record.cpe_status)).addTo(mymap);

};

var rad = function (x) {
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

var superObject = {

    site_lat: 48.143889,
    site_lng: 17.109722,

    cpe_lat: 48.380416,
    cpe_lng: 17.587819,

    site_status: 'UP',
    cpe_status: 'UP'
};


var bratislava = new Coordinates(48.143889, 17.109722);
var michalovce = new Coordinates(48.755677, 21.918386);
var trnava = new Coordinates(48.380416, 17.587819);

var banska_bystrica = new Coordinates(48.73946, 19.15349);
var levice = new Coordinates(48.216454, 18.600445);

var trencin = new Coordinates(48.891132, 18.042297);
var piestany = new Coordinates(48.589233, 17.834047);


makeConnection(superObject);