let juego;

function setup() 
{
  createCanvas(800,600);
  juego = new Juego();  
}


function draw() 
{
  juego.actualizar();
  juego.draw();
}

function keyPressed()
{
  juego.keyPressed();
}

function keyReleased()
{
  juego.keyReleased()
}
