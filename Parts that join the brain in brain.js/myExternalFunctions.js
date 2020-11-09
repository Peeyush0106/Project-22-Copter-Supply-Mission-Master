function keyPressed() {
    if (keyCode === DOWN_ARROW) {
        Matter.Body.setStatic(pack, false);
        print("Down Arrow");
    }
}

function print(logs) {
    console.log(logs);
}

function displayImagesObjectsAndTexts() {
    copterObj.display();
    packObj.display();

    text("MouseX: " + mouseX, 500, 250);
    text("MouseY: " + mouseY, 500, 450);

    // rectMode(CENTER);
    ellipseMode(CENTER);

    rect(ground.position.x, ground.position.y, 1600, 100);

    // rect(copter.position.x, copter.position.y, copterObj.width, copterObj.height);

    // fill("white");

    // rect(copterObj.centerX, copterObj.centerY, copterObj.width, copterObj.height);
    rect((copterObj.centerX - (packImage.width / 2)), (copterObj.topY), copterObj.width, copterObj.height);

    fill("white");
    ellipse(packObj.leftX, packObj.topY, 80);

    fill("red");
    ellipse(pack.position.x, pack.position.y, 80);

    packObj.displayImage(packImage, packImageX, packImageY, 0.6, null, null);

    // copterObj.displayImage(helicopterImage, helicopterImageX, helicopterImageY, 2, null, null);
}

function setProperties() {
    // Set the velocities
    copter.position.x += 7;
    // pack.position.x += 7;

    // Declare object axises
    copterObj.centerX = copter.position.x;
    copterObj.centerY = copter.position.y;
    packObj.setShapeContinuousProperties();

    packObj.centerX = pack.position.x;
    packObj.centerY = pack.position.y;

    // ground.position.x -= 7;
    Matter.Body.setAngularVelocity(ground, 0.2)
    // if (ground.position.x <= -700) {
    //     ground.position.x = 0;
    // }

    // Declare image positions
    helicopterImageX = copterObj.centerX - (helicopterImage.width / 2);
    helicopterImageY = copterObj.centerY - (helicopterImage.height / 2);

    packImageY = packObj.topY;

    if (pack.position.y < 210) {
        packImageX = copterObj.centerX - (copterObj.width / 2);
    }
    else {
        packImageX -= 4;
    }

    // Work with the falling of package.
    // if (keyDown(DOWN_ARROW)) {
    // Matter.Body.setStatic(pack, false);
    // }
    // else if(keyWentDown(DOWN_ARROW)){
    //     packageFallX = pack.position.x;
    // }
}