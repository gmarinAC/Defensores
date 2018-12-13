class Example extends Phaser.Scene{
    constructor(){
        super({key:'Example'});
    }
    preload(){
        this.load.image('nave','assets/nave.png');    

        this.load.image('bala','assets/bala.png');
        this.load.image('background', 'assets/background.jpg');   

    }
    create(){
        this.fondoJuego = this.add.tileSprite(400, 300, config.width, config.height, 'background');
        this.nave = this.add.image(config.width/2,552,'nave');
        this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.key_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.key_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    
    
         this.enemigos=[];
        setInterval(()=>{
            this.enemigo = this.physics.add.image(getRandomArbitrary(0, config.width), -10,'bala');
            this.enemigo.setVelocity(0,200);
            //this.enemigos.push(enemigo);
        },1500);

        this.input.keyboard.on('keyup_K' ,(event)=>{
            this.bala = this.physics.add.image(this.nave.x, this.nave.y - 28, 'bala');
            this.bala.enableBody = true;
            this.bala.physicsBodyType = Phaser.Physics.ARCADE;
            this.bala.setVelocity(0,-1000);
            setTimeout(()=>{
                this.bala.destroy();
            },1000);
        },this);
        setTimeout(()=>{},1001)
        
    }

    update(delta){
        // Fondo
        this.fondoJuego.tilePositionY -= 1;

        // Movimiento
        if(this.key_A.isDown){
            if (this.nave.x > (this.nave.width/2)){
                this.nave.x-=10;
            }
            
        }else if(this.key_D.isDown){
           if(this.nave.x < (config.width - this.nave.width/2)){
            this.nave.x+=10;
           }     
        }else if(this.key_W.isDown){
            if(this.nave.y > (this.nave.height/2)){
                this.nave.y-=10;
            }       
        }else if(this.key_S.isDown){
            if(this.nave.y < (config.height - this.nave.height/2)){
                this.nave.y+=10;
            }
            
        }
        if(this.bala && this.enemigo){
            this.physics.add.overlap(this.bala,this.enemigo,colisionEnemigo);
        }
    }   
 }

 function destroySprite (sprite) {

    sprite.destroy();

}
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  function colisionEnemigo(bala, enemigo){
    bala.destroy();
    enemigo.destroy();
  }