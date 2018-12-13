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
    
        this.input.keyboard.on('keyup_K' ,(event)=>{
            var bala = this.physics.add.image(this.nave.x, this.nave.y - 28, 'bala');
            bala.setVelocity(0,-1000);
            setTimeout(()=>{
                bala.destroy();
            },1000);
        },this);
        
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
    }   
 }

 function destroySprite (sprite) {

    sprite.destroy();

}