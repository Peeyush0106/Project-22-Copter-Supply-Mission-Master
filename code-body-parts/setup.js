function preload() {
    copterImage = loadImage(CopterImagePath);
    packImage = loadImage(PackageImagePath);
    groundImage = loadImage(GroundImagePath);
}

function setup() {
    createCanvas(800, 600);

    engine = Engine.create();
    world = engine.world;

    gameShouldRestart = false;
    
    // Object speeds
    copter_speed = {
        x: 4,
        y: 0
    }

    // Options for objects
    pack_options = {
        restitution: 0.6,
        isStatic: true,
        friction: 1
    }
    ground_options = {
        isStatic: true
    }
    copter_options = {
        isStatic: true
    }

    copter = Bodies.rectangle(-300, 150, 100, 70);
    pack = Bodies.circle(700, 100, 40, pack_options);
    ground = Bodies.rectangle(400, 550, 1600, 100, ground_options
    );

    Engine.run(engine);

    World.add(world, ground);
    World.add(world, pack);
    World.add(world, copter);
}