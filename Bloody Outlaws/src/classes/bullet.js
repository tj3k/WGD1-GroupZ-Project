export class Bullet extends Phaser.GameObjects.Image
{

    constructor(scene)
    {

        super(scene, 0, 0, "bullet");
        this.visible = false;

    }

}