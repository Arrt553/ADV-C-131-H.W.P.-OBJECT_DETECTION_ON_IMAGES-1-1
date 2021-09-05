var img = "";
function preload(){
    img = loadImage("bedroom.jpg");
}
function setup(){
    canvas = createCanvas(350,250);
    canvas.center();

}
function draw(){
    image(img,0,0,650,450);
    fill("#0303fc");
    text("Photo Frame",45,25);
    noFill();
    stroke("#fc0303");
    rect(20,3,120,100);

    fill("#213fff");
    text("Photo Frame",175,40);
    noFill();
    stroke("#0303fc"); 
    rect(170,26,150,200);
}

function back(){
    window.alert("Do you really want to go back to the homepage?");
    window.location = "homepage.html";
}