song="";

function setup()
{
  canvas=createCanvas(600,480);
  canvas.center();
  video=createCapture(VIDEO);
  video.hide()
}

function draw()
{
   image(video, 0 , 0 , 600 , 480);
}

function preload()
{
 song=loadSound("music.mp3");
}

function play()
{
    song.play();
}