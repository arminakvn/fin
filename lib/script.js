// (function() {
 
const key = 'pk.eyJ1IjoiYXJtaW5hdm4iLCJhIjoiSTFteE9EOCJ9.iDzgmNaITa0-q-H_jw1lJw'

// Options for map
const options = {
  lat: 42.34155162,
  lng: -71.14632798,
  zoom: 14,
  logo: false,
  attribution: false,
  // pitch: 40,
  studio: true, // false to use non studio styles
  //style: 'mapbox.dark' //streets, outdoors, light, dark, satellite (for nonstudio)
  style: 'mapbox://styles/arminavn/cjg2o1xyt08gn2rqocqpyq4k6',
};

// Create an instance of Mapbox
const mappa = new Mappa('MapboxGL', key);
let myMap;
let myMap2;

let elt 

let elt2 
let canvas;

let canvas2;
let tstations;
let liqLices;
let liqsparsed = [];

function setup() {
  // let w = windowWidth;
  let h = '500'
  let w = '400'
  elt = document.getElementById('maps1');

  elt2 = document.getElementById('maps2');
  console.log(elt)
  canvas = createCanvas(w, h);
  // canvas2 = createCanvas(w, h);


  // Load the data
  tstations = loadTable('sutherland-t-station-info.csv', 'csv', 'header');
  liqLices = loadTable('liquor-licenses.csv', 'csv', 'header');


  // parseLiqLices(liqLices);
  print(liqLices)
  
  // Only redraw the meteorites when the map change and not every frame.
  
  colorMode(HSB,360,100,100,100)
  // fill(4,59,94,5);
  noFill();
  stroke(100);
  canvas.parent(elt)
  // canvas2.parent(elt2)
  // print("lat",liqsparsed)
  // Create a tile map and overlay the canvas on top.
  myMap = mappa.tileMap(options);

  // myMap2 = mappa.tileMap(options);
  myMap.overlay(canvas);
  // myMap2.overlay(canvas2);

  myMap.onChange(drawStations);

  mg = loadImage("MBTA-icon.png")
  // myMap.map./
}

// The draw loop is fully functional but we are not using it for now.
function draw() {}

function drawStations() {
  // Clear the canvas
  clear();
  for (let i = 0; i < liqLices.getRowCount(); i += 1) {
    // Get the lat/lng of each meteorite
   
    let locs = liqLices.getString(i, 'Location');
    let closing = liqLices.getString(i, 'CLOSING');

     let lat =Number( locs.split(",")[0].replace("(",""))
    let lon =Number( locs.split(",")[1].replace(")",""))
    const liqpos = myMap.latLngToPixel(lat, lon);

    // print(closing)
    if (closing == "10:00 PM" || closing == "11:00 PM" || closing == "11:00 p.m." || closing == "11:00","11:30 PM" || closing == "12:00 AM" || closing == "MIDNIGHT" || closing == "Midnight" || closing == "1:00 AM" || closing == "1:00 a.m." || closing == "2:00 AM" || closing == "2:00 a.m." || closing == "1:30 AM"){
     
      // print(closing)
      // liqsparsed.append(lat)
    }
   
    

      // console.log(size)
      ellipse(liqpos.x, liqpos.y, 20, 20);
    
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
      size = map(size, 0, 6, 1, 4300) + myMap.zoom();
      // console.log(size)
      stroke(92,40,100,100);
      ellipse(pos.x, pos.y, size, size);
      image(mg, pos.x - mg.width/16, pos.y - mg.height/16, mg.width/8, mg.height/8);
    // }
  }

  text("11:00 PM", 10,10)
}



// })(this);
