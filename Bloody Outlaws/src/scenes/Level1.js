
// You can write more code here

/* START OF COMPILED CODE */

class Level1 extends Phaser.Scene {

	constructor() {
		super("Level1");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// background
		const background = this.add.tileSprite(640, 360, 1280, 720, "background");

		// barflyTest
		const barflyTest = this.add.ellipse(272, 448, 128, 128);
		barflyTest.angle = -90;
		barflyTest.isFilled = true;
		barflyTest.fillColor = 4163261;
		barflyTest.isStroked = true;
		barflyTest.lineWidth = 3;
		barflyTest.smoothness = 9;

		// bouncerTest
		const bouncerTest = this.add.ellipse(400, 424, 128, 128);
		bouncerTest.scaleX = 1.5;
		bouncerTest.scaleY = 1.5;
		bouncerTest.angle = -90;
		bouncerTest.isFilled = true;
		bouncerTest.fillColor = 13489968;
		bouncerTest.isStroked = true;
		bouncerTest.lineWidth = 2;
		bouncerTest.smoothness = 9;

		// dustTest
		const dustTest = this.add.ellipse(560, 472, 128, 128);
		dustTest.scaleX = 0.6;
		dustTest.scaleY = 0.6;
		dustTest.angle = -90;
		dustTest.isFilled = true;
		dustTest.fillColor = 7024431;
		dustTest.isStroked = true;
		dustTest.lineWidth = 4;
		dustTest.smoothness = 9;

		// UI
		const uI = this.add.layer();

		// uI_Border
		const uI_Border = this.add.image(640, 360, "UI_Border");
		uI.add(uI_Border);

		// ui_iconBox_ammo
		const ui_iconBox_ammo = this.add.image(1176, 648, "UI_IconBox");
		ui_iconBox_ammo.scaleX = 3;
		ui_iconBox_ammo.scaleY = 3;
		uI.add(ui_iconBox_ammo);

		// ui_iconBox_health
		const ui_iconBox_health = this.add.image(104, 648, "UI_IconBox");
		ui_iconBox_health.scaleX = 3;
		ui_iconBox_health.scaleY = 3;
		uI.add(ui_iconBox_health);

		// uI_Ammo
		const uI_Ammo = this.add.image(1176, 648, "UI_Ammo");
		uI_Ammo.scaleX = 3;
		uI_Ammo.scaleY = 3;
		uI.add(uI_Ammo);

		// uI_Health
		const uI_Health = this.add.image(104, 648, "UI_Health");
		uI_Health.scaleX = 3;
		uI_Health.scaleY = 3;
		uI.add(uI_Health);

		// cursor
		const cursor = this.add.image(1120, 480, "Cursor");
		cursor.scaleX = 3;
		cursor.scaleY = 3;

		// healthCounter
		const healthCounter = this.add.bitmapText(184, 648, "smallPixel7", "20/20");
		healthCounter.setOrigin(0, 0.5);
		healthCounter.text = "20/20";
		healthCounter.fontSize = 50;
		healthCounter.dropShadowY = 10;

		// ammoCounter
		const ammoCounter = this.add.bitmapText(1096, 648, "smallPixel7", "6/6");
		ammoCounter.setOrigin(1, 0.5);
		ammoCounter.text = "6/6";
		ammoCounter.fontSize = 50;
		ammoCounter.align = 2;
		ammoCounter.dropShadowY = 10;

		// scoreText
		const scoreText = this.add.bitmapText(640, 609, "smallPixel7", "SCORE:");
		scoreText.setOrigin(0.5, 0.5);
		scoreText.text = "SCORE:";
		scoreText.fontSize = 40;
		scoreText.align = 1;
		scoreText.dropShadowY = 10;

		// scoreCounter
		const scoreCounter = this.add.bitmapText(640, 670, "smallPixel7", "0");
		scoreCounter.setOrigin(0.5, 0.5);
		scoreCounter.text = "0";
		scoreCounter.fontSize = 75;
		scoreCounter.align = 1;
		scoreCounter.dropShadowY = 10;

		// lists
		const enemies = []

		this.barflyTest = barflyTest;
		this.bouncerTest = bouncerTest;
		this.dustTest = dustTest;
		this.uI = uI;
		this.cursor = cursor;
		this.enemies = enemies;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Ellipse} */
	barflyTest;
	/** @type {Phaser.GameObjects.Ellipse} */
	bouncerTest;
	/** @type {Phaser.GameObjects.Ellipse} */
	dustTest;
	/** @type {Phaser.GameObjects.Layer} */
	uI;
	/** @type {Phaser.GameObjects.Image} */
	cursor;
	/** @type {Array<any>} */
	enemies;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

	}

	update() {

		// Moves the background to the left slowly. Background loops because it is a TileSprite.
		this.background.tilePositionX += 0.5;

			// Supposed to make the crosshair move with the mouse. Not working.
		// 	this.input.on('pointermove', function (pointer)	{
		// 	cursor.x = pointer.x;
		// 	cursor.y = pointer.y;
		// })
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
