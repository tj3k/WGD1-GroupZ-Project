
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

		// text_1
		const text_1 = this.add.text(640, 512, "", {});
		text_1.setOrigin(0.5, 0.5);
		text_1.text = "Made with\nPhaser 3 + Phaser Editor 2D";
		text_1.setStyle({"align":"center","backgroundColor":"","fontFamily":"Arial","fontSize":"30px","stroke":"#eedc8eff","strokeThickness":1,"shadow.offsetY":5,"shadow.blur":3,"shadow.stroke":true,"shadow.fill":true});
		text_1.setPadding({"left":5,"right":5,"bottom":5});

		// GameLogo
		const gameLogo = this.add.image(640, 320, "GameLogo");
		gameLogo.scaleX = 4;
		gameLogo.scaleY = 4;

		// cursor
		const cursor = this.add.image(-32, -32, "Cursor");
		cursor.scaleX = 2;
		cursor.scaleY = 2;

		this.background = background;
		this.gameLogo = gameLogo;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.TileSprite} */
	background;
	/** @type {Phaser.GameObjects.Image} */
	gameLogo;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		// Once mouse clicks, runs enterPressed function.
		// this.input.on("pointerdown", this.enterPressed, this);
		this.input.on('pointerdown', function () {
			enterPressed();
		}, this);
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
		// 	this.input.on('pointermove', function (pointer)	{
		// 	cursor.x = pointer.x;
		// 	cursor.y = pointer.y;
		// })
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
