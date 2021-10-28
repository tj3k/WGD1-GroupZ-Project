// import {Phaser} from "../../libs/phaser";

var config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,

    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 10,}
        }
    },
    // scene : [Menu, LevelSelect, Level, Pause]
    scene: {
        preload: preload,
        create: create,
        update: update
    }

};

var game = new Phaser.Game(config)

function preload () {
    this.load.image('ico', '../favicon.ico')
}

function create () {

    // const shader = this.add.shader('Tunnel', 1280/2, 720/2, 1280, 720, ['ico']);

    this.add.text(1280/2.3, 720/2, 'the game is not ready yet.', { font: '16px Arial', fill: '#fff'});

}

function update () {

}
