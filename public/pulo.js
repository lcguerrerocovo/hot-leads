var hotLead = {
      mapFromIdAndBounds: function(id, arrBound){
      
      var map, heatmap;
             map = new google.maps.Map(document.getElementById(id), {
        zoom: 13,
        disableDefaultUI: true,
        mapTypeId: 'hybrid',
        styles: [
                {
                    featureType: "road",
                    stylers: [
                             { visibility: "off" }
                    ]
                }
        ]
    });

    heatmap = new google.maps.visualization.HeatmapLayer({
        data: arrBound,
        map: map
    });

    heatmap.set('radius', 40);


    var markers =arrBound;//some array;
    var bounds = new google.maps.LatLngBounds();
    for (i = 0; i < markers.length; i++) {
        bounds.extend(markers[i]);
    }

    map.setCenter(bounds.getCenter());
    map.fitBounds(bounds);
    map.setZoom(map.getZoom() - 1);

    // set a minimum zoom 
    // if you got only 1 marker or all markers are on the same address map will be zoomed too much.
    if (map.getZoom() > 15) 
    {
        map.setZoom(15);
    }
   }//mapFromIdAndBounds      
}

$(function(){  
    //$.get(window.location.href.split('/').slice(4).join('/'), function(data){
        $.get('http://localhost:3000/ffde38bf7c8129688a2e6ea4dc4f0ff1/45600484/c/b', function(data){
     
    }        
    
})