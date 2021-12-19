
// You can write more code here

class bullet extends Phaser.GameObjects.Sprite {
	constructor(scene, frame)
	{
		super(scene, 0, 0, 'Enemy Bullet', frame);

		this.visible = false;
	}
}

class enemy extends Phaser.GameObjects.Sprite {
	constructor(scene, name, x, y)
	{
		super(scene, x, y);

		this.name = name;

		this.setPosition(x, y);

		this.play(this.name + '-idle');

		scene.add.existing(this);

		this.on('animationcomplete', this.animComplete, this);

		this.alive = true;

		this.hp = hp;

		this.timer = scene.time.addEvent({delay: Phaser.Math.Between(1000, 3000), callback: this.fire, callbackScope: this});
	}

	preUpdate (time, delta)
	{
		super.preUpdate(time, delta);
	}

	animComplete (animation)
	{
		if (animation.key === this.name + '-attack')
		{
			this.play(this.name + '-idle');
		}
	}

	damage (amount)
	{
		if (this.hp == 0)
		{
			this.alive = false;

			this.destroy(true);
		}
	}

	fire ()
	{

		if (this.isAlive === true)
		{
			this.play(this.name + '-attack');

			// var offset = (this.name === 'blue') ? 20 : -20;
			// var targetX = (this.name === 'blue') ? target.x + 30 : target.x - 30;

			this.bullet.setPosition(this.x + offset, this.y + 20).setVisible(true);

			this.scene.tweens.add({
				targets: this.bullet,
				scaleX: "*=1.50",
				scaleY: "*=1.50",
				ease: 'Expo.easeIn',
				duration: 1000,
				onComplete: function (tween, targets) {
					targets[0].setVisible(false);
				}
			});

			this.health(Phaser.Math.Between(2, 8));

			this.timer = this.scene.time.addEvent({ delay: Phaser.Math.Between(1000, 3000), callback: this.fire, callbackScope: this });
		}
	}
}

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

		// environment
		const environment = this.add.container(1584, 0);

		// building1_png
		const building1_png = this.add.image(-96, 440, "atlas-environment", "building1.png");
		building1_png.scaleX = 2;
		building1_png.scaleY = 2;
		building1_png.setOrigin(0.5, 1);
		environment.add(building1_png);

		// building2_png
		const building2_png = this.add.image(296, 440, "atlas-environment", "building2.png");
		building2_png.scaleX = 2;
		building2_png.scaleY = 2;
		building2_png.setOrigin(0.5, 1);
		environment.add(building2_png);

		// building3_png
		const building3_png = this.add.image(680, 440, "atlas-environment", "building3.png");
		building3_png.scaleX = 2;
		building3_png.scaleY = 2;
		building3_png.setOrigin(0.5, 1);
		environment.add(building3_png);

		// building4_png
		const building4_png = this.add.image(968, 440, "atlas-environment", "building4.png");
		building4_png.scaleX = 2;
		building4_png.scaleY = 2;
		building4_png.setOrigin(0.5, 1);
		environment.add(building4_png);

		// building5_png
		const building5_png = this.add.image(1280, 440, "atlas-environment", "building5.png");
		building5_png.scaleX = 2;
		building5_png.scaleY = 2;
		building5_png.setOrigin(0.5, 1);
		environment.add(building5_png);

		// enemyLayer
		const enemyLayer = this.add.container(680, 520);

		// dust
		const dust = this.add.sprite(124.41930348109281, 0.04628138898311818, "atlas-enemy", "dust1.png");
		dust.scaleX = 3;
		dust.scaleY = 3;
		dust.setOrigin(0.5, 1);
		enemyLayer.add(dust);

		// bouncer
		const bouncer = this.add.sprite(-3.580696518907189, 0.04628138898311818, "atlas-enemy", "bouncer1.png");
		bouncer.scaleX = 3;
		bouncer.scaleY = 3;
		bouncer.setOrigin(0.5, 1);
		enemyLayer.add(bouncer);

		// barfly
		const barfly = this.add.sprite(-139.5806965189072, 0.04628138898311818, "atlas-enemy", "barfly1.png");
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

		// lists
		const enemies = [barfly, bouncer, dust]

		// dust (components)
		new PushOnClick(dust);

		// bouncer (components)
		new PushOnClick(bouncer);

		// barfly (components)
		new PushOnClick(barfly);

		this.background = background;
		this.middle = middle;
		this.foreground = foreground;
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
		this.enemies = enemies;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.TileSprite} */
	background;
	/** @type {Phaser.GameObjects.TileSprite} */
	middle;
	/** @type {Phaser.GameObjects.TileSprite} */
	foreground;
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
	/** @type {Phaser.GameObjects.Sprite[]} */
	enemies;

	/* START-USER-CODE */

	// Write your code here

	// private enemyArray: {health: number, sprite: Phaser.GameObjects.TileSprite }[] =

	create()
	{

		this.editorCreate();

		// Making enemies interactive so you get feedback from shooting them exclusively.
		this.barfly.setInteractive();
		this.bouncer.setInteractive();
		this.dust.setInteractive();

		/*
		Check if ammo is empty or full, displays text saying "RELOAD!!!" if you're empty.
		Otherwise, triggers a shake and flash effect, indicating you shot.
		*/
		this.input.on('pointerdown', function (pointer) {

			// Shoots gun, shaking the screen and flashing to show feedback
			if (pointer.leftButtonDown() && this.ammo > 0)
			{
				this.reloadIndicator.setVisible(false);
				this.cameras.main.shake(250, 0.004);
				this.cameras.main.flash(50, 150, 150, 150);
				this.ammo--;
				this.score = this.score + 50;
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

		// Spawns enemies random from the right?


		// Shoot at enemy to damage them.

	}

	update()
	{

		// Parallax Scrolling on the background (for now, just moving to the left slowly).
		this.middle.tilePositionX += 0.1;
		this.foreground.tilePositionX += 0.5;

		this.environment.x -= 0.7;

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
