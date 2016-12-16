/**
 * Created by johny on 12/16/16.
 */
// var rad = function (x) {
//     return x * Math.PI / 180;
// };
//
// getDistance = function (p1, p2) {
//     var R = 6378137; // Earth’s mean radius in meter
//     var dLat = rad(p2.lat - p1.lat);
//     var dLong = rad(p2.lng - p1.lng);
//     var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//         Math.cos(rad(p1.lat)) * Math.cos(rad(p2.lat)) *
//         Math.sin(dLong / 2) * Math.sin(dLong / 2);
//     var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//     return R * c; // returns the distance in meter
// };

// var coverage_area = function (radius, location) {
//     return L.circle([location.lat, location.lng], {
//         color: 'red',
//         fillColor: '#f03',
//         fillOpacity: 0.2,
//         radius: radius
//     })
// };

// FOR TESTING PURPOSES - code below:

// function Coordinates(latitude, longitude) {
//     this.lat = latitude;
//     this.lng = longitude;
// }

// var superObject = {
//
//     site_lat: 48.143889,
//     site_lng: 17.109722,
//
//     cpe_lat: 48.380416,
//     cpe_lng: 17.587819,
//
//     site_status: 'UP',
//     cpe_status: 'UP'
// };
//
//
// var bratislava = new Coordinates(48.143889, 17.109722);
// var michalovce = new Coordinates(48.755677, 21.918386);
// var trnava = new Coordinates(48.380416, 17.587819);
//
// var banska_bystrica = new Coordinates(48.73946, 19.15349);
// var levice = new Coordinates(48.216454, 18.600445);
//
// var trencin = new Coordinates(48.891132, 18.042297);
// var piestany = new Coordinates(48.589233, 17.834047);

// makeConnection(superObject);
