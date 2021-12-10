
// You can write more code here

/* START OF COMPILED CODE */

class titleScreen extends Phaser.Scene {

	constructor() {
		super("titleScreen");

		/* START-USER-CTR-CODE */
		// Write your code here.

		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// background
		const background = this.add.tileSprite(640, 360, 1280, 720, "background");

		// GameLogo
		const gameLogo = this.add.image(640, 240, "GameLogo");
		gameLogo.scaleX = 4;
		gameLogo.scaleY = 4;

		// cursor
		const cursor = this.add.image(-48, -48, "Cursor");
		cursor.scaleX = 3;
		cursor.scaleY = 3;

		// bitmaptext
		const bitmaptext = this.add.bitmapText(640, 432, "smallPixel7", "Made with\nPhaser 3 + Phaser Editor 2D");
		bitmaptext.setOrigin(0.5, 0.5);
		bitmaptext.text = "Made with\nPhaser 3 + Phaser Editor 2D";
		bitmaptext.fontSize = 32;
		bitmaptext.align = 1;
		bitmaptext.letterSpacing = 1;
		bitmaptext.dropShadowX = 5;
		bitmaptext.dropShadowY = 5;

		// bitmaptext_1
		const bitmaptext_1 = this.add.bitmapText(640, 544, "smallPixel7", "Game By : Taylor Moon + Tembani Mdaya");
		bitmaptext_1.setOrigin(0.5, 0.5);
		bitmaptext_1.text = "Game By : Taylor Moon + Tembani Mdaya";
		bitmaptext_1.fontSize = 32;
		bitmaptext_1.align = 1;
		bitmaptext_1.letterSpacing = 1;
		bitmaptext_1.dropShadowX = 5;
		bitmaptext_1.dropShadowY = 5;

		// gameLogo (components)
		new PushOnClick(gameLogo);

		this.background = background;
		this.gameLogo = gameLogo;
		this.cursor = cursor;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.TileSprite} */
	background;
	/** @type {Phaser.GameObjects.Image} */
	gameLogo;
	/** @type {Phaser.GameObjects.Image} */
	cursor;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		// Once mouse clicks, runs enterPressed function.
		this.input.on("pointerdown", this.enterPressed, this);
		
		// this.input.on('pointerdown', function (pointer) {
		// 	enterPressed();
		// }, this);

	}

	enterPressed() {

		this.scene.start("Level1")
	}

	// TODO Blink text saying "Click to Play" or Similar.
	blinkText()	{

	}

	update()	{

		// Moves background to the left slowly. The image loops because it's a TileSprite.
		this.background.tilePositionX += 0.5;

		// Supposed to move the crosshair, not working...
			this.input.on('pointermove', function (pointer)	{
			cursor.x = pointer.x;
			cursor.y = pointer.y;
		})
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
