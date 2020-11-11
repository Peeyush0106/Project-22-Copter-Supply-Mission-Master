// These first three functions are just to shorten the function name.

// Check which key is pressed
function keyPressedDown(key) {
    if (keyDown(key)) {
        return true;
    }
}

// Drop the object down
function dropObject(object) {
    Matter.Body.setStatic(object, false);
}

// Console the logs with a smaller name
function print(logs) {
    console.log(logs);
}

// Display Objects and Images
function displayImagesAndObjects() {
    ellipseMode(CENTER);
    rectMode(CENTER);
    imageMode(CENTER);

    packImage.width = 80;
    packImage.height = 80;
    groundImage.height = 100;
    groundImage.width = 1600;
    packImage.scale = 0.6;
    copterImage.scale = 2;

    image(groundImage, groundImageX, groundImageY);
    image(packImage, packImageX, packImageY);
    image(copterImage, copterImageX, copterImageY);

    print(copter.position.x);
}

// Set the Object and Image properties
function setProperties() {
    setObjectMovementProperties();
    setImagePositionProperties();
}

// Move objects and set the velocities
function setObjectMovementProperties() {
    copter.position.y = 150;
    Matter.Body.setVelocity(copter, copter_speed);
    if (keyPressedDown(DOWN_ARROW)) {
        dropObject(pack);
    }
}

// Declare image positions
function setImagePositionProperties() {
    groundImageX = ground.position.x;
    groundImageY = ground.position.y;

    copterImageX = copter.position.x;
    copterImageY = copter.position.y;

    if (pack.position.y < 210) packImageX = copter.position.x;

    packImageY = pack.position.y + 50;
}

// function restartGame() {
//     Matter.Body.setStatic(pack, true);
//     pack.position.y = 100;
//     print(pack.position.y);
//     copter.position.x = -30;
//     print(copter.position.x);
//     gameShouldRestart = false;
// }

// function checkRestartGameConditions() {
//     if (keyPressedDown("r")) {
//         gameShouldRestart = true;
//     }
// }

function isTouching(toucher, gotTouched) {
    if (
        (gotTouched.position.x - toucher.position.x) <= (gotTouched.width + toucher.width) / 2

        && (toucher.position.x - (gotTouched.position.x) <= (gotTouched.width + toucher.width) / 2)

        && ((gotTouched.position.y - toucher.position.y) <= (gotTouched.height + toucher.height) / 2)

        && ((toucher.position.y - gotTouched.position.y) <= (gotTouched.height + toucher.height) / 2)) {
        return true;
    }
}