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


function initMap(){
      hotLead.mapFromIdAndBounds('map1', getPoints());
      hotLead.mapFromIdAndBounds('map2', getPoints());
}

// Heatmap data: 500 Points
function getPoints() {
    return [
      new google.maps.LatLng(37.782551, -122.445368),
      new google.maps.LatLng(37.782745, -122.444586),
      new google.maps.LatLng(37.782842, -122.443688),
      new google.maps.LatLng(37.782919, -122.442815),
      new google.maps.LatLng(37.782992, -122.442112),
      new google.maps.LatLng(37.783100, -122.441461),
      new google.maps.LatLng(37.783206, -122.440829),
      new google.maps.LatLng(37.783273, -122.440324),
      new google.maps.LatLng(37.783316, -122.440023),
      new google.maps.LatLng(37.783357, -122.439794),
      new google.maps.LatLng(37.783371, -122.439687),
      new google.maps.LatLng(37.783368, -122.439666),
      new google.maps.LatLng(37.783383, -122.439594),
      new google.maps.LatLng(37.783508, -122.439525),
      new google.maps.LatLng(37.783842, -122.439591),
      new google.maps.LatLng(37.784147, -122.439668),
      new google.maps.LatLng(37.784206, -122.439686),
      new google.maps.LatLng(37.784386, -122.439790),
      new google.maps.LatLng(37.784701, -122.439902),
      new google.maps.LatLng(37.784965, -122.439938),
      new google.maps.LatLng(37.785010, -122.439947),
      new google.maps.LatLng(37.785360, -122.439952),
      new google.maps.LatLng(37.785715, -122.440030),
      new google.maps.LatLng(37.786117, -122.440119),
      new google.maps.LatLng(37.786564, -122.440209),
      new google.maps.LatLng(37.786905, -122.440270),
      new google.maps.LatLng(37.786956, -122.440279),
      new google.maps.LatLng(37.800224, -122.433520),
      new google.maps.LatLng(37.800155, -122.434101),
      new google.maps.LatLng(37.800160, -122.434430),
      new google.maps.LatLng(37.800378, -122.434527),
      new google.maps.LatLng(37.800738, -122.434598),
      new google.maps.LatLng(37.800938, -122.434650),
      new google.maps.LatLng(37.801024, -122.434889),
      new google.maps.LatLng(37.800955, -122.435392),
      new google.maps.LatLng(37.800886, -122.435959),
      new google.maps.LatLng(37.800811, -122.436275),
      new google.maps.LatLng(37.800788, -122.436299),
      new google.maps.LatLng(37.800719, -122.436302),
      new google.maps.LatLng(37.800702, -122.436298),
      new google.maps.LatLng(37.800661, -122.436273),
      new google.maps.LatLng(37.800395, -122.436172),
      new google.maps.LatLng(37.800228, -122.436116),
      new google.maps.LatLng(37.800169, -122.436130),
      new google.maps.LatLng(37.800066, -122.436167),
      new google.maps.LatLng(37.784345, -122.422922),
      new google.maps.LatLng(37.784389, -122.422926),
      new google.maps.LatLng(37.784437, -122.422924),
      new google.maps.LatLng(37.784746, -122.422818),
      new google.maps.LatLng(37.785436, -122.422959),
      new google.maps.LatLng(37.786120, -122.423112),
      new google.maps.LatLng(37.786433, -122.423029),
      new google.maps.LatLng(37.786631, -122.421213),
      new google.maps.LatLng(37.786660, -122.421033),
      new google.maps.LatLng(37.786801, -122.420141),
      new google.maps.LatLng(37.786823, -122.420034),
      new google.maps.LatLng(37.786831, -122.419916),
      new google.maps.LatLng(37.787034, -122.418208),
      new google.maps.LatLng(37.787056, -122.418034),
      new google.maps.LatLng(37.787169, -122.417145),
      new google.maps.LatLng(37.787217, -122.416715),
      new google.maps.LatLng(37.786144, -122.416403),
      new google.maps.LatLng(37.785292, -122.416257),
      new google.maps.LatLng(37.780666, -122.390374),
      new google.maps.LatLng(37.780501, -122.391281),
      new google.maps.LatLng(37.780148, -122.392052),
      new google.maps.LatLng(37.780173, -122.391148),
      new google.maps.LatLng(37.780693, -122.390592),
      new google.maps.LatLng(37.781261, -122.391142),
      new google.maps.LatLng(37.781808, -122.391730),
      new google.maps.LatLng(37.782340, -122.392341),
      new google.maps.LatLng(37.782812, -122.393022),
      new google.maps.LatLng(37.783300, -122.393672),
      new google.maps.LatLng(37.783809, -122.394275),
      new google.maps.LatLng(37.784246, -122.394979),
      new google.maps.LatLng(37.784791, -122.395958),
      new google.maps.LatLng(37.785675, -122.396746),
      new google.maps.LatLng(37.786262, -122.395780),
      new google.maps.LatLng(37.786776, -122.395093),
      new google.maps.LatLng(37.787282, -122.394426),
      new google.maps.LatLng(37.787783, -122.393767),
      new google.maps.LatLng(37.788343, -122.393184),
      new google.maps.LatLng(37.788895, -122.392506),
      new google.maps.LatLng(37.789371, -122.391701),
      new google.maps.LatLng(37.789722, -122.390952),
      new google.maps.LatLng(37.790315, -122.390305),
      new google.maps.LatLng(37.790738, -122.389616),
      new google.maps.LatLng(37.779448, -122.438702),
      new google.maps.LatLng(37.779023, -122.438585),
      new google.maps.LatLng(37.778542, -122.438492),
      new google.maps.LatLng(37.778100, -122.438411),
      new google.maps.LatLng(37.777986, -122.438376),
      new google.maps.LatLng(37.777680, -122.438313),
      new google.maps.LatLng(37.777316, -122.438273),
      new google.maps.LatLng(37.777135, -122.438254),
      new google.maps.LatLng(37.776987, -122.438303),
      new google.maps.LatLng(37.776946, -122.438404),
      new google.maps.LatLng(37.776944, -122.438467),
      new google.maps.LatLng(37.776892, -122.438459),
      new google.maps.LatLng(37.776842, -122.438442),
      new google.maps.LatLng(37.776822, -122.438391),
      new google.maps.LatLng(37.776814, -122.438412),
      new google.maps.LatLng(37.776787, -122.438628),
      new google.maps.LatLng(37.776729, -122.438650),
      new google.maps.LatLng(37.776759, -122.438677),
      new google.maps.LatLng(37.776772, -122.438498),
      new google.maps.LatLng(37.776787, -122.438389),
      new google.maps.LatLng(37.776848, -122.438283),
      new google.maps.LatLng(37.776870, -122.438239),
      new google.maps.LatLng(37.777015, -122.438198),
      new google.maps.LatLng(37.777333, -122.438256),
      new google.maps.LatLng(37.777595, -122.438308),
      new google.maps.LatLng(37.777797, -122.438344),
      new google.maps.LatLng(37.778160, -122.438442),
      new google.maps.LatLng(37.778414, -122.438508),
      new google.maps.LatLng(37.778445, -122.438516),
      new google.maps.LatLng(37.778503, -122.438529),
      new google.maps.LatLng(37.778607, -122.438549),
      new google.maps.LatLng(37.778670, -122.438644),
      new google.maps.LatLng(37.778847, -122.438706),
      new google.maps.LatLng(37.779240, -122.438744),
      new google.maps.LatLng(37.779738, -122.438822),
      new google.maps.LatLng(37.780201, -122.438882),
      new google.maps.LatLng(37.780400, -122.438905),
      new google.maps.LatLng(37.780501, -122.438921),
      new google.maps.LatLng(37.780892, -122.438986),
      new google.maps.LatLng(37.781446, -122.439087),
      new google.maps.LatLng(37.781985, -122.439199),
      new google.maps.LatLng(37.782239, -122.439249),
      new google.maps.LatLng(37.782286, -122.439266),
      new google.maps.LatLng(37.797847, -122.429388),
      new google.maps.LatLng(37.797874, -122.429180),
      new google.maps.LatLng(37.797885, -122.429069),
      new google.maps.LatLng(37.797887, -122.429050),
      new google.maps.LatLng(37.797933, -122.428954),
      new google.maps.LatLng(37.798242, -122.428990),
      new google.maps.LatLng(37.798617, -122.429075),
      new google.maps.LatLng(37.798719, -122.429092),
      new google.maps.LatLng(37.798944, -122.429145),
      new google.maps.LatLng(37.799320, -122.429251),
      new google.maps.LatLng(37.799590, -122.429309),
      new google.maps.LatLng(37.799677, -122.429324),
      new google.maps.LatLng(37.799966, -122.429360),
      new google.maps.LatLng(37.800288, -122.429430),
      new google.maps.LatLng(37.800443, -122.429461),
      new google.maps.LatLng(37.800465, -122.429474),
      new google.maps.LatLng(37.800644, -122.429540),
      new google.maps.LatLng(37.800948, -122.429620),
      new google.maps.LatLng(37.801242, -122.429685),
      new google.maps.LatLng(37.801375, -122.429702),
      new google.maps.LatLng(37.801400, -122.429703),
      new google.maps.LatLng(37.801453, -122.429707),
      new google.maps.LatLng(37.801473, -122.429709),
      new google.maps.LatLng(37.801532, -122.429707),
      new google.maps.LatLng(37.801852, -122.429729),
      new google.maps.LatLng(37.802173, -122.429789),
      new google.maps.LatLng(37.802459, -122.429847),
      new google.maps.LatLng(37.802554, -122.429825),
      new google.maps.LatLng(37.802647, -122.429549),
      new google.maps.LatLng(37.802693, -122.429179),
      new google.maps.LatLng(37.802729, -122.428751),
      new google.maps.LatLng(37.766104, -122.409291),
      new google.maps.LatLng(37.766103, -122.409268),
      new google.maps.LatLng(37.766138, -122.409229),
      new google.maps.LatLng(37.766183, -122.409231),
      new google.maps.LatLng(37.766153, -122.409276),
      new google.maps.LatLng(37.766005, -122.409365),
      new google.maps.LatLng(37.765897, -122.409570),
      new google.maps.LatLng(37.765767, -122.409739),
      new google.maps.LatLng(37.765693, -122.410389),
      new google.maps.LatLng(37.765615, -122.411201),
      new google.maps.LatLng(37.765533, -122.412121),
      new google.maps.LatLng(37.765467, -122.412939),
      new google.maps.LatLng(37.765444, -122.414821),
      new google.maps.LatLng(37.765444, -122.414964),
      new google.maps.LatLng(37.765318, -122.415424),
      new google.maps.LatLng(37.763961, -122.415296),
      new google.maps.LatLng(37.763115, -122.415196),
      new google.maps.LatLng(37.762967, -122.415183),
      new google.maps.LatLng(37.762278, -122.415127),
      new google.maps.LatLng(37.761675, -122.415055),
      new google.maps.LatLng(37.760932, -122.414988),
      new google.maps.LatLng(37.759337, -122.414862),
      new google.maps.LatLng(37.773187, -122.421922),
      new google.maps.LatLng(37.773043, -122.422118),
      new google.maps.LatLng(37.773007, -122.422165),
      new google.maps.LatLng(37.772979, -122.422219),
      new google.maps.LatLng(37.772865, -122.422394),
      new google.maps.LatLng(37.772779, -122.422503),
      new google.maps.LatLng(37.772676, -122.422701),
      new google.maps.LatLng(37.772606, -122.422806),
      new google.maps.LatLng(37.772566, -122.422840)]
}
