status = "";

function setup() {
    canvas = createCanvas( 350, 257);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350,257);
    video.hide();
  }

function preload(){

}

function draw(){
    image(video, 0, 0, 350, 257);
}

function start(){
    objectDetector = ml5.objectDetector("cocosd", modelLoaded);
}

function modelLoaded(){
    console.log("Model loaded successfully!");
    status = true;
}