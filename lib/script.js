// (function() {
 
const key = 'pk.eyJ1IjoiYXJtaW5hdm4iLCJhIjoiSTFteE9EOCJ9.iDzgmNaITa0-q-H_jw1lJw'

// Options for map
const options = {
  lat: 42.31907867,
  lng: -71.21681018,
  zoom: 13,
  pitch: 40,
  studio: true, // false to use non studio styles
  //style: 'mapbox.dark' //streets, outdoors, light, dark, satellite (for nonstudio)
  style: 'mapbox://styles/arminavn/cjelxl9l9725l2rpcfuy34vdr',
};

// Create an instance of Mapbox
const mappa = new Mappa('MapboxGL', key);
let myMap;
let elt 
let canvas;
let tstations;
let liqLices;
let liqsparsed = [];

function setup() {
  // let w = windowWidth;
  let h = '400'
  let w = '400'
  elt = document.getElementById('barcon');
  console.log(elt)
  canvas = createCanvas(w, h);
  

  // Load the data
  tstations = loadTable('sutherland-t-station-info.csv', 'csv', 'header');
  liqLices = loadTable('liquor-licenses.csv', 'csv', 'header');


  // parseLiqLices(liqLices);
  print(liqLices)
  
  // Only redraw the meteorites when the map change and not every frame.
  
  colorMode(HSB,360,100,100,100)
  fill(4,59,94,40);
  stroke(100);
  canvas.parent(elt)
  // print("lat",liqsparsed)
  // Create a tile map and overlay the canvas on top.
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
  myMap.onChange(drawStations);
}

// The draw loop is fully functional but we are not using it for now.
function draw() {}

function drawStations() {
  // Clear the canvas
  clear();
  for (let i = 0; i < liqLices.getRowCount(); i += 1) {
    // Get the lat/lng of each meteorite
   
    let locs = liqLices.getString(i, 'Location');
    let lat =Number( locs.split(",")[0].replace("(",""))
    let lon =Number( locs.split(",")[1].replace(")",""))
    const liqpos = myMap.latLngToPixel(lat, lon);
      // console.log(size)
      ellipse(liqpos.x, liqpos.y, 10, 10);
    // print(lat)
    // liqsparsed.append(lat)
  }

  for (let i = 0; i < tstations.getRowCount(); i += 1) {
    // Get the lat/lng of each meteorite
   
    const latitude = Number(tstations.getString(i, 'latitude'));
    const longitude = Number(tstations.getString(i, 'longitude'));
    // const latitude = Number(meteorites.getString(i, 'reclat'));
    // const longitude = Number(meteorites.getString(i, 'reclong'));

    // Only draw them if the position is inside the current map bounds. We use a
    // Mapbox method to check if the lat and lng are contain inside the current
    // map. This way we draw just what we are going to see and not everything. See
    // getBounds() in https://www.mapbox.com/mapbox.js/api/v3.1.1/l-latlngbounds/
    // if (myMap.map.getBounds().contains([latitude, longitude])) {
      // Transform lat/lng to pixel position
      const pos = myMap.latLngToPixel(latitude, longitude);
      // Get the size of the meteorite and map it. 60000000 is the mass of the largest
      // meteorite (https://en.wikipedia.org/wiki/Hoba_meteorite)
      let size = tstations.getString(i, 'ov_vehphh');
      size = map(size, 0, 6, 1, 2000) + myMap.zoom();
      // console.log(size)
      ellipse(pos.x, pos.y, size, size*.9);
    // }
  }
}


function parseLiqLices(liq_lices){
  
}

// })(this);
