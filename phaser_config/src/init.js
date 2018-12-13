const config = { 
    type: Phaser.CANVAS,
    width: 800,
    height: 600,
    physics:{
        default:'arcade',
        arcade: {
            gravity: {y:200}
        }
    },
    scene: [Example]
};

var game = new Phaser.Game(config);