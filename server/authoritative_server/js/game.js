const config = {
    type: Phaser.HEADLESS,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    physics: {
      default: 'arcade',
      arcade: {
        debug: false,
        gravity: { y: 0 }
      }
    },
    scene: {
      preload: preload,
      create: create,
      update: update
    },	
    autoFocus: false
  };
   
  function preload() {
    this.load.image('rabbit', 'assets/space_rabbit.jpg');
  }
   
  function create() {
    io.on('connection', function (socket) {
      console.log('a user connected');
      socket.on('disconnect', function () {
        console.log('user disconnected');
      });
    });
  }
   
  function update() {}
   
  const game = new Phaser.Game(config);

  window.gameLoaded();