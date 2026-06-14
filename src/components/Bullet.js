
// You can write more code here

/* START OF COMPILED CODE */

class Bullet {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__Bullet"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {Bullet} */
	static getComponent(gameObject) {
		return gameObject["__Bullet"];
	}

	/** @type {Phaser.GameObjects.Image} */
	gameObject;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
