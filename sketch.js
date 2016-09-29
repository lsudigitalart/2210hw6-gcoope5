var img;
var img1;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var img8;
var img9;
var img10;
var img11;
var img12;
var img13;
var img14;
var img15;
var img16;
var img17;
var img18;
var img19;
var img20;
var img21;
var img22;

// var maxImages = 23;
// var imageIndex = 0;
//
// var images = new Array(maxImages);

var r = 0;
var s = 0;
var t = 0;
//
//
function preload() {

  // for(var i = 0; i < images.length; i ++) {
    // images[i] = loadImage("poke fusions" + i + ".png");
  img = loadImage("poke fusions/149.42.png");
  img1 = loadImage("poke fusions/4.120.png");
  img2 = loadImage("poke fusions/7.76.png");
  img3 = loadImage("poke fusions/9.118.png");
  img4 = loadImage("poke fusions/31.126.png");
  img5 = loadImage("poke fusions/53.130.png");
  img6 = loadImage("poke fusions/63.95.png");
  img7 = loadImage("poke fusions/76.100.png");
  img8 = loadImage("poke fusions/79.99.png");
  img9 = loadImage("poke fusions/83.107.png");
  img10 = loadImage("poke fusions/85.55.png");
  img11 = loadImage("poke fusions/100.90.png");
  img12 = loadImage("poke fusions/104.99.png");
  img13 = loadImage("poke fusions/123.62.png");
  img14 = loadImage("poke fusions/128.10.png");
  img15 = loadImage("poke fusions/135.29.png");
  img16 = loadImage("poke fusions/143.123.png");
  img17 = loadImage("poke fusions/144.139.png");
  img18 = loadImage("poke fusions/147.150.png");
  img19 = loadImage("poke fusions/149.41.png");
  img20 = loadImage("poke fusions/149.123.png");
  img21 = loadImage("poke fusions/150.103.png");
  img22 = loadImage("poke fusions/slime duck.png");
}
function setup(){
  createCanvas(1200,1200);
  background(0,10);
  rectMode(CENTER);
  angleMode(DEGREES);
  smooth();

}

function draw(){
  background(0, 10);

  stroke(250,250,250,100);

  s=s + 0.001;
  t= t + 0.01;
  translate(width/2, height/2);
  rotate(r);


  if (s > 0.01)
{
  r = r + 1;

     image(img);
     rotate(r);
     scale(s);


  image(img1);
  rotate(r);
  scale(s);

  image(img2);
  rotate(r);
  scale(s);

  image(img3);
  rotate(r);
  scale(s);

  image(img4);
  rotate(r);
  scale(s);

  image(img5);
  rotate(r);
  scale(s);

  image(img6);
  rotate(r);
  scale(s);

  image(img7);
  rotate(r);
  scale(s);

  image(img8);
  rotate(r);
  scale(s);

  image(img9);
  rotate(r);
  scale(s);

  image(img10);
  rotate(r);
  scale(s);

  image(img11);
  rotate(r);
  scale(s);

  image(img12);
  rotate(r);
  scale(s);

  image(img13);
  rotate(r);
  scale(s);

  image(img14);
  rotate(r);
  scale(s);

  image(img15);
  rotate(r);
  scale(s);

  image(img16);
  rotate(r);
  scale(s);

  image(img17);
  rotate(r);
  scale(s);

  image(img18);
  rotate(r);
  scale(s);

  image(img19);
  rotate(r);
  scale(s);

  image(img20);
  rotate(r);
  scale(s);

  image(img21);
  rotate(r);
  scale(s);

  image(img22);
  rotate(r);
  scale(s);

}


}

// function mousePressed(){
//
//   imageIndex = int(random(images.length));
//
//     // imageSprite = createSprite(mouseX, mouseY, random(50), random(500));
//     // imageSprite.addImage(img);
//
//     // img.velocity.x = random(-50, 50);
//     // img.velocity.y = random(-50, 50);
// }
