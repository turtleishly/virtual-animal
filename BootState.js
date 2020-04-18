var BootState = {
    init: function(){
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVerticaly = true;
    },
    preload: function(){
        this.load.image('preloadBar','bar.png');
        this.load.image('logo','logo.png');

    },
    create: function(){
        this.game.stage.backgroundColor = '#fff';

        this.state.start('PreloadState')
    }
};