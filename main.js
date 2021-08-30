song1 = "";
song2 = "";

function preload() 
{
    song1 = loadSound('Lady Gaga - Rain On Me (Lyrics) feat. Ariana Grande.mp3');
    song2 = loadSound('BLACKPINK - How You Like That.mp3');
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function play()
{
    song.play();
}

function draw()
{
    image(video, 0, 0, 600, 500);
    
}