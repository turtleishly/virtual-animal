var BootState = {
    init: function(){
        this.scale.scleMode = Phaser.ScaleManager.SHOW_ALL;

        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVerticaly = true;
    },
    preload: function(){
        this.preload.image('preloadBar','bar.png');
        this.preload.image('logo','logo.png');

    },
    create: function(){
        this.game.stage.backgroundColor = '#fff';

        this.state.start('PreloadState')
    }
};