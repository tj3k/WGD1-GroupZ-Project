
// You can write more code here

/* START OF COMPILED CODE */

class enemy extends Phaser.GameObjects.Triangle {

	constructor(scene, x, y, x1, y1, x2, y2, x3, y3) {
		super(scene, x ?? 0, y ?? 0, x1 ?? 0, y1 ?? 128, x2 ?? 64, y2 ?? 0, x3 ?? 128, y3 ?? 128);

		this.scaleX = 1.5;
		this.scaleY = 1.5;
		this.setOrigin(0.5, 0.9968739725291624);
		this.isFilled = true;
		this.fillColor = 16289679;
		this.isStroked = true;
		this.lineWidth = 5;

		// this (components)
		new PushOnClick(this);

		/* START-USER-CTR-CODE */

		// Enemy Variables
		this.health = 6;
		this.strength = 2;

		this.enemyAlive = true;
		this.enemyHurt = false;

		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
