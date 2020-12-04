mapboxgl.accessToken = 'pk.eyJ1IjoiY2lyY2VjbyIsImEiOiJjazczN3docmowNjMwM2ZwZGFkand4YTUxIn0.0pNRz0t74QkAc6y5shG0BA';

var geojson = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'properties': {
                'iconSize': [80, 70]
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [9.24844, 45.47372]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'iconSize': [40, 30]
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [9.198792, 45.597637]
            }
        }
    ]
};


var bounds = [
    [6.5, 40.5], // Southwest coordinates
    [13.5, 50.5] // Northeast coordinates
];


var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/circeco/cki5wdzbb3npy19qipn4rmz3v', // style URL
    center: [9.2, 45.5], // starting position [lng, lat]
    zoom: 10, // starting zoom
    pitch: 55,
    maxBounds: bounds // Sets bounds as max
});


// add markers to map
geojson.features.forEach(function (marker) {

    var el = document.createElement('div');     // create a DOM element for the marker

    el.className = 'marker';    /* Assign the `marker` class to each marker for styling. */


    el.addEventListener('click', function () {

        /* On click the it zoom and center to one of the two points */
        map.flyTo({ center: marker.geometry.coordinates, zoom: 17, speed: 0.7, curve: 1 });

    });

    // add marker to map
    new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);
});

map.addControl(new mapboxgl.NavigationControl());
