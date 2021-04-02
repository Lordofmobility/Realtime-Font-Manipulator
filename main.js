function setup() {
    canvas = createCanvas(550, 450);
    canvas.position(560, 5);

    video = createCapture(VIDEO)
    video.size(550, 500)

    posenet = ml5.poseNet(video, modelLoaded)
    posenet.on("pose", gotPoses)
}

function draw() {
    background("grey")
}

function modelLoaded() {
    console.log("Model loaded");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
    }
}