let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -33.6220656, lng: -70.8702453 },
    zoom: 8
  }),
  map = new google.maps.Map(document.getElementById("map"),{
        center: { lat: -33.6220656, lng: -70.8702453 },
        zoom: 10,
        // mapTypeID: google.maps.MapTypeId.ROADMAP,
    }),
    marker = new google.maps.Marker(document.getElementById("map"),{
        position: coords,
        map,
        title: 'Repostelivery'
    });
}

initMap();