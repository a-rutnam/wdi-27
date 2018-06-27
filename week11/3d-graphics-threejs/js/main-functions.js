var app = app || {};

app.createSpotlight = () => {

  const spotlight = new THREE.SpotLight( 0xFFFFFF );
  spotlight.position.set( -10, 60, 10 ); // x, y, z
  spotlight.castShadow = true;
  spotlight.shadow.mapSize.width = 2048;
  spotlight.shadow.mapSize.height = 2048;

  return spotlight;
};

app.createPlane = () => {

  // 120 x 20 plane a.k.a. 'runway'
  const planeGeometry = new THREE.PlaneGeometry( 120, 20 );
  const planeMaterial = new THREE.MeshLambertMaterial({
    color: 0xCFD8DC
  });

  // combine the geometry (shape) and the material (what the surface looks like) into a mesh, the actual 3D object
  const plane = new THREE.Mesh( planeGeometry, planeMaterial);

  plane.rotation.x = -0.5 * Math.PI; // don't ask, it's because of math(s)
  plane.position.x = 15;
  plane.position.y = 0;
  plane.position.z = 0;

  plane.receiveShadow = true; // shadows are cast onto this surface

  return plane;
};

app.createCube = () => {

  const cubeGeometry = new THREE.BoxGeometry( 4, 4, 4 );
  const cubeMaterial = new THREE.MeshLambertMaterial({
    color: 0xFF8F00
  });

  const cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
  cube.position.set( -4, 10, 0 );
  cube.castShadow = true;

  return cube;
};

app.createSphere = () => {

  // first arg: radius; next two are num of triangle segments to use
  const sphereGeometry = new THREE.SphereGeometry( 6, 40, 40 );
  const sphereMaterial = new THREE.MeshPhongMaterial({
    color: 0x039BE5,
    // wireframe: true
  });

  const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
  sphere.position.set( 20, 6, 2 );
  sphere.castShadow = true;

  return sphere;
};

app.animate = () => {

  // sphere animation
  app.step += app.controls.bouncingSpeed;
  app.sphere.position.y = 6 + ( Math.abs(Math.sin(app.step)) * 10);
  app.sphere.position.x = 20 + ( (Math.cos(app.step)) * 10);

  app.cube.rotation.x += app.controls.rotationSpeed;
  app.cube.rotation.y += app.controls.rotationSpeed;
  app.cube.rotation.z += app.controls.rotationSpeed;

  app.renderer.render( app.scene, app.camera );
  requestAnimationFrame( app.animate );
};
