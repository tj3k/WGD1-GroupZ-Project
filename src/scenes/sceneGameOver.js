
// You can write more code here

/* START OF COMPILED CODE */

class sceneGameOver extends Phaser.Scene {

	constructor() {
		super("sceneGameOver");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// rectangle
		const rectangle = this.add.rectangle(0, 0, 128, 128);
		rectangle.scaleX = 10;
		rectangle.scaleY = 5.63;
		rectangle.setOrigin(0, 0);
		rectangle.isFilled = true;
		rectangle.fillColor = 9319476;

		// gameOverText
		const gameOverText = this.add.bitmapText(640, 320, "smallPixel7", "GAME OVER");
		gameOverText.setOrigin(0.5, 0.5);
		gameOverText.text = "GAME OVER";
		gameOverText.fontSize = 200;
		gameOverText.align = 1;
		gameOverText.dropShadowY = 15;

		// playAgainText
		const playAgainText = this.add.bitmapText(640, 480, "smallPixel7", "Click Here to Play Again");
		playAgainText.setOrigin(0.5, 0.5);
		playAgainText.text = "Click Here to Play Again";
		playAgainText.fontSize = 60;
		playAgainText.align = 1;
		playAgainText.dropShadowY = 15;

		this.playAgainText = playAgainText;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.BitmapText} */
	playAgainText;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		this.playAgainText.setInteractive();

		// Once mouse clicks, runs fade in
		this.playAgainText.once('pointerdown', () => {
			//fade to black
			this.cameras.main.fadeOut(3000, 0, 0, 0)
		})

		this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
			this.scene.start("Level1")
		})
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
