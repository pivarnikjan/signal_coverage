// INITIALIZATION
var mymap = L.map('mapid').setView([48.802989, 19.835406], 8);
var access_token = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw';

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + access_token, {
    maxZoom: 20,
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>' + ' | ' + 'Jan Pivarnik',
    id: 'mapbox.streets'
}).addTo(mymap);

// TEMPLATE HACK
var Up = 'UP';
var Down = 'DOWN';

var addMarker = function (coordinates) {
    // lMarker = new L.marker([coordinates.lat, coordinates.lng]);
    return L.marker([coordinates.lat, coordinates.lng]);
};

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
