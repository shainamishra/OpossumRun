class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload(){
        // load audio
        this.load.audio('sfx_select', './assets/blip_select12.wav');
        this.load.audio('sfx_explosion', './assets/explosion38.wav');
        this.load.audio('sfx_scream', './assets/he_scream.wav');
        this.load.audio('sfx_monch', './assets/monch.wav');
        this.load.audio('sfx_beep', './assets/beep.wav');
        this.load.audio('sfx_rocket', './assets/hehe.wav');
        this.load.image('title', './assets/title.png');
    }

    create() {
        this.title = this.add.tileSprite(0, 0, 640, 480, 'title').setOrigin(0, 0);

        /*
        // menu text configuration
        let menuConfig = {
            fontFamily: 'Monaco',
            fontSize: '28px',
            backgroundColor: '#000000',
            color: '#ff0000',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        
        // show menu text
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'ROCKET PATROL', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, 'Use ←→ arrows to move & (F) to fire', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#00FF00';
        menuConfig.color = '#000';
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press ← for Novice or → for Expert', menuConfig).setOrigin(0.5);
        */

        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
          // Novice mode
          game.settings = {
            spaceshipSpeed: 3,
            fishSpeed: 5,
            gameTimer: 60000    
          }
          this.sound.play('sfx_beep');
          this.scene.start("playScene");    
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
          // Expert mode
          game.settings = {
            spaceshipSpeed: 4,
            fishSpeed: 6,
            gameTimer: 45000    
          }
          this.sound.play('sfx_beep');
          this.scene.start("playScene");    
        }
      }
}