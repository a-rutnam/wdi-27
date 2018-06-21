
console.log('p5 is loaded...');

var particles = [];

var app = {};

app.controls = {
  velocityScale: 0.5,
  gravity: 0.0,
  lifeDecrement: 0.0
};

window.onload = function() {
  app.gui = new dat.GUI();
  app.gui.add( app.controls, 'velocityScale', -1, 1 );
  app.gui.add( app.controls, 'gravity', -1, 1 );
  app.gui.add( app.controls, 'lifeDecrement', 0, 0.1 );
};

var setup = function(){

  createCanvas(windowWidth, windowHeight); // same as window.innerWidth, etc
  background(0);

  colorMode(HSB, 255);

  // fill(255, 0, 0);  // set the fill colour for shapes

  // stroke(0, 255, 0);
  noStroke();

  //      x,  y,  width, height
  // ellipse(50, 50, 100,   100);

  // line(100, 100,   800, 800);

  // rect(100, 100, 500, 500);

  // triangle(800, 800, 700, 700, 900, 900);

};

var draw = function(){

  if ( !keyIsDown(CONTROL) ){
    background(0);
  }

  // const x = random(0, windowWidth);
  // const y = random(0, windowHeight);
  const x = mouseX
  const y = mouseY;

  const vx = mouseX - pwinMouseX;
  const vy = mouseY - pwinMouseY - 4; // WTF p5?
  // console.log({vx, vy});

  const mouseVel = Math.sqrt( vx*vx + vy*vy );  // Pythagoras Yo!

  if( mouseIsPressed || keyIsDown(SHIFT) ){
    // const size = random(10, 100); // const size = 40;
    // fill( frameCount % 255, 255, 255 );
    // fill( random(0, 255), random(0, 255), random(0, 255) );
    const size = mouseVel;

    // const hue = map(mouseX, 0, windowWidth, 0, 255);
    const hue = frameCount % 255;

    particles.push({ x, y, vx, vy, size, hue, mouseVel, life: 1.0 });
  }

  updateParticles();

};

var updateParticles = function(){
  const outputParticles = [];

  for( let i = 0; i < particles.length; i++ ){
    const p = particles[i];

    p.x += p.vx * app.controls.velocityScale;    // update position by adding velocity
    p.y += p.vy * app.controls.velocityScale;

    p.life -= app.controls.lifeDecrement;
    if( p.life > 0 ){
      outputParticles.push( p );
    }

    if( p.x >= windowWidth || p.x <= 0 ){
      p.vx *= -1; // flip the velocity, i.e. change the sign from pos->neg or neg->pos
    }
    if( p.y >= windowHeight || p.y <= 0 ){
      p.vy *= -1; // flip the velocity, i.e. change the sign from pos->neg or neg->pos
    }

    p.vy += app.controls.gravity;

    fill( p.hue, 255, 255, p.life * 255 );
    ellipse(p.x, p.y, p.size, p.size);
  }

  particles = outputParticles;
};


var keyPressed = function(event){
  switch( event.keyCode ){
    case 32:
      background(0);
      break;
  }
};
