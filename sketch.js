function setup(){
    createCanvas(600,400);
}

function draw(){
   background(0); 
   
   loadPixels();
   
   for(var row = 0; row < height; row++){
       for(var col = 0; col < width; col++){
           var startingIndex = (col + row * width)*4;
           
           pixels[startingIndex] = 0; //red
     pixels[startingIndex + 1] = 0; //green
     pixels[startingIndex + 2] = col; //blue
     pixels[startingIndex + 3] = 255; //alpha
       }
   }
     
     updatePixels();
}