var userUpload;

function preload(){
    userUpload = loadImage("large.png");
}

function setup(){
    createCanvas(userUpload.width, userUpload.height);
}

function draw(){
   background(0); 
   image(userUpload, 0, 0);
   loadPixels();
   
   for(var row = 0; row < height; row++){
       for(var col = 0; col < width; col++){
           var startingIndex = (col + row * width)*4;
           
           var r = pixels[startingIndex];
           var g = pixels[startingIndex + 1];
           var b = pixels[startingIndex + 2];
           var a = pixels[startingIndex + 3];
           
      if(keyIsPressed){
          if(key=="1"){
              gray_filter(startingIndex, g, a);
             }
      if(keyIsPressed){
          if(key=="2"){
              red_filter(startingIndex, r, a);
          }
      }      
          }
       }
    }
     updatePixels();
}

function gray_filter(startingIndex, g, a){
     pixels[startingIndex + 0] = g; //red
     pixels[startingIndex + 1] = g; //green
     pixels[startingIndex + 2] = g; //blue
     pixels[startingIndex + 3] = a; //alpha
}
     
function red_filter(startingIndex, r, a){
    pixels[startingIndex + 0] = r; //red
    pixels[startingIndex + 1] = r; //green
    pixels[startingIndex + 2] = r; //blue
    pixels[startingIndex + 3] = a; //alpha
}