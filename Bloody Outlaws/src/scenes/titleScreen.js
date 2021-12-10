
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

		// middle
		const middle = this.add.tileSprite(640, 272, 1280, 326, "middle");

		// foreground
		const foreground = this.add.tileSprite(640, 368, 1280, 720, "foreground");

		// GameLogo
		const gameLogo = this.add.image(640, 224, "GameLogo");
		gameLogo.scaleX = 4;
		gameLogo.scaleY = 4;

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
		const bitmaptext_1 = this.add.bitmapText(640, 512, "smallPixel7", "Game By : Taylor Moon + Tembani Mdaya");
		bitmaptext_1.setOrigin(0.5, 0.5);
		bitmaptext_1.text = "Game By : Taylor Moon + Tembani Mdaya";
		bitmaptext_1.fontSize = 32;
		bitmaptext_1.align = 1;
		bitmaptext_1.letterSpacing = 1;
		bitmaptext_1.dropShadowX = 5;
		bitmaptext_1.dropShadowY = 5;

		// cursor
		const cursor = this.add.sprite(-48, -48, "Cursor");
		cursor.scaleX = 3;
		cursor.scaleY = 3;

		// gameLogo (components)
		new PushOnClick(gameLogo);

		this.background = background;
		this.middle = middle;
		this.foreground = foreground;
		this.gameLogo = gameLogo;
		this.cursor = cursor;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.TileSprite} */
	background;
	/** @type {Phaser.GameObjects.TileSprite} */
	middle;
	/** @type {Phaser.GameObjects.TileSprite} */
	foreground;
	/** @type {Phaser.GameObjects.Image} */
	gameLogo;
	/** @type {Phaser.GameObjects.Sprite} */
	cursor;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		// Disables context menu when right-clicking so we can use it to reload the gun.
		this.input.mouse.disableContextMenu();

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

		// Parallax Scrolling on the background (for now, just moving to the left slowly).
		this.middle.tilePositionX += 0.1;
		this.foreground.tilePositionX += 0.5;

		// Moves the Crosshair
			this.input.on('pointermove', function (pointer)	{
			this.cursor.x = pointer.x;
			this.cursor.y = pointer.y;
		}, this)
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
