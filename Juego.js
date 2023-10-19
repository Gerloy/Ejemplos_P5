class Juego
{
  constructor()
  {
    //Crear personaje
    this.per = new Personaje();
  }
  
  actualizar()
  {
    //Actualizar posiciones y demas variables de los objetos
    this.per.actualizar();
  }
  
  draw()
  {
    //Dibujar cosas
    background(0,255,0);
    this.per.draw();
  }
  
  keyPressed()
  {
    this.per.keyPressed();
  }
  
  keyReleased()
  {
    this.per.keyReleased();
  }
}
