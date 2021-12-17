
// You can write more code here

/* START OF COMPILED CODE */

class Level1 extends Phaser.Scene {

	constructor() {
		super("Level1");

		/* START-USER-CTR-CODE */
		// Write your code here.

		// Setting up player variables
		this.totalHealth = 20;
		this.health = this.totalHealth;

		this.totalAmmo = 6;
		this.ammo = this.totalAmmo;

		this.isAlive = true;
		this.isHurt = false;

		this.score = 0;

		// Enemy Variables


		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// background
		const background = this.add.tileSprite(640, 360, 1280, 720, "background");

		// middle
		const middle = this.add.tileSprite(640, 264, 1280, 326, "middle");

		// foreground
		const foreground = this.add.tileSprite(640, 360, 1280, 720, "foreground");

		// enemyLayer
		const enemyLayer = this.add.layer();

		// barfly
		const barfly = this.add.ellipse(336, 504, 128, 128);
		barfly.angle = -90;
		barfly.setOrigin(0.045, 0.5);
		barfly.isFilled = true;
		barfly.fillColor = 4163261;
		barfly.isStroked = true;
		barfly.lineWidth = 4;
		barfly.smoothness = 9;
		enemyLayer.add(barfly);

		// bouncer
		const bouncer = this.add.ellipse(432, 472, 128, 128);
		bouncer.angle = -90;
		bouncer.setOrigin(0.045, 0.5);
		bouncer.isFilled = true;
		bouncer.fillColor = 13489968;
		bouncer.isStroked = true;
		bouncer.lineWidth = 4;
		bouncer.smoothness = 9;
		enemyLayer.add(bouncer);

		// dust
		const dust = this.add.ellipse(584, 504, 128, 128);
		dust.angle = -90;
		dust.setOrigin(0.045, 0.5);
		dust.isFilled = true;
		dust.fillColor = 7024431;
		dust.isStroked = true;
		dust.lineWidth = 4;
		dust.smoothness = 9;
		enemyLayer.add(dust);

		// enemy
		const enemy = new enemy(this, 864, 503.3998027255992);
		enemy.fillColor = 16289679;
		enemyLayer.add(enemy);

		// gameUI
		const gameUI = this.add.layer();

		// cursor
		const cursor = this.add.sprite(-48, -48, "Cursor");
		cursor.scaleX = 3;
		cursor.scaleY = 3;
		gameUI.add(cursor);

		// ui_Border
		const ui_Border = this.add.image(640, 360, "UI_Border");
		gameUI.add(ui_Border);

		// ui_iconBox_ammo
		const ui_iconBox_ammo = this.add.image(1176, 648, "UI_IconBox");
		ui_iconBox_ammo.scaleX = 3;
		ui_iconBox_ammo.scaleY = 3;
		gameUI.add(ui_iconBox_ammo);

		// ui_iconBox_health
		const ui_iconBox_health = this.add.image(104, 648, "UI_IconBox");
		ui_iconBox_health.scaleX = 3;
		ui_iconBox_health.scaleY = 3;
		gameUI.add(ui_iconBox_health);

		// ui_Ammo
		const ui_Ammo = this.add.image(1176, 648, "UI_Ammo");
		ui_Ammo.scaleX = 3;
		ui_Ammo.scaleY = 3;
		gameUI.add(ui_Ammo);

		// ui_Health
		const ui_Health = this.add.image(104, 648, "UI_Health");
		ui_Health.scaleX = 3;
		ui_Health.scaleY = 3;
		gameUI.add(ui_Health);

		// healthCounter
		const healthCounter = this.add.bitmapText(184, 648, "smallPixel7", "0/0");
		healthCounter.setOrigin(0, 0.5);
		healthCounter.text = "0/0";
		healthCounter.fontSize = 50;
		healthCounter.dropShadowY = 10;
		gameUI.add(healthCounter);

		// ammoCounter
		const ammoCounter = this.add.bitmapText(1096, 648, "smallPixel7", "0/0");
		ammoCounter.setOrigin(1, 0.5);
		ammoCounter.text = "0/0";
		ammoCounter.fontSize = 50;
		ammoCounter.align = 2;
		ammoCounter.dropShadowY = 10;
		gameUI.add(ammoCounter);

		// scoreText
		const scoreText = this.add.bitmapText(640, 609, "smallPixel7", "SCORE:");
		scoreText.setOrigin(0.5, 0.5);
		scoreText.text = "SCORE:";
		scoreText.fontSize = 40;
		scoreText.align = 1;
		scoreText.dropShadowY = 10;
		gameUI.add(scoreText);

		// scoreCounter
		const scoreCounter = this.add.bitmapText(640, 670, "smallPixel7", "0");
		scoreCounter.setOrigin(0.5, 0.5);
		scoreCounter.text = "0";
		scoreCounter.fontSize = 75;
		scoreCounter.align = 1;
		scoreCounter.dropShadowY = 10;
		gameUI.add(scoreCounter);

		// reloadIndicator
		const reloadIndicator = this.add.bitmapText(640, 128, "smallPixel7", "RELOAD!!!");
		reloadIndicator.setOrigin(0.5, 0.5);
		reloadIndicator.visible = false;
		reloadIndicator.text = "RELOAD!!!";
		reloadIndicator.fontSize = 80;

		// lists
		const enemies = [barfly, bouncer, dust]

		// barfly (components)
		new PushOnClick(barfly);

		// bouncer (components)
		new PushOnClick(bouncer);

		// dust (components)
		new PushOnClick(dust);

		// enemy (components)
		new PushOnClick(enemy);

		this.background = background;
		this.middle = middle;
		this.foreground = foreground;
		this.enemyLayer = enemyLayer;
		this.barfly = barfly;
		this.bouncer = bouncer;
		this.dust = dust;
		this.enemy = enemy;
		this.gameUI = gameUI;
		this.cursor = cursor;
		this.healthCounter = healthCounter;
		this.ammoCounter = ammoCounter;
		this.scoreCounter = scoreCounter;
		this.reloadIndicator = reloadIndicator;
		this.enemies = enemies;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.TileSprite} */
	background;
	/** @type {Phaser.GameObjects.TileSprite} */
	middle;
	/** @type {Phaser.GameObjects.TileSprite} */
	foreground;
	/** @type {Phaser.GameObjects.Layer} */
	enemyLayer;
	/** @type {Phaser.GameObjects.Ellipse} */
	barfly;
	/** @type {Phaser.GameObjects.Ellipse} */
	bouncer;
	/** @type {Phaser.GameObjects.Ellipse} */
	dust;
	/** @type {enemy} */
	enemy;
	/** @type {Phaser.GameObjects.Layer} */
	gameUI;
	/** @type {Phaser.GameObjects.Sprite} */
	cursor;
	/** @type {Phaser.GameObjects.BitmapText} */
	healthCounter;
	/** @type {Phaser.GameObjects.BitmapText} */
	ammoCounter;
	/** @type {Phaser.GameObjects.BitmapText} */
	scoreCounter;
	/** @type {Phaser.GameObjects.BitmapText} */
	reloadIndicator;
	/** @type {Phaser.GameObjects.Ellipse[]} */
	enemies;

	/* START-USER-CODE */

	// Write your code here

	// private enemyArray: {health: number, sprite: Phaser.GameObjects.TileSprite }[] =

	create()
	{

		this.editorCreate();

		/*	TODO: Idea - Zoom the camera in slightly, add a swaying effect with startFollow to give the game juice.
			Hoping to only move the background and not the UI. Unnecessary.
		*/
		// this.cameras.main.setZoom(1.1)
		// this.cameras.main.startFollow(this.cursor, 10, 0.1,0.1);

		// Making enemies interactive so you get feedback from shooting them exclusively.
		this.barfly.setInteractive();
		this.bouncer.setInteractive();
		this.dust.setInteractive();


		/*
		Check if ammo is empty or full, displays text saying "RELOAD!!!" if empty.
		Otherwise, triggers a shake and flash effect, indicating you shot.
		Latter function not working atm. Still shakes the same as before.
		*/
		if (this.ammo > 0)
		{
			this.input.on('pointerdown', function () {

				// this.input.mouse.requestPointerLock();
				this.cameras.main.shake(250, 0.004);
				this.cameras.main.flash(50, 150, 150, 150);
				this.ammo--;
				// this.score = this.score + 10;
			}, this);



		} else if (this.ammo <= 0)	{

			this.input.on('pointerdown', function () {

				// this.input.mouse.requestPointerLock();
				// this.cameras.main.shake(50, 0.001);
				// this.cameras.main.flash(25, 150, 25, 25);
				// this.ammo++;

			}, this);
		}

	}

	update()
	{

		// Parallax Scrolling on the background (for now, just moving to the left slowly).
		this.middle.tilePositionX += 0.1;
		this.foreground.tilePositionX += 0.5;

		// // Checking if player ran out of health. Breaks game for some reason.
		// if (this.isAlive = true) {
		// 	return;
		// } else if (this.isAlive = false) {
		// 	console.log("You're Dead")
		// }

		// Check if ammo is empty, makes reload warning visible on screen.
		if(this.ammo <= 0)
		{
			this.ammo = 0;

			// this.cameras.main.once.shake(50, 0.001);
			// this.cameras.main.once.flash(25, 150, 25, 25);

			this.reloadIndicator.setVisible(true);

		} else {

			this.reloadIndicator.setVisible(false);


		}

		// Updates the health and ammo counter on screen.
		this.healthCounter.setText(['' + this.health + '/' + this.totalHealth + '']);
		this.ammoCounter.setText(['' + this.ammo + '/' + this.totalAmmo + '']);
		this.scoreCounter.setText(['' + this.score + '']);


		// Makes the crosshair follow the mouses position.
		this.input.on('pointermove', function (pointer) {
			this.cursor.x = pointer.x;
			this.cursor.y = pointer.y;

		}, this);

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
