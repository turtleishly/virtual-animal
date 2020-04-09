var game = new Phaser .Game(360,640,Phaser.AUTO);

var GameState = {
    init: function(){
        this.scale.scleMode = Phaser.ScaleManager.SHOW_ALL;

        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVerticaly = true;
    },
    preload: function() {
        this.load.image ('backyard','images/backyard.png')
        this.load.image ('apple','images/apple.png')
        this.load.image ('candy','images/candy.png')
        this.load.image ('rotate','images/rotate.png')
        this.load.image ('toy','images/rubber_duck.png')
        this.load.image ('arrow','images/arrow.png')
        this.load.spritesheet('pet','images/pet.png',97,83,5,1,1)


    },
    create: function(){
        this.background = this.game.add.sprite(0,0,'backyard')

        this.pet= this.game.add.sprite(100,400,'pet');
        this.pet.anchor.setTo(0.5);

        this.pet.customParams = {health: 100 , fun: 100}

        this.pet.inputEnabled = true;
        this.pet.input.enableDrag();

        this.apple= this.game.add.sprite( 72,570 ,'apple');
        this.apple.anchor.setTo(0.5);
        this.apple.inputEnabled = true;
        this.apple.customParams = {health: 20};
        this.apple.events.onInputDown.add(this.pickItem,this)

        this.candy = this.game.add.sprite( 144,570 ,'candy');
        this.candy.anchor.setTo(0.5);
        this.candy.inputEnabled = true;
        this.candy.customParams = {health: -10,fun :10};
        this.candy.events.onInputDown.add(this.pickItem,this)

        this.toy = this.game.add.sprite(216 , 570,'toy');
        this.toy.anchor.setTo(0.5);
        this.toy.inputEnabled = true;
        this.toy.customParams = {fun :20};
        this.toy.events.onInputDown.add(this.pickItem,this)

        this.rotate = this.game.add.sprite(288 , 570,'rotate');
        this.rotate.anchor.setTo(0.5);
        this.rotate.inputEnabled = true;
        this.rotate.events.onInputDown.add(this.rotatePet,this)

        this.buttons = [this.apple,this.candy,this.toy,this.rotate];

        this.selectedItem = null;
        this.uiBlocked = false;


    },

    pickItem : function(sprite,event) {
        if (!this.uiBlocked) {
            console.log('picked')

            this.clearSelection();

            this.selectedItem = sprite;
            sprite.alpha = 0.4
        }

    },

    rotatePet: function(sprite,event) {
        if(!this.uiBlocked) {
            console.log('rotating...')

            this.uiBlocked = true;

            this.clearSelection();
            sprite.alpha = 0.4

        }

    },
    clearSelection : function() {
        this.buttons.forEach(function(element,index){
            element.alpha = 1;
        });
        this.selectedItem = null;  
    }

    


};

game.state.add('GameState',GameState);
game.state.start('GameState')