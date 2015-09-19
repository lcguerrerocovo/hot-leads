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
    if (map.getZoom() < 55) 
    {
        map.setZoom(55);
    }
   }//mapFromIdAndBounds      
}

  String.prototype.grana =  function() {
    var formatted;
    formatted = parseFloat(this, 10).toFixed(2).toString()
      .replace(/\d(?=(\d{3})+\.)/g, '$&.').replace(/.{3}$/, ',00');
    return 'R$ ' + formatted;
  };

window.initMap = function(){  
    //$.get(window.location.href.split('/').slice(4).join('/'), function(data){
        $.get('/json/ff7f8432f712a6adffce53016b70c91c/54530492/c/b', function(data){
            $('.the-bar').css('width', (data.engagement*100)+'%');
            
            
            console.log(data)
            
              var dataRent = {
        labels: [],
        datasets: [
          {
            label: "Aluguel de imóvel",
            fillColor: "rgba(17,144,205,0.2)",
            strokeColor: "rgba(17,144,205,1)",
            pointColor: "rgba(255,255,255,1)",
            pointStrokeColor: "#1190cd",
            pointHighlightFill: "rgba(17,144,205,0.8)",
            pointHighlightStroke: "rgba(255,255,255,1)",
            data: []
          }
        ]
      };
            
            var rentGroup = _.chain(data.events)
            .where(function(item){return item.rentPrice != "0"}) 
            .groupBy('rentPrice').value();
            
            
            var rentPrice = [], rentCount = [];
            _.map(rentGroup, function(item, b, c, d){
                dataRent.labels.push(b.grana());
                dataRent.datasets[0].data.push(item.length);           
            });
            
            
            
               var dataSale = {
        labels: [],
        datasets: [
          {
            label: "Compra de imóvel",
            fillColor: "rgba(17,144,205,0.2)",
            strokeColor: "rgba(17,144,205,1)",
            pointColor: "rgba(255,255,255,1)",
            pointStrokeColor: "#1190cd",
            pointHighlightFill: "rgba(17,144,205,0.8)",
            pointHighlightStroke: "rgba(255,255,255,1)",
            data: []
          }
        ]
      };
            
            var saleGroup = _.chain(data.events)
            .where(function(item){return item.salePrice != "0"}) 
            .groupBy('salePrice').value();
            

            _.map(saleGroup, function(item, b, c, d){
                dataSale.labels.push(b.grana());
                dataSale.datasets[0].data.push(item.length);      
                console.log('sale', b, item.length, item)       
            });
            
            

            
      var ctx        = document.getElementById("rental-graph").getContext("2d");
      var myNewChart = new Chart(ctx).Line(dataRent);
        var ctx2        = document.getElementById("sale-graph").getContext("2d");
      var myNewChart2 = new Chart(ctx2).Line(dataSale);
      
      var qtdRaw = _.groupBy(data.events, 'propertyId');
      
      
      
      var rawEmpSale = _.chain(data.events)
            .where(function(item){return item.salePrice != "0"})
            .groupBy('propertyId');
            
      var rawEmpRent = _.chain(data.events)
            .where(function(item){return item.salePrice != "0"})
            .groupBy('rentPrice');
      
      
      
      var qtdSaleEmp = [];
       for (key in rawEmpSale) {
        if (rawEmpSale.hasOwnProperty(key))
            qtdSaleEmp.push(key);
       }
            
      var qtdEmpRent = [];
       for (key in rawEmpSale) {
        if (qtdEmpRent.hasOwnProperty(key))
            qtdEmpRent.push(key);
            
    }
      
      
      var total = qtdEmpRent.length+qtdSaleEmp.length;
      $('#qtdImoveis').text(total);
      
      $('#qtdRentImoveis').text(qtdEmpRent.length);
      $('#qtdSaleImoveis').text(qtdSaleEmp.length);
      
      $('#progress-qtdItem').css('width', ((qtdSaleEmp.length/total)*100)+ '%');
      
      
      
      
      var points = _.map(data.events, function(item){
        return  new google.maps.LatLng(item.lat, item.lon);        
      });
      
      console.log(points)
      
      hotLead.mapFromIdAndBounds('map1', points);
            
         
    } );      
    
}
