
//create camera     
	var camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000); 
//create new scene
	var scene = new THREE.Scene();
	var geometry = new THREE.BoxGeometry(100, 100, 100);
//load textures
	var myTextureLoader = new THREE.TextureLoader();
      
//THE BOX THAT HOLDS THE PROJECT AKA. STAR BACKGROUND  
	var myTexture = myTextureLoader.load('starfield.png');        
	var material = new THREE.MeshPhongMaterial({side: THREE.DoubleSide, map: myTexture});
    var SkyBoxmesh = new THREE.Mesh(geometry, material);
      scene.add(SkyBoxmesh);   
      
      
     
//THE SUN
      var sphereGeometry = new THREE.SphereGeometry(2, 25, 25);
      var sphereMaterial = new THREE.MeshBasicMaterial();
      sphereMaterial.map = myTextureLoader.load('sun.jpeg');
      var newSphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
      scene.add(newSphere);
      
//MERCURY 
      var mercuryGeometry = new THREE.SphereGeometry(0.12, 25, 25);
      var mercuryMaterial = new THREE.MeshBasicMaterial();
      mercuryMaterial.map = myTextureLoader.load('mercury.jpg');
      var mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
      scene.add(mercury);
 
 //VENUS 
      var venusGeometry = new THREE.SphereGeometry(0.258, 25, 25);
      var venusMaterial = new THREE.MeshBasicMaterial();
      venusMaterial.map = myTextureLoader.load('venusmap.jpg');
      var venus = new THREE.Mesh(venusGeometry, venusMaterial);
      scene.add(venus);
      
//EARTH
      var planetGeometry = new THREE.SphereGeometry(0.3, 25, 25);
      var planetMaterial = new THREE.MeshBasicMaterial();
      planetMaterial.map = myTextureLoader.load('earth.png');
      var planet0 = new THREE.Mesh(planetGeometry, planetMaterial);
      scene.add(planet0);
      
//MARS
      var marsGeometry = new THREE.SphereGeometry(0.10, 25, 25);
      var marsMaterial = new THREE.MeshBasicMaterial();
      marsMaterial.map = myTextureLoader.load('marsmap.jpg');
      var mars = new THREE.Mesh(marsGeometry, marsMaterial);
      scene.add(mars);

      
//JUPITER
      var jupiterGeometry = new THREE.SphereGeometry(1, 25, 25);
      var jupiterMaterial = new THREE.MeshBasicMaterial();
      jupiterMaterial.map = myTextureLoader.load('jupitermap.jpg');
      var jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
      scene.add(jupiter);
 
      
//SATURN
      var saturnGeometry = new THREE.SphereGeometry(0.8, 25, 25);
      var saturnMaterial = new THREE.MeshBasicMaterial();
      saturnMaterial.map = myTextureLoader.load('saturnmap.jpg');
      var saturn = new THREE.Mesh(saturnGeometry, saturnMaterial);
      scene.add(saturn);


//URANUS
      var uranusGeometry = new THREE.SphereGeometry(0.4, 25, 25);
      var uranusMaterial = new THREE.MeshBasicMaterial();
      uranusMaterial.map = myTextureLoader.load('uranusmap.jpg');
      var uranus = new THREE.Mesh(uranusGeometry, uranusMaterial);
      scene.add(uranus);
      

//NEPTUNE
      var neptuneGeometry = new THREE.SphereGeometry(0.35, 25, 25);
      var neptuneMaterial = new THREE.MeshBasicMaterial();
      neptuneMaterial.map = myTextureLoader.load('neptunemap.jpg');

      var neptune = new THREE.Mesh(neptuneGeometry, neptuneMaterial);
      scene.add(neptune);
            
      
// LIGHT   
	var light = new THREE.AmbientLight(0x888888);
	light.position.set(1,1,1);
	scene.add(light);
      
    var sunlight = new THREE.PointLight( 0xfdfcf0, 0.05 )
	sunlight.position.set(0,0,0)
	scene.add( sunlight )
      
//Thiis renders the scene.      
	var renderer = new THREE.WebGLRenderer();
      
	camera.position.z = 20;


// This is to make sure that the scene understands the resolution of the device we are on.
	renderer.setPixelRatio(window.devicePixelRatio);
// We can also set the size of the render window
	renderer.setSize(window.innerWidth, window.innerHeight);
// Finally we want to connect the renderer to the HTML document
	document.body.appendChild(renderer.domElement);
// And make sure that when the page is resized, everything gets updated 
	window.addEventListener('resize', onWindowResize, false); 
    var controls = new THREE.OrbitControls (camera, renderer.domElement);
      
               

//INNITIALISE THE POSITION AND ORBIT SPEED OF EACH PLANET       
var mercuryr = 2.5;
var mercurytheta = 0;
var mercurydTheta = 2 * Math.PI / 250;

var venusr = 3.5;
var venustheta = 0;
var venusdTheta = 2 * Math.PI / 625;
      
var earthr = 4.5;
var earththeta = 0;
var earthdTheta = 2 * Math.PI / 1000;    
  
var marsr = 5;
var marstheta = 0;
var marsdTheta = 2 * Math.PI / 1883;    
      
var jupiterr = 10;
var jupitertheta = 10;
var jupiterdTheta = 2 * Math.PI / 11870;  
     
var saturnr = 13;
var saturntheta = 6;
var saturndTheta = 2 * Math.PI / 29498;  
      
var uranusr = 15;
var uranustheta = 5;
var uranusdTheta = 2 * Math.PI / 84076; 
      
var neptuner = 17;
var neptunetheta = 3;
var neptunedTheta = 2 * Math.PI / 164904; 
      
   
//DRAWS THE SCENE 
function draw() {
  
  //THESE MAKE EACH PLANET ORBIT THE SUN 
  
  //mercury's orbit
	mercurytheta += mercurydTheta;
  	mercury.position.x = mercuryr * Math.cos(mercurytheta);
  	mercury.position.z = mercuryr * Math.sin(mercurytheta);
  
  //venus' orbit
	venustheta += venusdTheta;
  	venus.position.x = venusr * Math.cos(venustheta);
  	venus.position.z = venusr * Math.sin(venustheta);

  //earth's orbit
	earththeta += earthdTheta;
  	planet0.position.x = earthr * Math.cos(earththeta);
  	planet0.position.z = earthr * Math.sin(earththeta);
  
  //mars' orbit
	marstheta += marsdTheta;
  	mars.position.x = marsr * Math.cos(marstheta);
  	mars.position.z = marsr * Math.sin(marstheta);
  
    //jupiter's orbit
	jupitertheta += jupiterdTheta;
  	jupiter.position.x = jupiterr * Math.cos(jupitertheta);
  	jupiter.position.z = jupiterr * Math.sin(jupitertheta);
  
  
    //saturn's orbit
	saturntheta += saturndTheta;
  	saturn.position.x = saturnr * Math.cos(saturntheta);
  	saturn.position.z = saturnr * Math.sin(saturntheta);
  
  
    //uranus' orbit
	uranustheta += uranusdTheta;
  	uranus.position.x = uranusr * Math.cos(uranustheta);
  	uranus.position.z = uranusr * Math.sin(uranustheta);
  
    //neptune's orbit
	neptunetheta += uranusdTheta;
  	neptune.position.x = neptuner * Math.cos(neptunetheta);
  	neptune.position.z = neptuner * Math.sin(neptunetheta);
  
	//THESE ARE THE ROTATION SPEEDS OF EACH PLANET
	planet0.rotation.y -= 0.009;
    mercury.rotation.y -= 0.002;
    venus.rotation.y -= 0.001;
  	mars.rotation.y -= 0.049;
  	jupiter.rotation.y -= 0.012;
  	saturn.rotation.y -= 0.0114;
  	uranus.rotation.y -= 0.0705;
  	neptune.rotation.y -= 0.0075;

    controls.update();
	renderer.render(scene, camera);
	requestAnimationFrame(draw);
}

// This is the thing that does the resizing      
function onWindowResize() {
	camera.aspect = window.innerWidth / 		window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
}    

// Finally, call the draw loop.      
requestAnimationFrame(draw());
      
