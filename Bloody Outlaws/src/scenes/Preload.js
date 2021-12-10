
// You can write more code here

/* START OF COMPILED CODE */

class Preload extends Phaser.Scene {

	constructor() {
		super("Preload");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorPreload() {

		this.load.pack("asset-pack", "assets/asset-pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// chamber
		const chamber = this.add.sprite(640, 320, "UI_Chamber");
		chamber.scaleX = 6;
		chamber.scaleY = 6;

		// progressBITMAP
		const progressBITMAP = this.add.bitmapText(640, 496, "smallPixel7", "0%");
		progressBITMAP.setOrigin(0.5, 0.5);
		progressBITMAP.text = "0%";
		progressBITMAP.fontSize = 80;

		// progressBITMAP (components)
		new PreloadText(progressBITMAP);

		this.chamber = chamber;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Sprite} */
	chamber;

	/* START-USER-CODE */

	// Write your code here

	preload() {

		this.editorCreate();

		this.editorPreload();

		// Attempted to use smallPixel7 font for loading. Not Working.
		// new PreloadText(progress2);

		this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("titleScreen"));
	}

	update() {

		this.chamber.rotation += 0.02;
		// 

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
