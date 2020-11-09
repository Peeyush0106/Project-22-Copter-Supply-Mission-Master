const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
// Some images' file Paths
const CopterImagePath = "Parts that join the brain in brain.js/helicopter.png";
const PackageImagePath = "Parts that join the brain in brain.js/package.png";

var world, engine;
var ground, groundObj, copterObj, packObj;
var pack_options, ground_options, copter_options;

var helicopterImage, helicopterImageX, helicopterImageY, packImage, packImageX, packImageY;

var packageFallX;