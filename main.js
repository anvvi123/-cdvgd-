img = "";
function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
}
function preload()
{
    img = loadImage('D-02.webp');
}
function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#E6E6FA");
    text("tv", 45, 75);
    noFill();
    stroke("#FF69B4");
    rect(30, 60, 450, 350 );
}