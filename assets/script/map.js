mapboxgl.accessToken = 'pk.eyJ1IjoiY2lyY2VjbyIsImEiOiJjazczN3docmowNjMwM2ZwZGFkand4YTUxIn0.0pNRz0t74QkAc6y5shG0BA';

var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/circeco/cki5wdzbb3npy19qipn4rmz3v', // style URL
    center: [9.2,45.5], // starting position [lng, lat]
    zoom: 10, // starting zoom
    pitch: 55
});

map.on('load', function () {
    map.loadImage(
        'assets/img/applivet_logo.jpg',
        function (error, image) {
            if (error) throw error;
            map.addImage('logo', image);
            map.addSource('point', {
                'type': 'geojson',
                'data': {
                    'type': 'FeatureCollection',
                    'features': [
                        {
                            'type': 'Feature',
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [9.2,45.5]
                            }
                        }
                    ]
                }
            });
            map.addLayer({
                'id': 'points',
                'type': 'symbol',
                'source': 'point',
                'layout': {
                    'icon-image': 'logo',
                    'icon-size': 0.5
                }
            });
        }
    );
});