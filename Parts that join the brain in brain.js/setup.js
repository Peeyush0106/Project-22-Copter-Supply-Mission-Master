function preload() {
    helicopterImage = loadImage(CopterImagePath);
    packImage = loadImage(PackageImagePath);
}

function setup() {
    createCanvas(800, 700);

    engine = Engine.create();

    world = engine.world;

    pack_options = {
        restitution: 0.6,
        isStatic: true,
        friction : 1
    }

    ground_options = {
        isStatic: true
    }

    copter_options = {
        isStatic: true
    }
        
    // In the following three objects the center X and center Y is being used.
    copter = Bodies.rectangle(-300, 200, 100, 70, copter_options);
    
    pack = Bodies.circle(700, 200, 80, pack_options);
    
    ground = Bodies.rectangle(0, 600, 1600, 300, ground_options);
        
    packObj = new Shape(pack.position.x, pack.position.y, null, null, 80, "red", false);
    
    copterObj = new Shape(copter.position.x, copter.position.y, 100, 70, null, "white", false);
    
    packImage.width = 80;
    packImage.height = 80;
    
    Engine.run(engine);
    
    World.add(world, ground);
    World.add(world, pack);
    World.add(world, copter);
}