
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
		const gameLogo = this.add.image(640, 248, "GameLogo");
		gameLogo.scaleX = 4;
		gameLogo.scaleY = 4;

		// creditsText_1
		const creditsText_1 = this.add.bitmapText(640, 608, "smallPixel7", "_______________________________________");
		creditsText_1.setOrigin(0.5, 0.5);
		creditsText_1.text = "_______________________________________";
		creditsText_1.fontSize = 32;
		creditsText_1.align = 1;
		creditsText_1.letterSpacing = 1;
		creditsText_1.dropShadowX = 5;
		creditsText_1.dropShadowY = 5;

		// madeByText
		const madeByText = this.add.bitmapText(640, 568, "smallPixel7", "Made with\nPhaser 3 + Phaser Editor 2D");
		madeByText.setOrigin(0.5, 0.5);
		madeByText.text = "Made with\nPhaser 3 + Phaser Editor 2D";
		madeByText.fontSize = 32;
		madeByText.align = 1;
		madeByText.letterSpacing = 1;
		madeByText.dropShadowX = 5;
		madeByText.dropShadowY = 5;

		// creditsText
		const creditsText = this.add.bitmapText(640, 648, "smallPixel7", "Game By : Taylor Moon + Tembani Mdaya");
		creditsText.setOrigin(0.5, 0.5);
		creditsText.text = "Game By : Taylor Moon + Tembani Mdaya";
		creditsText.fontSize = 32;
		creditsText.align = 1;
		creditsText.letterSpacing = 1;
		creditsText.dropShadowX = 5;
		creditsText.dropShadowY = 5;

		// clickToPlay
		const clickToPlay = this.add.sprite(640, 456, "clickToPlay");
		clickToPlay.scaleX = 3;
		clickToPlay.scaleY = 3;

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
		this.clickToPlay = clickToPlay;
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
	clickToPlay;
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

		this.blinkText();

	}

	enterPressed() {

		this.clickToPlay.visible = false;

		this.scene.start("Level1")
	}

	// Blinks "Click to Play" text on screen.
	blinkText() {

		this.time.addEvent({
			repeat: -1,
			delay: 400,
			callback: () => {
				this.clickToPlay.visible = !this.clickToPlay.visible;
			}
		});
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
