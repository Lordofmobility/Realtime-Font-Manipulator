nose_x = 0
nose_y = 0
left_wrist_x = 0
right_wrist_x = 0
difference = 0

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
    textSize(difference)
    fill("0, 0, 255")
    text("Ishan",)
    document.getElementById("square_side").innerHTML = "The size of the text will be " + difference
}

function modelLoaded() {
    console.log("Model loaded");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        nose_x = results[0].pose.nose.x
        nose_y = results[0].pose.nose.y
        console.log("Nose x = " + nose_x + ", Nose y = " + nose_y);
        left_wrist_x = results[0].pose.leftWrist.x
        right_wrist_x = results[0].pose.rightWrist.x
        difference = floor(left_wrist_x - right_wrist_x)
        console.log("Left Wrist x = " + left_wrist_x + ", Right Wrist x = " + right_wrist_x);
        console.log(difference);
    }
}