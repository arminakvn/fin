// (function() {
 
  const key = 'pk.eyJ1IjoiYXJtaW5hdm4iLCJhIjoiSTFteE9EOCJ9.iDzgmNaITa0-q-H_jw1lJw'
  var angles = [ 3.6, 14.4, 309.6, 25.5, 7.2, 3.6];
  
  // Options for map
  const options = {
    lat: 42.34155162,
    lng: -71.14632798,
    zoom: 14,
    width: 200,
    height: 200,
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
    style: 'cj94ar55h54o92smwiolc8shp' //'cj62n87yx3mvi2rp93sfp2w9z'
  };
  
  const options_boylston = {
    lat: 42.35304171,
    lng: -71.06454191,
    zoom: 14,
    width: 200,
    height: 200,
    scale: 1,
    // language: 'en',
    // logo: false,
    // attribution: false,
    // format: 'PNG',
    // pitch: 40,
    // studio: true, // false to use non studio styles
    //style: 'mapbox.dark' //streets, outdoors, light, dark, satellite (for nonstudio)
    // style: 'arminavn/cjg2o1xyt08gn2rqocqpyq4k6'
    pitch: 0,
    style: 'cj94ar55h54o92smwiolc8shp'
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
    let h = '1000'
    let w = '1250'
    elt = document.getElementById('maps1');
  
    // elt2 = document.getElementById('maps2');
    // console.log(elt)
    canvas = createCanvas(w, h).parent(elt);
  
    // elt3 = document.getElementById('maps3');
  
  
    rightBuffer = createGraphics(200,200)
    rightBuffer11 = createGraphics(200,200)
    rightBuffer12 = createGraphics(200,200)
    rightBuffer13 = createGraphics(200,200)

    
    // rightBuffer.parent(elt4);
  
    // canvas2.parent(elt)
    leftBuffer = createGraphics(200,200)
    leftBuffer11 = createGraphics(200,200)
    leftBuffer12 = createGraphics(200,200)
    leftBuffer13 = createGraphics(w/5, h/5)
    // leftBuffer.parent(elt2);
  
    // canvas2 = createCanvas(w, h);
    farRightBuffer = createGraphics(200,200)
    farRightBuffer11 = createGraphics(200,200)
    farRightBuffer12 = createGraphics(200,200)
    farRightBuffer13 = createGraphics(200,200)

    farLeftBuffer = createGraphics(200,200)
    farLeftBuffer11 = createGraphics(200,200)
    farLeftBuffer12  = createGraphics(200,200)

    farLeftBuffer13 = createGraphics(200,200)
  
   
  
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


    leftBuffer13.colorMode(HSB,360,100,100,100)
    // fill(4,59,94,5);
    leftBuffer13.noFill();
    leftBuffer13.stroke(100);
    
  
    leftBuffer13.image(img, 0, 0);
  
    rightBuffer.colorMode(HSB,360,100,100,100)
    // fill(4,59,94,5);
    rightBuffer.noFill();
    rightBuffer.stroke(100);
    
  
    rightBuffer.image(imgBoylston, 0, 0);
  
  
    
  
    farRightBuffer.colorMode(HSB,360,100,100,100)
    // fill(4,59,94,5);
    farRightBuffer.noFill();
    farRightBuffer.stroke(100);
  

    farLeftBuffer.colorMode(HSB,360,100,100,100)
    // fill(4,59,94,5);
    farLeftBuffer.noFill();
    farLeftBuffer.stroke(100);
  


    rightBuffer11.colorMode(HSB,360,100,100,100)
    // fill(4,59,94,5);
    rightBuffer11.noFill();
    rightBuffer11.stroke(100);
    
  
    rightBuffer11.image(imgBoylston, 0, 0);
  
  
  
    farRightBuffer11.colorMode(HSB,360,100,100,100)
    // fill(4,59,94,5);
    farRightBuffer11.noFill();
    farRightBuffer11.stroke(100);

    farLeftBuffer11.colorMode(HSB,360,100,100,100)
    // fill(4,59,94,5);
    farLeftBuffer11.noFill();
    farLeftBuffer11.stroke(100);

  
  
    rightBuffer12.colorMode(HSB,360,100,100,100)
    // fill(4,59,94,5);
    rightBuffer12.noFill();
    rightBuffer12.stroke(100);
    
  
    rightBuffer12.image(imgBoylston, 0, 0);


    rightBuffer13.colorMode(HSB,360,100,100,100)
    // fill(4,59,94,5);
    rightBuffer13.noFill();
    rightBuffer13.stroke(100);
    
  
    rightBuffer13.image(imgBoylston, 0, 0);
  
  
    farRightBuffer12.colorMode(HSB,360,100,100,100)
    // fill(4,59,94,5);
    farRightBuffer12.noFill();
    farRightBuffer12.stroke(100);

    farLeftBuffer12.colorMode(HSB,360,100,100,100)
    // fill(4,59,94,5);
    farLeftBuffer12.noFill();
    farLeftBuffer12.stroke(100);


    farRightBuffer13.colorMode(HSB,360,100,100,100)
    // fill(4,59,94,5);
    farRightBuffer13.noFill();
    farRightBuffer13.stroke(100);

    farLeftBuffer13.colorMode(HSB,360,100,100,100)
    // fill(4,59,94,5);
    farLeftBuffer13.noFill();
    farLeftBuffer13.stroke(100);
     // Clear the canvas
    //  clear();
     for (let i = 0; i < liqLices.getRowCount(); i += 1) {
       // Get the lat/lng of each meteorite
      
       let locs = liqLices.getString(i, 'Location');
       let closing = liqLices.getString(i, 'CLOSING');
       let size = liqLices.getString(i, 'CAPACITY');
        size = map(sqrt(size), 0, sqrt(1200), 2, 40) ;
   
        let lat =Number( locs.split(",")[0].replace("(",""))
       let lon =Number( locs.split(",")[1].replace(")",""))
       const liqpos = myMap.latLngToPixel(lat, lon);
  
       const liqposboylston = boylstonmap.latLngToPixel(lat, lon);
      
       // print(closing)
       if (closing == "11:00","11:30 PM" || closing == "12:00 AM" || closing == "MIDNIGHT" || closing == "Midnight" || closing == "1:00 AM" || closing == "1:00 a.m." || closing == "2:00 AM" || closing == "2:00 a.m." || closing == "1:30 AM"){
        leftBuffer.push();
        leftBuffer.stroke(63,100,100,55)
        leftBuffer.fill(63,100,100,55)
        leftBuffer.ellipse(liqpos.x, liqpos.y, 5, 5);
        leftBuffer.pop();

        farLeftBuffer.push();
        farLeftBuffer.stroke(63,100,100,55)
        farLeftBuffer.fill(63,100,100,55)
         farLeftBuffer.ellipse(liqpos.x, liqpos.y, size, size);
         farLeftBuffer.pop()

        rightBuffer.push();
        rightBuffer.stroke(63,100,100,55)
        rightBuffer.fill(63,100,100,55)
         rightBuffer.ellipse(liqposboylston.x, liqposboylston.y, 5, 5);
         rightBuffer.pop()
  
  
  
         farRightBuffer.push();
        farRightBuffer.stroke(63,100,100,55)
        farRightBuffer.fill(63,100,100,55)
         farRightBuffer.ellipse(liqposboylston.x, liqposboylston.y, size, size);
         farRightBuffer.pop()

         
         // print(closing)
         // liqsparsed.append(lat)
       } 
       if (closing == "12:00 AM" || closing == "MIDNIGHT" || closing == "Midnight" || closing == "1:00 AM" || closing == "1:00 a.m." || closing == "2:00 AM" || closing == "2:00 a.m." || closing == "1:30 AM"){
  
        leftBuffer11.push();
        leftBuffer11.stroke(63,100,100,55)
        leftBuffer11.fill(63,100,100,55)
  
        leftBuffer11.ellipse(liqpos.x, liqpos.y, 5, 5);
  
        leftBuffer11.pop()
  
        rightBuffer11.push();
        rightBuffer11.stroke(63,100,100,55)
        rightBuffer11.fill(63,100,100,55)
         rightBuffer11.ellipse(liqposboylston.x, liqposboylston.y, 5, 5);
         rightBuffer11.pop()
  
         farRightBuffer11.push();
        farRightBuffer11.stroke(63,100,100,55)
        farRightBuffer11.fill(63,100,100,55)
         farRightBuffer11.ellipse(liqposboylston.x, liqposboylston.y, size, size);
         farRightBuffer11.pop()
       }
  
       if (closing == "1:00 AM" || closing == "1:00 a.m." || closing == "2:00 AM" || closing == "2:00 a.m." || closing == "1:30 AM"){
        leftBuffer12.push();
        leftBuffer12.stroke(63,100,100,55)
  
        leftBuffer12.fill(63,100,100,55)
        leftBuffer12.ellipse(liqpos.x, liqpos.y, 5, 5);
  
        leftBuffer12.pop();
        rightBuffer12.push();
        rightBuffer12.stroke(63,100,100,55)
        rightBuffer12.fill(63,100,100,55)
         rightBuffer12.ellipse(liqposboylston.x, liqposboylston.y, 5, 5);
         rightBuffer12.pop()
  
  
         farRightBuffer12.push();
        farRightBuffer12.stroke(63,100,100,55)
        farRightBuffer12.fill(63,100,100,55)
         farRightBuffer12.ellipse(liqposboylston.x, liqposboylston.y, size, size);
         farRightBuffer12.pop()
       }

       if (closing == "2:00 AM" || closing == "2:00 a.m." || closing == "1:30 AM"){
        leftBuffer13.push();
        leftBuffer13.stroke(63,100,100,55)
  
        leftBuffer13.fill(63,100,100,55)
        leftBuffer13.ellipse(liqpos.x, liqpos.y, 5, 5);
  
        leftBuffer13.pop();
        rightBuffer13.push();
        rightBuffer13.stroke(63,100,100,55)
        rightBuffer13.fill(63,100,100,55)
         rightBuffer13.ellipse(liqposboylston.x, liqposboylston.y, 5, 5);
         rightBuffer13.pop()
  
  
         farRightBuffer13.push();
        farRightBuffer13.stroke(63,100,100,55)
        farRightBuffer13.fill(63,100,100,55)
         farRightBuffer13.ellipse(liqposboylston.x, liqposboylston.y, size, size);
         farRightBuffer13.pop()
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
        let size = 200;
         // console.log(size)
         leftBuffer.stroke(92,40,100,100);
        //  leftBuffer.ellipse(pos.x, pos.y, size, size);
         leftBuffer.image(mg, pos.x - mg.width/16, pos.y - mg.height/16, mg.width/8, mg.height/8);
         leftBuffer.text("11:00 PM", 20, 20)
        //  leftBuffer11.stroke(92,40,100,100);
        //  leftBuffer11.ellipse(pos.x, pos.y, size, size);
         leftBuffer11.image(mg, pos.x - mg.width/16, pos.y - mg.height/16, mg.width/8, mg.height/8);
         
         leftBuffer12.stroke(92,40,100,100);
         leftBuffer11.stroke(92,40,100,100);

         leftBuffer11.text("12:00 AM", 20, 20)
         leftBuffer12.text("1:00 AM", 20, 20)

        //  leftBuffer12.ellipse(pos.x, pos.y, size, size);
         leftBuffer13.stroke(92,40,100,100);
         leftBuffer13.text("2:00 AM", 20, 20)
        //  leftBuffer13.ellipse(pos.x, pos.y, size, size);

         farLeftBuffer.stroke(92,40,100,100);
         farLeftBuffer.ellipse(pos.x, pos.y, size, size);
        //  farLeftBuffer.image(mg, pos.x - mg.width/16, pos.y - mg.height/16, mg.width/8, mg.height/8);
         farLeftBuffer11.stroke(92,40,100,100);
         farLeftBuffer11.ellipse(pos.x, pos.y, size, size);
        //  farLeftBuffer11.image(mg, pos.x - mg.width/16, pos.y - mg.height/16, mg.width/8, mg.height/8);
         farLeftBuffer12.stroke(92,40,100,100);
        //  farLeftBuffer12.ellipse(pos.x, pos.y, size, size);
         farLeftBuffer13.stroke(92,40,100,100);
        //  farLeftBuffer13.ellipse(pos.x, pos.y, size, size);
       
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
        let boylsize = 200;
        rightBuffer.stroke(92,40,100,100);
        // rightBuffer.ellipse(boylstonpos.x, boylstonpos.y, boylsize, boylsize);
        rightBuffer.image(mg, boylstonpos.x - mg.width/16, boylstonpos.y - mg.height/16, mg.width/8, mg.height/8);
        // rightBuffer.text("11:00 PM", 20, 20)
  
  
        rightBuffer11.stroke(92,40,100,100);
        // rightBuffer11.ellipse(boylstonpos.x, boylstonpos.y, boylsize, boylsize);
        rightBuffer11.image(mg, boylstonpos.x - mg.width/16, boylstonpos.y - mg.height/16, mg.width/8, mg.height/8);
        // rightBuffer11.text("12:00 AM", 20, 20)
  
        rightBuffer12.stroke(92,40,100,100);
        // rightBuffer12.ellipse(boylstonpos.x, boylstonpos.y, boylsize, boylsize);
        // rightBuffer12.image(mg, boylstonpos.x - mg.width/16, boylstonpos.y - mg.height/16, mg.width/8, mg.height/8);
        // rightBuffer12.text("1:00 AM", 20, 20)

        rightBuffer13.stroke(92,40,100,100);
        // rightBuffer13.ellipse(boylstonpos.x, boylstonpos.y, boylsize, boylsize);
        // rightBuffer12.image(mg, boylstonpos.x - mg.width/16, boylstonpos.y - mg.height/16, mg.width/8, mg.height/8);
        // rightBuffer13.text("2:00 AM", 20, 20)



        farRightBuffer.stroke(92,40,100,100);
        farRightBuffer.ellipse(boylstonpos.x, boylstonpos.y, boylsize, boylsize);
        // farRightBuffer.image(mg, boylstonpos.x - mg.width/16, boylstonpos.y - mg.height/16, mg.width/8, mg.height/8);
        // farRightBuffer.text("11:00 PM", 20, 20)
  
  
        farRightBuffer11.stroke(92,40,100,100);
        farRightBuffer11.ellipse(boylstonpos.x, boylstonpos.y, boylsize, boylsize);
        // farRightBuffer11.image(mg, boylstonpos.x - mg.width/16, boylstonpos.y - mg.height/16, mg.width/8, mg.height/8);
        // farRightBuffer11.text("12:00 AM", 20, 20)
  
        farRightBuffer12.stroke(92,40,100,100);
        // farRightBuffer12.ellipse(boylstonpos.x, boylstonpos.y, boylsize, boylsize);
        // farRightBuffer12.image(mg, boylstonpos.x - mg.width/16, boylstonpos.y - mg.height/16, mg.width/8, mg.height/8);
        // farRightBuffer12.text("1:00 AM", 20, 20)

        farRightBuffer13.stroke(92,40,100,100);
        // farRightBuffer13.ellipse(boylstonpos.x, boylstonpos.y, boylsize, boylsize);
        // farRightBuffer12.image(mg, boylstonpos.x - mg.width/16, boylstonpos.y - mg.height/16, mg.width/8, mg.height/8);
        // farRightBuffer13.text("2:00 AM", 20, 20)
  
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
  
  ) { 
    image(leftBuffer, 0, 0);
    image(rightBuffer, 250, 0)
    image(farLeftBuffer, 500, 0);
    image(farRightBuffer, 750, 0)

    image(leftBuffer11, 0, 250)
    image(rightBuffer11, 250, 250)
    image(farLeftBuffer11, 500, 250);
    image(farRightBuffer11, 750, 250)
    noStroke();
    fill(0,0,0,100);
   
    image(leftBuffer12, 0, 500)
    image(rightBuffer12, 250, 500)
    image(farLeftBuffer12, 500, 500);
    image(farRightBuffer12, 750, 500)

    image(leftBuffer13, 0, 750)
    image(rightBuffer13, 250, 750)
    image(farLeftBuffer13, 500, 750);
    image(farRightBuffer13, 750, 750)
    rect(0,200,1200,50)
    rect(450,0,50,1600)
    rect(700,0,50,1600)
    rect(950,0,50,1600)

    rect(200,0,50,1600)
  
    rect(0,450,1200,50)
  
    rect(0,700,1200,50)
  
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
  
  
     