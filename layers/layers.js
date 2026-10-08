var wms_layers = [];


        var lyr_GoogleMapsSatelite_0 = new ol.layer.Tile({
            'title': 'Google Maps Satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_area_estudio_1 = new ol.format.GeoJSON();
var features_area_estudio_1 = format_area_estudio_1.readFeatures(json_area_estudio_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_area_estudio_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_area_estudio_1.addFeatures(features_area_estudio_1);
var lyr_area_estudio_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_area_estudio_1, 
                style: style_area_estudio_1,
                popuplayertitle: 'area_estudio',
                interactive: true,
                title: '<img src="styles/legend/area_estudio_1.png" /> area_estudio'
            });
var format_zonas_Manuel_2 = new ol.format.GeoJSON();
var features_zonas_Manuel_2 = format_zonas_Manuel_2.readFeatures(json_zonas_Manuel_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zonas_Manuel_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zonas_Manuel_2.addFeatures(features_zonas_Manuel_2);
var lyr_zonas_Manuel_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zonas_Manuel_2, 
                style: style_zonas_Manuel_2,
                popuplayertitle: 'zonas_Manuel',
                interactive: true,
                title: '<img src="styles/legend/zonas_Manuel_2.png" /> zonas_Manuel'
            });

lyr_GoogleMapsSatelite_0.setVisible(true);lyr_area_estudio_1.setVisible(true);lyr_zonas_Manuel_2.setVisible(true);
var layersList = [lyr_GoogleMapsSatelite_0,lyr_area_estudio_1,lyr_zonas_Manuel_2];
lyr_area_estudio_1.set('fieldAliases', {'nombre': 'nombre', 'origen': 'origen', });
lyr_zonas_Manuel_2.set('fieldAliases', {'id': 'id', 'nombre': 'nombre', 'categoria': 'categoria', 'origen': 'origen', });
lyr_area_estudio_1.set('fieldImages', {'nombre': 'TextEdit', 'origen': 'TextEdit', });
lyr_zonas_Manuel_2.set('fieldImages', {'id': '', 'nombre': '', 'categoria': '', 'origen': '', });
lyr_area_estudio_1.set('fieldLabels', {'nombre': 'inline label - visible with data', 'origen': 'no label', });
lyr_zonas_Manuel_2.set('fieldLabels', {'id': 'no label', 'nombre': 'inline label - always visible', 'categoria': 'inline label - always visible', 'origen': 'inline label - always visible', });
lyr_zonas_Manuel_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});