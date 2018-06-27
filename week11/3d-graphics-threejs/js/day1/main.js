
var app = app || {};

app.step = 0;

app.controls = {
  bouncingSpeed: 0.05,
  rotationSpeed: 0.01
};

app.init = () => {
  console.log('Hello 3D w0rld!');

  app.gui = new dat.GUI();
  app.gui.add( app.controls, 'bouncingSpeed', 0, 1);
  app.gui.add( app.controls, 'rotationSpeed', 0, 1);
  

  // The scene stores and keeps track of all the objects we're rendering, including the lights and camera
  app.scene = new THREE.Scene();

  app.width = window.innerWidth;
  app.height = window.innerHeight;

  // The camera defines our view into the scene from a particular perspective
  // 4 arguments:
  // field of view
  // screen ratio
  // how close to render things (near field)
  // how far to render things (far field)
  app.camera = new THREE.PerspectiveCamera( 60, app.width/app.height, 0.1, 1000 );
  app.camera.position.x = -30;
  app.camera.position.y = 40;
  app.camera.position.z = 30;
  app.camera.lookAt( app.scene.position );

  // The renderer calculates how to draw all the objects based on the lighting and camera perspective,
  // and renders it all down to a 2D image to show in a <canvas> element in the browser
  app.renderer = new THREE.WebGLRenderer();
  app.renderer.setSize( app.width, app.height );
  app.renderer.setClearColor( 0x000000 ); // background colour
  app.renderer.shadowMap.enabled = true; // shadows are computationally expensive and disabled by default
  app.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  app.axes = new THREE.AxesHelper( 40 );
  app.scene.add( app.axes );

  // app.plane will be a THREE.Mesh object
  app.plane = app.createPlane();
  app.scene.add( app.plane );

  app.cube = app.createCube();
  app.scene.add( app.cube );

  app.sphere = app.createSphere();
  app.scene.add( app.sphere );

  app.spotlight = app.createSpotlight();
  app.scene.add( app.spotlight );

  app.ambient = new THREE.AmbientLight( 0x333333 );
  app.scene.add( app.ambient );

  app.mouseControls = new THREE.OrbitControls( app.camera, app.renderer.domElement );

  // add the <canvas> element created by the renderer to the DOM
  document.getElementById('output').appendChild( app.renderer.domElement );

  // perform an actual render
  // (moved to app.animate)
  // app.renderer.render( app.scene, app.camera );

  // start off the animation loop
  app.animate();
};

// Vanilla JS version of jQuery's $(document).ready()
window.onload = app.init;
