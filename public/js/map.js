 
	mapboxgl.accessToken = 'pk.eyJ1Ijoibm9raGEiLCJhIjoiY2txdjBuaHBqMDl2dzJ3bzZvYmwxbHdwZiJ9.U7VxxCKw4CjCacQ85SXtQw';

    let map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [91.2868, 23.8315], // starting position [lng, lat]
        zoom: 13 // starting zoom
    });
    

    // fetch stores
    async function getStores(){
        const res = await fetch('/api/v1/stores');
        const resData = await res.json();
        const stores = resData.data.map(store =>{
            return {
                'type': 'Feature',
                'geometry': {
                    'type': 'Point',
                    'coordinates': [store.location.coordinates[0], store.location.coordinates[1]],
                },
                properties:{
                    storeId: store.storeId,
                    icon: 'shop',
                }
            }
        })
        console.log(stores)
        //load map
        loadMap(stores);
    }


    // Load map with stores
   let loadMap = (stores) =>{

    map.on('load', function() {
        
        map.addSource('point', {
            'type': 'geojson',
            'data': {
                'type': 'FeatureCollection',
                'features': stores,
                // 'features': [{
                //     'type': 'Feature',
                //     'geometry': {
                //         'type': 'Point',
                //         'coordinates': [91.2868, 23.8315],
                //     },
                //     properties:{
                //         storeId: '09234',
                //         icon: 'shop',
                //     }
                // }]
            }
        });
        
        // Add a layer to use the image to represent the data.
        map.addLayer({
            'id': 'points',
            'type': 'symbol',
            'source': 'point', // reference the data source
            'layout': {
                'icon-image': '{icon}-15', // reference the image
                'icon-size': 1.5, 
                'text-field': '{storeId}',
                'text-offset': [0, 0.9],
                'text-anchor': 'top',
                // 'text-font': ''
            }
        });
         
    });
    
   }

   getStores();














