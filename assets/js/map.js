var map = L.map('map', {
    center: [-11.70327926436077, -77.11483768992251],
    zoom: 11,
    minZoom: 0,
    maxZoom: 100,
    maxBounds: [[-12.0826,-77.4575], [-11.4346,-76.7653]]
});

var basemapOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <ahref="http://osm.org/copyright"> OpenStreetMap</a> contributor'
});
basemapOSM.addTo(map);

var bgoogleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{ maxZoom: 20,
subdomains:['mt0','mt1','mt2','mt3'] });
bgoogleSat.addTo(map);

var googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{ maxZoom: 20,
subdomains:['mt0','mt1','mt2','mt3'] });
googleStreets.addTo(map);

var distrito = L.tileLayer.wms("http://localhost:8080/geoserver/web_ancon/wms?", {
	   layers: "web_ancon:distrito_ancon", //gisweb:centros educativos moquegua
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
distrito.addTo(map);

var curvas = L.tileLayer.wms("http://localhost:8080/geoserver/web_ancon/wms?", {
	   layers: "web_ancon:curvas_nivel_1", //gisweb:centros educativos moquegua
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
curvas.addTo(map);

var hospitales = L.tileLayer.wms("http://localhost:8080/geoserver/web_ancon/wms?", {
	   layers: "web_ancon:hospitales_ancon", //gisweb:centros educativos moquegua
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
hospitales.addTo(map);

var farmacias = L.tileLayer.wms("http://localhost:8080/geoserver/web_ancon/wms?", {
	   layers: "web_ancon:farmacias_ancon", //gisweb:centros educativos moquegua
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
farmacias.addTo(map);

var cp_an = L.tileLayer.wms("http://localhost:8080/geoserver/web_ancon/wms?", {
	   layers: "web_ancon:cp_ancon", //gisweb:centros educativos moquegua
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
cp_an.addTo(map);

var grifos = L.tileLayer.wms("http://localhost:8080/geoserver/web_ancon/wms?", {
	   layers: "web_ancon:grifos_ancon", //gisweb:centros educativos moquegua
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
grifos.addTo(map);

var colegios = L.tileLayer.wms("http://localhost:8080/geoserver/web_ancon/wms?", {
	   layers: "web_ancon:colegios_ancon", //gisweb:centros educativos moquegua
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
colegios.addTo(map);

var baseMaps = {
    "OpenStreetMap": basemapOSM,
    "Google Satelite": bgoogleSat,
    "Google Streets": googleStreets
};

var overlayMaps = {
    "Limite Distrital": distrito,
    "Hospitales": hospitales,
    "Farmacias": farmacias,
    "Grifos": grifos,
    "Colegios": colegios,
    "Centros Poblados": cp_an,
	"Curvas de Nivel": curvas
};

L.control.layers(baseMaps, overlayMaps,{
    position: 'topright', // 'topleft', 'bottomleft', 'bottomright'
    collapsed: false // true
}).addTo(map);
