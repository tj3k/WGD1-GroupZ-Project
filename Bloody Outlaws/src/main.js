
window.addEventListener('load', function () {

	var game = new Phaser.Game({
		width: 1280,
		height: 720,
		type: Phaser.AUTO,
		parent: 'canvas-container',
		pixelArt: true,
		physics: {
			default: 'arcade',
			arcade: {
				debug: false
			}
		},
        backgroundColor: "#242424",
		scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
		},
	});
	
	game.scene.add("Preload", Preload);
	game.scene.add("titleScreen", titleScreen);
	game.scene.add("Level1", Level1);
	game.scene.add("Boot", Boot, true);
});

class Boot extends Phaser.Scene {

	preload() {
		
		this.load.pack("pack", "assets/preload-asset-pack.json");

		this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("Preload"));
	}
}