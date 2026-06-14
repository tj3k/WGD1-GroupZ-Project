
// You can write more code here

/** TODO:
 * Attempt at importing classes.
 * Clashing with scene class.
 * Generally not working anywhere.
 */

// import {Enemy} from "../classes/enemy";

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

		// Enemy Variable
		this.lastSpawned = 2000;

		this.barflyHP = 2;
		this.dustHP = 1;
		this.bouncerHP = 4;

		// this.spawnTimer = scene.time.addEvent({delay: Phaser.Math.Between(1000, 3000), callback: this.spawnEnemy, callbackScope: this});

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

		// buildings
		const buildings = this.add.tileSprite(184, 248, 2238, 404, "buildings-tileSprite");

		// environment
		const environment = this.add.container(1584, 0);
		environment.visible = false;

		// building1_png
		const building1_png = this.add.image(-96, 440, "atlas-environment", "building1.png");
		building1_png.scaleX = 2;
		building1_png.scaleY = 2;
		building1_png.setOrigin(0.5, 1);
		environment.add(building1_png);

		// building2_png
		const building2_png = this.add.image(424, 440, "atlas-environment", "building2.png");
		building2_png.scaleX = 2;
		building2_png.scaleY = 2;
		building2_png.setOrigin(0.5, 1);
		environment.add(building2_png);

		// building3_png
		const building3_png = this.add.image(928, 440, "atlas-environment", "building3.png");
		building3_png.scaleX = 2;
		building3_png.scaleY = 2;
		building3_png.setOrigin(0.5, 1);
		environment.add(building3_png);

		// building4_png
		const building4_png = this.add.image(1264, 440, "atlas-environment", "building4.png");
		building4_png.scaleX = 2;
		building4_png.scaleY = 2;
		building4_png.setOrigin(0.5, 1);
		environment.add(building4_png);

		// building5_png
		const building5_png = this.add.image(1672, 440, "atlas-environment", "building5.png");
		building5_png.scaleX = 2;
		building5_png.scaleY = 2;
		building5_png.setOrigin(0.5, 1);
		environment.add(building5_png);

		// enemyLayer
		const enemyLayer = this.add.container(11.867828044274347, 544);

		// dust
		const dust = this.add.sprite(1596, 0, "atlas-enemy", "dust1.png");
		dust.scaleX = 3;
		dust.scaleY = 3;
		dust.setOrigin(0.5, 1);
		enemyLayer.add(dust);

		// bouncer
		const bouncer = this.add.sprite(1540, 0, "atlas-enemy", "bouncer1.png");
		bouncer.scaleX = 3;
		bouncer.scaleY = 3;
		bouncer.setOrigin(0.5, 1);
		enemyLayer.add(bouncer);

		// barfly
		const barfly = this.add.sprite(1372, 0, "atlas-enemy", "barfly1.png");
		barfly.scaleX = 3;
		barfly.scaleY = 3;
		barfly.setOrigin(0.5, 1);
		enemyLayer.add(barfly);

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

		// dust (components)
		new PushOnClick(dust);

		// bouncer (components)
		new PushOnClick(bouncer);

		// barfly (components)
		new PushOnClick(barfly);

		this.background = background;
		this.middle = middle;
		this.foreground = foreground;
		this.buildings = buildings;
		this.environment = environment;
		this.enemyLayer = enemyLayer;
		this.dust = dust;
		this.bouncer = bouncer;
		this.barfly = barfly;
		this.gameUI = gameUI;
		this.cursor = cursor;
		this.healthCounter = healthCounter;
		this.ammoCounter = ammoCounter;
		this.scoreCounter = scoreCounter;
		this.reloadIndicator = reloadIndicator;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.TileSprite} */
	background;
	/** @type {Phaser.GameObjects.TileSprite} */
	middle;
	/** @type {Phaser.GameObjects.TileSprite} */
	foreground;
	/** @type {Phaser.GameObjects.TileSprite} */
	buildings;
	/** @type {Phaser.GameObjects.Container} */
	environment;
	/** @type {Phaser.GameObjects.Container} */
	enemyLayer;
	/** @type {Phaser.GameObjects.Sprite} */
	dust;
	/** @type {Phaser.GameObjects.Sprite} */
	bouncer;
	/** @type {Phaser.GameObjects.Sprite} */
	barfly;
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

	/* START-USER-CODE */

	// Write your code here

	create()
	{

		this.health = this.totalHealth;
		this.ammo = this.totalAmmo;
		this.score = 0;

		this.editorCreate();

		// const e_barfly = new enemy(this,'barfly',450,500)
		// this.add.existing(this.enemies)

		// this.enemies = this.physics.add.group({
		// 	classType: Enemy,
		// 	maxSize: 3,
		// 	runChildUpdate: true
		// });

		// if (this.spawnTimer = 0)
		// {
		// 	let barfly = this.add.sprite(-240, 0, "atlas-enemy", "barfly1.png").setInteractive();
		// }

		// Making enemies interactive so you get feedback from shooting them exclusively.
		this.barfly.setInteractive();
		this.bouncer.setInteractive();
		this.dust.setInteractive();

		// this.en_barfly = this.add.sprite(1300,500, "atlas-enemy", "barfly1.png");
		// this.en_bouncer = this.add.sprite(1400, 500, "atlas-enemy", "bouncer1.png");
		// this.en_dust = this.add.sprite(1350, 500, "atlas-enemy", "dust1.png");
		//
		// this.en_barfly.setScale(3).setInteractive();
		// this.en_bouncer.setScale(3).setInteractive()
		// this.en_dust.setScale(3).setInteractive()

		this.input.on('gameobjectdown', this.hurtEnemy, this);

		let timedEvent = this.time.addEvent({ delay: 2500, callback: hurtPlayer, callbackScope: this, loop: true });


		// Hurts the player
		function hurtPlayer() {
			this.cameras.main.shake(500, 0.005);
			this.cameras.main.flash(250, 180, 50, 50);
			this.health = this.health - 1;

			if (this.health == 0)
			{
				this.isAlive = false;
				this.health == 0;
				this.scene.start("sceneGameOver")
			}
		}


		this.enemies = this.physics.add.group();

		var maxEnemies = 20;
		for (var i = 0; i <= maxEnemies; i++)
		{
			var pbarfly = this.physics.add.sprite(0, 0, "atlas-enemy", "barfly1.png").setScale(3).setInteractive().setOrigin(0.5, 1);
			this.enemies.add(pbarfly);
			var pbouncer = this.physics.add.sprite(0, 0, "atlas-enemy", "bouncer1.png").setScale(3).setInteractive().setOrigin(0.5, 1);
			this.enemies.add(pbouncer);
			var pdust = this.physics.add.sprite(0, 0, "atlas-enemy", "dust1.png").setScale(3).setInteractive().setOrigin(0.5, 1);
			this.enemies.add(pdust);
		}


		/** TODO:
		 * Attempting to spawn new enemy/barfly.
		 * I should make enemy class easier so I shouldn't have to use and extension of it and still use the correct sprites.
		 * This is where the game crashes. Simply comment the line out for the game to load normally.
		 */
		// this.enemies.push(new barfly(this, 1000, 500));

		// this.enemies.push(new Enemy(this, 'barfly', 6, 4, 1000, 500));

		// let barfly = new Enemy(this, 'barfly', 6, 4, 700,200);

		// this.barfly.once('destroy', function (pointer)
		// {
		// 	this.reloadIndicator.setVisible(true);
		// }, this);

		// this.barfly.on('pointerdown', function (pointer)
		// {
		// 	this.destroy();
		// }, this);


		/*
		Check if ammo is empty or full, displays text saying "RELOAD!!!" if you're empty.
		Otherwise, triggers a shake and flash effect, indicating you shot.
		*/
		this.input.on('pointerdown', function (pointer, gameObject) {

			// Shoots gun, shaking the screen and flashing to show feedback
			if (pointer.leftButtonDown() && this.ammo > 0)
			{
				this.reloadIndicator.setVisible(false);
				this.cameras.main.shake(250, 0.004);
				this.cameras.main.flash(50, 150, 150, 150);
				// this.barfly.destroy();
				// this.score = this.score + 50;
			}

			// Shakes/flashes the screen different when out of ammo.
			else if (pointer.leftButtonDown() && this.ammo <= 0)
			{
				this.ammo = 0;
				this.score === this.score;
				this.reloadIndicator.setVisible(true);
				this.cameras.main.shake(50, 0.001);
				this.cameras.main.flash(25, 150, 150, 25);
			}

			// Reloads gun by one when clicking the right mouse button
			else if (pointer.rightButtonDown() && this.ammo < this.totalAmmo)
			{
				this.ammo++;
			}

			// If the ammo is full/equal to totalAmmo, nothing happens.
			else if (pointer.rightButtonDown() && this.ammo == this.totalAmmo)
			{
				this.ammo = this.ammo;
			}

		}, this);

	}

	// timedEvent = this.time.addEvent({ delay: 3000, callback: hurtPlayer, callbackScope: this, loop: true });

	// Checks gameObject for what kind and then tries to spawn a new sprite of the same name.
	spawnEnemy(gameObject)
	{
		if (gameObject == this.barfly)
		{
			const barfly = this.add.sprite(1372, 0, "atlas-enemy", "barfly1.png");
			barfly.scaleX = 3;
			barfly.scaleY = 3;
			barfly.setOrigin(0.5, 1);
			this.enemyLayer.add(gameObject);
			this.gameObject.setInteractive();
		}
		else if (gameObject == this.bouncer)
		{
			// bouncer
			const bouncer = this.add.sprite(1540, 0, "atlas-enemy", "bouncer1.png");
			bouncer.scaleX = 3;
			bouncer.scaleY = 3;
			bouncer.setOrigin(0.5, 1);
			this.enemyLayer.add(gameObject);
			this.gameObject.setInteractive();
		}
		else if (gameObject == this.dust)
		{
			const dust = this.add.sprite(1596, 0, "atlas-enemy", "dust1.png");
			dust.scaleX = 3;
			dust.scaleY = 3;
			dust.setOrigin(0.5, 1);
			this.enemyLayer.add(gameObject);
			this.gameObject.setInteractive();
		}
	}

	// Moves enemy to the right slowly.
	moveEnemy(enemy, speed)
	{
		enemy.x -= speed;

		if (enemy.x < -60)
		{
			this.resetEnemyPos(enemy);
		}
	}

	// Resets enemy when they are outside the world.
	resetEnemyPos(enemy)
	{
		enemy.x = 1400;
	}

	// Destroys enemy on click and gives player specific score based on enemy.
	// Will also run an enemy spawner function.
	hurtEnemy(pointer, gameObject)
	{
		// If Barfly had no health and you had ammo
		if (gameObject == this.barfly && this.ammo > 0 && this.barflyHP <= 0)
		{
			this.reloadIndicator.setVisible(false);
			this.cameras.main.shake(250, 0.004);
			this.cameras.main.flash(50, 150, 150, 150);
			this.ammo--;
			// gameObject.destroy()
			this.score = this.score + 25;
			this.barflyHP = 2
			this.resetEnemyPos(gameObject)
		}
		// If Barfly had health but you had no ammo
		else if (gameObject == this.barfly && this.ammo <= 0 && this.barflyHP > 0){
			this.ammo = 0;
			this.score === this.score;
			this.reloadIndicator.setVisible(true);
			this.cameras.main.shake(50, 0.001);
			this.cameras.main.flash(25, 150, 150, 25);
		}
		// If Barfly had health and you had ammo
		else if (gameObject == this.barfly && this.ammo > 0 && this.barflyHP > 0)
		{
			this.reloadIndicator.setVisible(false);
			this.cameras.main.shake(250, 0.004);
			this.cameras.main.flash(50, 150, 150, 150);
			this.ammo--;
			this.barflyHP--;
			this.score = this.score + 5;
		}


		// Same thing for Bouncer and dust after
		if (gameObject == this.bouncer && this.ammo > 0 && this.bouncerHP <= 0)
		{
			this.reloadIndicator.setVisible(false);
			this.cameras.main.shake(250, 0.004);
			this.cameras.main.flash(50, 150, 150, 150);
			this.ammo--;
			// gameObject.destroy()
			this.score = this.score + 50;
			this.bouncerHP = 4
			this.resetEnemyPos(gameObject);
		}
		// If bouncer had health but you had no ammo
		else if (gameObject == this.bouncer && this.ammo <= 0 && this.bouncerHP > 0){
			this.ammo = 0;
			this.score === this.score;
			this.reloadIndicator.setVisible(true);
			this.cameras.main.shake(50, 0.001);
			this.cameras.main.flash(25, 150, 150, 25);
		}
		// If bouncer had health and you had ammo
		else if (gameObject == this.bouncer && this.ammo > 0 && this.bouncerHP > 0)
		{
			this.reloadIndicator.setVisible(false);
			this.cameras.main.shake(250, 0.004);
			this.cameras.main.flash(50, 150, 150, 150);
			this.ammo--;
			this.bouncerHP--;
			this.score = this.score + 5;
		}


		if (gameObject == this.dust && this.ammo > 0 && this.dustHP <= 0)
		{
			this.reloadIndicator.setVisible(false);
			this.cameras.main.shake(250, 0.004);
			this.cameras.main.flash(50, 150, 150, 150);
			this.ammo--;
			// gameObject.destroy()
			this.score = this.score + 10;
			this.dustHP = 1
			this.resetEnemyPos(gameObject);
		}
		// If dust had health but you had no ammo
		else if (gameObject == this.dust && this.ammo <= 0 && this.dustHP > 0){
			this.ammo = 0;
			this.score === this.score;
			this.reloadIndicator.setVisible(true);
			this.cameras.main.shake(50, 0.001);
			this.cameras.main.flash(25, 150, 150, 25);
		}
		// If dust had health and you had ammo
		else if (gameObject == this.dust && this.ammo > 0 && this.dustHP > 0)
		{
			this.reloadIndicator.setVisible(false);
			this.cameras.main.shake(250, 0.004);
			this.cameras.main.flash(50, 150, 150, 150);
			this.ammo--;
			this.dustHP--;
			this.score = this.score + 5;
		}
	}



	update()
	{

		// Parallax Scrolling on the background (for now, just moving to the left slowly).
		this.middle.tilePositionX += 0.1;
		this.foreground.tilePositionX += 0.5;
		this.buildings.tilePositionX += 0.7;

		// Moving the enemies
		this.moveEnemy(this.barfly, 1.2);
		this.moveEnemy(this.bouncer, 0.8);
		this.moveEnemy(this.dust, 2);



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

		// Removes the computers cursor so you don't have 2 cursors in-game.
		let canvas = this.sys.canvas;
		canvas.style.cursor = 'none';


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
