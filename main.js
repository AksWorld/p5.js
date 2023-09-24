var img1;
function preload(){
}
function setup(){
    canvas=createCanvas(600,400);
    //background(255, 154, 138);
   // background('#FFDCA2');
   //background('#68c0e862');

   background('#2096cd62');


    canvas.position(270,200);
    img1= loadImage('HB1.jpeg');
    img2= loadImage('BG3.jpg');
    video=createCapture(VIDEO);
    video.hide();


}

function draw(){
    image(video,140,100,320,200);
    rect(80,22.5,440,45);
    rect(32.5,70,45,260);
    image(img2,32.5,70,45,260);
    image(img2,80,22.5,440,45);
    rect(30, 20, 50, 50);
    image(img1,30,20,50,50);
    rect( 520, 20, 50, 50);
    image(img1,520,20,50,50);
    rect(80,332.5,440,45);
    image(img2,80,332.5,440,45);
    rect(522.5,70,45,260);
    image(img2,522.5,70,45,260);
    rect(30,330,50,50);
    image(img1,30,330,50,50);
    rect(520,330,50,50);
    image(img1,520,330,50,50);
    

    
}
function take_memory(){
    save('birthday.png');
}