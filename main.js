status = ""
video = ""

function preload(){
    video = createVideo("video.mp4")
    video.hide()
}

function setup(){
    canvas = createCanvas(480,380)
    canvas.center()
}
function modelLoaded(){
    console.log("model loaded")
    status=true;
    video.loop()
    video.speed(16)
    video.volume(1)
}
function draw(){
    image(video,0,0,480,380)
}
function start(){
    objectDetector = ml5.objectDetector('cocossd',modelLoaded)
    document.getElementById("status").innerHTML = "status:detecting object"
}