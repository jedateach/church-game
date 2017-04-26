window.onload = function() {

		var game = new Phaser.Game(
			window.innerWidth, window.innerHeight, Phaser.AUTO, '', 
			{ 
				preload: preload,
				create: create,
				update: update,
				render: render 
		});

		function preload () {
				game.load.image('churchlogo', 'images/church.png');
				game.load.spritesheet('player', 'images/characters.png', 16, 16);
		}

		var player;
		var walkFps = 10;

		function create () {

				var church = game.add.sprite(game.world.centerX, game.world.centerY, 'churchlogo');
				church.anchor.setTo(0.5, 0.5);
				church.scale.setTo(0.2);

				player = game.add.sprite(game.world.centerX / 2, game.world.centerY, 'player');
				player.scale.setTo(2);
				player.animations.add('walk_down', [3, 4, 5, 4]);
				player.animations.add('walk_left', [15, 16, 17, 16]);
				player.animations.add('walk_up', [39, 40, 41, 40]);
				player.animations.add('walk_right', [27, 28, 29, 28]);
				player.animations.play('walk_down');
		}

		function update() {

			if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
			{
					player.x -= 4;
					player.animations.play('walk_left', walkFps, true);
			}
			else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
			{
					player.x += 4;
					player.animations.play('walk_right', walkFps, true);
			}

			if (game.input.keyboard.isDown(Phaser.Keyboard.UP))
			{
					player.y -= 4;
					player.animations.play('walk_up', walkFps, true);
			}
			else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN))
			{
					player.y += 4;
					player.animations.play('walk_down', walkFps, true);
			}
			else {
				// player.animations.stop();
			}

	}

	function render () {
		game.debug.inputInfo(32, 32);
	}

};
