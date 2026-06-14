// import {Bullet} from "./bullet";

export class Enemy extends Phaser.GameObjects.Sprite {
    constructor(scene, name, health, attack, x, y)
    {
        super(scene, 0, 0, "enemy");

        this.scene = scene;

        this.name = name;

        this.setPosition(x, y);

        this.play(this.name + '-idle');

        scene.add.existing(this);

        this.on('animationcomplete', this.animComplete, this);

        this.alive = true;

        this.health = health;

        this.attack = attack;

        this.timer = scene.time.addEvent({delay: Phaser.Math.Between(1000, 3000), callback: this.fire, callbackScope: this});
    }

    preUpdate (time, delta)
    {
        super.preUpdate(time, delta);
    }

    animComplete (animation)
    {
        if (animation.key === this.name + '-attack')
        {
            this.play(this.name + '-idle');
        }
    }

    damage (amount)
    {
        if (this.health == 0)
        {
            this.alive = false;

            this.destroy(true);
        }
    }

    fire ()
    {

        if (this.isAlive === true)
        {
            this.play(this.name + '-attack');

            // var offset = (this.name === 'blue') ? 20 : -20;
            // var targetX = (this.name === 'blue') ? target.x + 30 : target.x - 30;

            this.bullet.setPosition(this.x + offset, this.y + 20).setVisible(true);

            this.scene.tweens.add({
                targets: this.bullet,
                scaleX: "*=1.50",
                scaleY: "*=1.50",
                ease: 'Expo.easeIn',
                duration: 1000,
                onComplete: function (tween, targets) {
                    targets[0].setVisible(false);
                }
            });

            this.health(Phaser.Math.Between(-2, -4));

            this.timer = this.scene.time.addEvent({ delay: Phaser.Math.Between(1500, 3000), callback: this.fire, callbackScope: this });
        }
    }

    update ()
    {
        this.x += 0.75;
    }
}

export default enemy;