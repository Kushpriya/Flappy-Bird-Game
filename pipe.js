class Pipe {
    constructor() {
      this.position = {
        x: canvas.width,
        y: Math.random() * (0 - -250) + -250,
      };
  
      this.size = {
        width: 50,
        height:300,
      };
  
      this.velocity = {
        x: -1,
        y: 0,
      };
  
      this.upPipe = new Image();
      this.downPipe = new Image();
      this.upPipe.src = "./toppipe.png";
      this.downPipe.src = "./bottompipe.png";
    }
  
    draw() {
      c.drawImage(
        this.upPipe,
        this.position.x,
        this.position.y,
        this.size.width,
        this.size.height
      );
    }
  

    drawPipeBelow() {
      c.drawImage(
        this.downPipe,
        this.position.x,
        this.position.y + this.size.height + 150,
        this.size.width,
        this.size.height
      );
    }
  
    collision() {
      if (
        this.position.x + this.size.width >=
          bird.position.x - bird.size.width / 2 &&
        this.position.x <=
          bird.position.x - bird.size.width / 2 + bird.size.width &&
        this.position.y + this.size.height >= bird.position.y &&
        this.position.y <= bird.position.y + bird.size.height
      ) {
        console.log("collision");
        bird.isDead = true;
      }
  
      if (
        this.position.x + this.size.width >=
          bird.position.x - bird.size.width / 2 &&
        this.position.x <=
          bird.position.x - bird.size.width / 2 + bird.size.width &&
        this.position.y + this.size.height + 150 + this.size.height >=
          bird.position.y &&
        this.position.y + this.size.height + 150 <=
          bird.position.y + bird.size.height
      ) {
        console.log("collision");
        bird.isDead = true;
      }
    }
  
    move() {
      if (this.position.x + this.size.width <= 0) {
        this.position.x = canvas.width;
        this.position.y = Math.random() * (0 - -250) + -250;
      }
      this.position.x += this.velocity.x;
    }
  
    update() {
      this.draw();
      this.drawPipeBelow();
      if (!bird.isDead) {
        this.move();
        this.collision();
      }
    }
  }
  