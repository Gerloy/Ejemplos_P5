class Personaje
{
  
  constructor()
  {
    //El vector se usa como variable que contiene la posicion x y la posicion y del objeto
    //se puede acceder a estas variables con this.pos.x y this.pos.y
    //Hay mas cosas que se pueden hacer con vectores, peroeso no es importante para este ejemplo
    this.pos = createVector(width*0.5, height*0.5);
    this.vel = 5;
    this.rad = 25;
    
    //Variables de las teclas para cada accion
    //Si quieren usar otras teclas les pudeden cambiar el valor
    this.key_up = 'w';
    this.key_down = 's';
    this.key_left = 'a';
    this.key_right = 'd';
    
    //Variables de los movimientos que se estan realizando
    this.mov_up = false;
    this.mov_down = false;
    this.mov_left = false;
    this.mov_right = false;

  }
  
  //Esta funcion se usa para actuaizar las variables del objeto
  actualizar()
  {
    //Estas funciones no es necesario que las modifiquen para usar el movimiento, a menos que cambien nombres de las variables del constructor
    //Para aplicarlas a una clase de su juego pueden copiar y pegar estas funciones y las variables de arriba, y pasar a un vector si tienen la posicion puesta como una variable posX y una posY de esta forma, this.pos = createVector(posX,posY);
    this.pos.add(this.actualizarMov()); //Para sumar vectores entre si se usa la funcion vector.add(variable tipo Vector);
    this.coliBordes(); //Me aseguro de que el personaje no se vaya de la pantalla
    //console.log(this.pos.x);
    //console.log(this.pos.y);
  }
  
  //Esta funcion se usa para dibujar la elipse que representa al personaje
  draw()
  {
    push();
      fill(255,0,0);
      ellipse(this.pos.x, this.pos.y, this.rad*2, this.trad*2);
    pop();
  }
  
  //Detecta la tecla que se esta presionando y activa la booleana que corresponda a esa tecla
  keyPressed()
  {
    switch (key)
    {
      case this.key_up:
        this.mov_up = true;
        break;
        
      case this.key_down:
        this.mov_down = true;
        break;
        
      case this.key_left:
        this.mov_left = true;
        break;
      
      case this.key_right:
        this.mov_right = true;
        break;
      
      default:
        break;
    }
  }
  
  //Detecta cuanbdo se deja de presionar una tecla y desactiva la varible que esta asignada a esa letra
  keyReleased()
  {
    switch (key)
    {
      case this.key_up:
        this.mov_up = false;
        break;
        
      case this.key_down:
        this.mov_down = false;
        break;
        
      case this.key_left:
        this.mov_left = false;
        break;
      
      case this.key_right:
        this.mov_right = false;
        break;
      
      default:
        break;
    }
  }
  
  
  //Hago un vector para cada posibilidad de movimiento que tiene el objeto, que son cuatro, arriba, abajo, izquierda y derecha,
  //detecta si la booleana ligada a ese movimiento esta activada 
  //(y si lo esta, el vector va a tener una variable x o y correspondiente al moivimiento en cuestion) por ultimo las suma todas y devuelve esa suma
  actualizarMov()
  {
    let v_mov_up = createVector(0, 0);
    let v_mov_down = createVector(0, 0);
    let v_mov_left = createVector(0, 0);
    let v_mov_right = createVector(0, 0);
    
    if (this.mov_up)    {v_mov_up = createVector(0, -this.vel);}
    if (this.mov_down)  {v_mov_down = createVector(0, this.vel);}
    if (this.mov_left)  {v_mov_left = createVector(-this.vel, 0);}
    if (this.mov_right) {v_mov_right = createVector(this.vel, 0);}
    
    let total = createVector(0,0);
    total.add(v_mov_up);
    total.add(v_mov_down);
    total.add(v_mov_left);
    total.add(v_mov_right);
    
    return(total);
  }
  
  coliBordes()
  {
    if(this.pos.x < this.rad){this.pos.x = this.rad;}else if(this.pos.x > width-this.rad){this.pos.x = width-this.rad;}
    if(this.pos.y < this.rad){this.pos.y = this.rad;}else if(this.pos.y > height-this.rad){this.pos.y = height-this.rad;}
  }

}
