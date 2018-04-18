// (function() {
 
const key = 'pk.eyJ1IjoiYXJtaW5hdm4iLCJhIjoiSTFteE9EOCJ9.iDzgmNaITa0-q-H_jw1lJw'
var angles = [ 3.6, 14.4, 309.6, 25.5, 7.2, 3.6];

// Options for map
const options = {
  lat: 42.34155162,
  lng: -71.14632798,
  zoom: 14,
  width: 400,
  height: 400,
  scale: 1,
  // language: 'en',
  // logo: false,
  // attribution: false,
  // format: 'PNG',
  // pitch: 40,
  // studio: true, // false to use non studio styles
  //style: 'mapbox.dark' //streets, outdoors, light, dark, satellite (for nonstudio)
  // style: 'mapbox://styles/arminavn/cjg2o1xyt08gn2rqocqpyq4k6'
  pitch: 0,
  style: 'dark-v9'
};

const options_boylston = {
  lat: 42.35304171,
  lng: -71.06454191,
  zoom: 14,
  width: 400,
  height: 400,
  scale: 1,
  // language: 'en',
  // logo: false,
  // attribution: false,
  // format: 'PNG',
  // pitch: 40,
  // studio: true, // false to use non studio styles
  //style: 'mapbox.dark' //streets, outdoors, light, dark, satellite (for nonstudio)
  // style: 'mapbox://styles/arminavn/cjg2o1xyt08gn2rqocqpyq4k6'
  pitch: 0,
  style: 'dark-v9'
};

// Create an instance of Mapbox
const mappa = new Mappa('Mapbox', key);
// let myMap;

let elt 
let img;

let elt2 
let elt3 

let canvas;

let canvas2;
let tstations;
let liqLices;
let liqsparsed = [];
// canvas2.parent(elt2)
// print("lat",liqsparsed)
// Create a tile map and overlay the canvas on top.
const myMap = mappa.staticMap(options);
const boylstonmap = mappa.staticMap(options_boylston);
console.log(boylstonmap)

function preload(){
   // Load the data
   img = loadImage(myMap.imgUrl);
   imgBoylston = loadImage(boylstonmap.imgUrl);
   tstations = loadTable('sutherland-t-station-info.csv', 'csv', 'header');
   boylstonstation = loadTable('boylston-t-station-info.csv', 'csv', 'header');
   liqLices = loadTable('liquor-licenses.csv', 'csv', 'header');
 
  
  mg = loadImage("MBTA-icon.png");
}

function setup() {
  // let w = windowWidth;
  let h = '1300'
  let w = '850'
  elt = document.getElementById('maps1');

  // elt2 = document.getElementById('maps2');
  // console.log(elt)
  canvas = createCanvas(w, h).parent(elt);

  // elt3 = document.getElementById('maps3');


  rightBuffer = createGraphics(w/2, h/3)
  rightBuffer11 = createGraphics(w/2, h/3)
  rightBuffer12 = createGraphics(w/2, h/3)
  // rightBuffer.parent(elt3);

  // canvas2.parent(elt)
  leftBuffer = createGraphics(w/2, h/3)
  leftBuffer11 = createGraphics(w/2, h/3)
  leftBuffer12 = createGraphics(w/2, h/3)
  // leftBuffer.parent(elt2);

  // canvas2 = createCanvas(w, h);


 

  // parseLiqLices(liqLices);
  print(liqLices)
  
  // Only redraw the meteorites when the map change and not every frame.
  colorMode(HSB,360,100,100,100)
  // fill(4,59,94,5);
  noFill();
  stroke(100);
  
  
  leftBuffer.colorMode(HSB,360,100,100,100)
  // fill(4,59,94,5);
  leftBuffer.noFill();
  leftBuffer.stroke(100);
  

  leftBuffer.image(img, 0, 0);

  leftBuffer11.colorMode(HSB,360,100,100,100)
  // fill(4,59,94,5);
  leftBuffer11.noFill();
  leftBuffer11.stroke(100);
  

  leftBuffer11.image(img, 0, 0);


  leftBuffer12.colorMode(HSB,360,100,100,100)
  // fill(4,59,94,5);
  leftBuffer12.noFill();
  leftBuffer12.stroke(100);
  

  leftBuffer12.image(img, 0, 0);

  rightBuffer.colorMode(HSB,360,100,100,100)
  // fill(4,59,94,5);
  rightBuffer.noFill();
  rightBuffer.stroke(100);
  

  rightBuffer.image(imgBoylston, 0, 0);

  rightBuffer11.colorMode(HSB,360,100,100,100)
  // fill(4,59,94,5);
  rightBuffer11.noFill();
  rightBuffer11.stroke(100);
  

  rightBuffer11.image(imgBoylston, 0, 0);

  rightBuffer12.colorMode(HSB,360,100,100,100)
  // fill(4,59,94,5);
  rightBuffer12.noFill();
  rightBuffer12.stroke(100);
  

  rightBuffer12.image(imgBoylston, 0, 0);

   // Clear the canvas
  //  clear();
   for (let i = 0; i < liqLices.getRowCount(); i += 1) {
     // Get the lat/lng of each meteorite
    
     let locs = liqLices.getString(i, 'Location');
     let closing = liqLices.getString(i, 'CLOSING');
     let size = liqLices.getString(i, 'CAPACITY');
      size = map(sqrt(size), 0, sqrt(1200), 1, 40) ;
 
      let lat =Number( locs.split(",")[0].replace("(",""))
     let lon =Number( locs.split(",")[1].replace(")",""))
     const liqpos = myMap.latLngToPixel(lat, lon);

     const liqposboylston = boylstonmap.latLngToPixel(lat, lon);
    
     // print(closing)
     if (closing == "11:00","11:30 PM" || closing == "12:00 AM" || closing == "MIDNIGHT" || closing == "Midnight" || closing == "1:00 AM" || closing == "1:00 a.m." || closing == "2:00 AM" || closing == "2:00 a.m." || closing == "1:30 AM"){
      leftBuffer.push();
      leftBuffer.stroke(63,100,100,55)
      leftBuffer.fill(63,100,100,55)
      leftBuffer.ellipse(liqpos.x, liqpos.y, size, size);
      leftBuffer.pop();

      rightBuffer.push();
      rightBuffer.stroke(63,100,100,55)
      rightBuffer.fill(63,100,100,55)
       rightBuffer.ellipse(liqposboylston.x, liqposboylston.y, size, size);
       rightBuffer.pop()
       // print(closing)
       // liqsparsed.append(lat)
     } 
     if (closing == "12:00 AM" || closing == "MIDNIGHT" || closing == "Midnight" || closing == "1:00 AM" || closing == "1:00 a.m." || closing == "2:00 AM" || closing == "2:00 a.m." || closing == "1:30 AM"){

      leftBuffer11.push();
      leftBuffer11.stroke(63,100,100,55)
      leftBuffer11.fill(63,100,100,55)

      leftBuffer11.ellipse(liqpos.x, liqpos.y, size, size);

      leftBuffer11.pop()

      rightBuffer11.push();
      rightBuffer11.stroke(63,100,100,55)
      rightBuffer11.fill(63,100,100,55)
       rightBuffer11.ellipse(liqposboylston.x, liqposboylston.y, size, size);
       rightBuffer11.pop()
     }

     if (closing == "1:00 AM" || closing == "1:00 a.m." || closing == "2:00 AM" || closing == "2:00 a.m." || closing == "1:30 AM"){
      leftBuffer12.push();
      leftBuffer12.stroke(63,100,100,55)

      leftBuffer12.fill(63,100,100,55)
      leftBuffer12.ellipse(liqpos.x, liqpos.y, size, size);

      leftBuffer12.pop();
      rightBuffer12.push();
      rightBuffer12.stroke(63,100,100,55)
      rightBuffer12.fill(63,100,100,55)
       rightBuffer12.ellipse(liqposboylston.x, liqposboylston.y, size, size);
       rightBuffer12.pop()
     }
    
     
 
       // console.log(size)
       
     
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
      //  let size = tstations.getString(i, 'CAPACITY');
      //  size = map(size, 0, 6, 1, 4300) ;
      let size = 400;
       // console.log(size)
       leftBuffer.stroke(92,40,100,100);
       leftBuffer.ellipse(pos.x, pos.y, size, size);
       leftBuffer.image(mg, pos.x - mg.width/16, pos.y - mg.height/16, mg.width/8, mg.height/8);
       leftBuffer11.stroke(92,40,100,100);
       leftBuffer11.ellipse(pos.x, pos.y, size, size);
       leftBuffer11.image(mg, pos.x - mg.width/16, pos.y - mg.height/16, mg.width/8, mg.height/8);
       leftBuffer12.stroke(92,40,100,100);
       leftBuffer12.ellipse(pos.x, pos.y, size, size);
      //  leftBuffer12.image(mg, pos.x - mg.width/16, pos.y - mg.height/16, mg.width/8, mg.height/8);
     // }
   }

   for (let i = 0; i < boylstonstation.getRowCount(); i += 1) {
    // Get the lat/lng of each meteorite
   
    const latitude = Number(boylstonstation.getString(i, 'latitude'));
    const longitude = Number(boylstonstation.getString(i, 'longitude'));
    // const latitude = Number(meteorites.getString(i, 'reclat'));
    // const longitude = Number(meteorites.getString(i, 'reclong'));

    // Only draw them if the position is inside the current map bounds. We use a
    // Mapbox method to check if the lat and lng are contain inside the current
    // map. This way we draw just what we are going to see and not everything. See
    // getBounds() in https://www.mapbox.com/mapbox.js/api/v3.1.1/l-latlngbounds/
    // if (myMap.map.getBounds().contains([latitude, longitude])) {
      // Transform lat/lng to pixel position
      const boylstonpos = boylstonmap.latLngToPixel(latitude, longitude);
      // Get the size of the meteorite and map it. 60000000 is the mass of the largest
      // meteorite (https://en.wikipedia.org/wiki/Hoba_meteorite)
      // let boylsize = boylstonstation.getString(i, 'ov_vehphh');
      // boylsize = map(boylsize, 0, 6, 1, 4300);
      // console.log(size)
      let boylsize = 400;
      rightBuffer.stroke(92,40,100,100);
      rightBuffer.ellipse(boylstonpos.x, boylstonpos.y, boylsize, boylsize);
      rightBuffer.image(mg, boylstonpos.x - mg.width/16, boylstonpos.y - mg.height/16, mg.width/8, mg.height/8);
      rightBuffer.text("11:00 PM", 20, 20)


      rightBuffer11.stroke(92,40,100,100);
      rightBuffer11.ellipse(boylstonpos.x, boylstonpos.y, boylsize, boylsize);
      rightBuffer11.image(mg, boylstonpos.x - mg.width/16, boylstonpos.y - mg.height/16, mg.width/8, mg.height/8);
      rightBuffer11.text("12:00 AM", 20, 20)

      rightBuffer12.stroke(92,40,100,100);
      rightBuffer12.ellipse(boylstonpos.x, boylstonpos.y, boylsize, boylsize);
      // rightBuffer12.image(mg, boylstonpos.x - mg.width/16, boylstonpos.y - mg.height/16, mg.width/8, mg.height/8);
      rightBuffer12.text("1:00 AM", 20, 20)

    // }
  }
  

  // myMap2 = mappa.tileMap(options);
  // myMap.overlay(canvas);
  // myMap2.overlay(canvas2);

  // myMap.onChange(drawStations);

  
  // pieChart(300, angles);
  
  // myMap.map./
}

// The draw loop is fully functional but we are not using it for now.
function draw(

) { image(leftBuffer, 0, 0);
  image(rightBuffer, 450, 0)
  image(leftBuffer11, 0, 450)
  image(rightBuffer11, 450, 450)
  noStroke();
  fill(0,0,0,100);
  rect(0,400,850,50)
  image(leftBuffer12, 0, 900)
  image(rightBuffer12, 450, 900)
  rect(0,850,850,50)

  ;}




// })(this);
function pieChart(diameter, data) {
  var lastAngle = 0;
  for (var i = 0; i < data.length; i++) {
    var opa = map(i, 0, data.length, 0, 300);
    fill(232,204,147,opa);
    arc(width/2, height/2, diameter, diameter, lastAngle, lastAngle+radians(angles[i]));
    lastAngle += radians(angles[i]);
  }
}


