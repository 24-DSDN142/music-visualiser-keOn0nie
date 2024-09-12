let expansionCounter = 0;
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw() {
  draw_one_frame();
  frameCounter++;

  
}

function draw_one_frame(words, vocal, drum, bass, other, counter) {
  colorMode(HSB, 100);
  background(0);
  textFont('Verdana'); // please use CSS safe fonts

   if (counter > 6785) {
    drawChorus(vocal, bass, other, drum, counter);

 } else if (counter > 5420) {
    drawBridge(vocal, other, drum);
  
 } else if (counter > 4070) {
    drawPreChorus(vocal, bass, other, drum, counter);

 } else if (counter > 2700) {
  drawVerse(vocal, other, drum);
 
}  else if (counter > 1360 && counter <= 2700) {
  drawPreVerse(vocal, other, counter);

  
}  else if (counter < 1275) {
  drawWindGrid(counter, other);
}
}

 function drawChorus(vocal, bass, other, drum, counter) {

  push();
  colorMode(RGB);
  drawSynthRectanglesChorus(drum); 



  const numCircles = 20; //circle of circles for main instruments
  const radius = 120; //circle of circles for main instruments
  const centerX = 400; //circle of circles for main instruments
  const centerY = 400; //circle of circles for main instruments
  const angleStep = 360 / numCircles; //circle of circles for main instruments

  let lerpFactor2 = map(drum, 0, 100, 0, 1); 
  let fromColor2 = color('#9d65c9'); //purpleish
  let toColor2 = color('#d789d7'); //light purpleish

  for (let i = 0; i < numCircles; i++) {
    let angle = counter * 0.05 + i * angleStep; //spining slowly clockwise
    let x = centerX + radius * cos(angle);
    let y = centerY + radius * sin(angle);

  
    let circleSize = map(other, 0, 100, 10, 30);
    let lerpedColor2 = lerpColor(fromColor2, toColor2, lerpFactor2);

    fill(lerpedColor2);
    noStroke();
    ellipse(x, y, circleSize, circleSize);

  }

  const numCircles2 = 20; //circle of circles for background synths
  const radius2 = 160; //circle of circles for background synths
  const angleStep2 = 360 / numCircles2; //circle of circles for background synths

  let lerpFactor3 = map(drum, 0, 100, 0, 1); 
  let fromColor3 = color('#2a3d66'); //darker purple
  let toColor3 = color('#5d54a4'); //light-pink

  for (let i = 0; i < numCircles2; i++) {
    let angle = -counter * 0.05 - i * angleStep2; //spining anti clockwise
    let x = centerX + radius2 * cos(angle);
    let y = centerY + radius2 * sin(angle);

  
    let circleSize = map(drum, 0, 100, 10, 30);
    let lerpedColor3 = lerpColor(fromColor3, toColor3, lerpFactor3);

    fill(lerpedColor3);
    noStroke();
    ellipse(x, y, circleSize, circleSize);

  }

  

    const expandingCircles = 20; //the number of circles 
    const expandingAngleStep = 360 / expandingCircles; //calculates the angle between each circle on the ring to keep an even spacing //Codiumate assisted

    
    let expandingProgress = counter % 339; //controls at how many frames the circle expands again , resetting after each time reaching 339 frames //Codiumate assisted
    let expandingRadius = map(expandingProgress, 0, 339, 0, 1500); //takes the points of the 339 frame reset and converts that to a map which controls how far the circle expands //Codiumate assisted

    for (let i = 0; i < expandingCircles; i++) {
      let angle = i * expandingAngleStep; //keeping the circles evenly spaced //Codiumate assisted
      let x = centerX + expandingRadius * cos(angle); //allowing the circle to expand over the horizontal plane //Codiumate assisted
      let y = centerY + expandingRadius * sin(angle); //allowing the circle to expand over the vertical plane //Codiumate assisted

      let circleSize = map(expandingProgress, 0, 339, 20, 50); //allows the indiviual circles to grow as the circle expands
      
      fill('#99baff');
      noStroke();
      ellipse(x, y, circleSize, circleSize);
    
    }


  const diamondRadius = 200; //circle of rectangles for bass
  let rectSize = 5; //circle of rectangles for bass

  let glowOpacity = map(bass, 0, 100, 0, 255);
  let fromColorBass = color(255, 79, 79);
  let toColorBass = color(250, 52, 52);
  let lerpFactorBass = map(bass, 0, 100, 0, 1); //the transition between the two colors
  let lerpedColor3 = lerpColor(fromColorBass, toColorBass, lerpFactorBass); //lerp combined
  
  for (let i = 0; i < numCircles; i++) { //same code as the circles, which in this code is 20, placing the rectangles in a circle
    let angle = counter * 0.1 + i * angleStep; //allows the circle to spin based on the counter * 0.1 so it rotates slowly
    let x = centerX + diamondRadius * cos(angle);
    let y = centerY + diamondRadius * sin(angle);

   
    
    noStroke();

    for (let glowLayer = 2; glowLayer >= 0; glowLayer--) { //creates a glow layer of 2 that moves to 0 //Codiumate assisted
      let size = rectSize + glowLayer * 8; //Layered size increments for glow //Codiumate assisted
      let opacity = glowLayer === 0 ? 255 : (glowOpacity / 5) * glowLayer; //Full opacity for main rectangle //Codiumate assisted
      fill(red(lerpedColor3), green(lerpedColor3), blue(lerpedColor3), opacity); //Codiumate assisted



    push();
    translate(x, y);
    rotate(PI / 4); 
    rectMode(CENTER);
    rect(0, 0, size, size);
    pop();
  }
  }
  let crossSize = map(vocal, 0, 100, 5, 50);
  let VocalCircleSize = map(vocal, 0, 100, 1, 10);
  
  stroke('#949fff')
  drawCrossBig(400, 400, crossSize);
 
  stroke('#ff91fb');
  drawCrossSmall(370, 370, crossSize); 
  stroke('#91ffff')
  drawCrossSmall(430, 370, crossSize); 
  stroke('#c3ff91')
  drawCrossSmall(430, 430, crossSize); 
  stroke('#ff9191')
  drawCrossSmall(370, 430, crossSize); 
  stroke('#c3ff91');
  drawCrossSmall(355, 400, crossSize, crossSize);
  stroke('#ff91fb');
  drawCrossSmall(445, 400, crossSize);

  stroke('#ff91fb');
  fill('#ff91fb');
  ellipse(400, 355, VocalCircleSize, VocalCircleSize);
  stroke('#509cc8');
  fill('#509cc8');
  ellipse(400, 445, VocalCircleSize, VocalCircleSize);

  pop();
}

 
function drawBridge(vocal, other, drum) {

  
push();
colorMode(RGB);
drawSynthRectanglesSmall(drum); 

const numCircles = 20;
const radius = 80;
const centerX = 400;
const centerY = 400;
const angleStep = 360 / numCircles;

let fromColor = color(80, 200, 200); //cyan
let toColor = color(200, 80, 200); //purple-pink
let lerpFactor = map(drum, 0, 100, 0, 1);


for (let i = 0; i < numCircles; i++) {
  let angle = i * angleStep; //static circle of circles
  let x = centerX + radius * cos(angle);
  let y = centerY + radius * sin(angle);


  let circleSize = map(other, 0, 100, 5, 20);
  let lerpedColor = lerpColor(fromColor, toColor, lerpFactor);

  fill(lerpedColor);
  noStroke();
  ellipse(x, y, circleSize, circleSize);
}

let crossSize = map(vocal, 0, 100, 5, 50);
stroke('#949fff')
drawCrossBig(400, 400, crossSize); 


  
pop();

  


}


function drawPreChorus(vocal, bass, other, drum, counter) {
  
  push();
  colorMode(RGB);
  drawSynthRectanglesMedium(drum); 

  const numCircles = 20; //Codiumate assisted
  const radius = 90; //Codiumate assisted
  const centerX = 400; //Codiumate assisted
  const centerY = 400; //Codiumate assisted
  const angleStep = 360 / numCircles; //Codiumate assisted

  let lerpFactor2 = map(drum, 0, 100, 0, 1); 
  let fromColor2 = color('#426fb8'); //dark blue
  let toColor2 = color('#a9d7f6'); //light blue

  for (let i = 0; i < numCircles; i++) { 
    let angle = counter * 0.05 + i * angleStep; //allowing the circle to rotate clockwise
    let x = centerX + radius * cos(angle); 
    let y = centerY + radius * sin(angle); 

  
    let circleSize = map(other, 0, 100, 10, 30);
    let lerpedColor2 = lerpColor(fromColor2, toColor2, lerpFactor2);

    fill(lerpedColor2);
    noStroke();
    ellipse(x, y, circleSize, circleSize);

  }
  
  const diamondRadius = 130; //the radius of the circle of diamonds/rectangles
  let rectSize = 5; //the base size of the rectangle


  let glowOpacity = map(bass, 0, 100, 0, 255); //maps the bass values to the opacity of the glow
  let fromColor3 = color('#b84d69'); // dark red
  let toColor3 = color('#f96d6d'); //orange
  let lerpFactor3 = map(bass, 0, 100, 0, 1); //the transition between the two colors
  let lerpedColor3 = lerpColor(fromColor3, toColor3, lerpFactor3); //lerp combined
  
  for (let i = 0; i < numCircles; i++) { //same code as the circles, which in this code is 20, placing the rectangles in a circle
    let angle = counter * 0.1 + i * angleStep; //allows the circle to spin based on the counter * 0.1 so it rotates slowly
    let x = centerX + diamondRadius * cos(angle);
    let y = centerY + diamondRadius * sin(angle);

   
    
    noStroke();

    for (let glowLayer = 2; glowLayer >= 0; glowLayer--) { //creates a glow layer of 2 that moves to 0 //Codiumate assisted
      let size = rectSize + glowLayer * 8; //Layered size increments for glow //Codiumate assisted
      let opacity = glowLayer === 0 ? 255 : (glowOpacity / 5) * glowLayer; //Full opacity for main rectangle //Codiumate assisted
      fill(red(lerpedColor3), green(lerpedColor3), blue(lerpedColor3), opacity); //Codiumate assisted



    push();
    translate(x, y);
    rotate(PI / 4); 
    rectMode(CENTER);
    rect(0, 0, size, size);
    pop();
  }
  }
  
  let crossSize = map(vocal, 0, 100, 5, 50);
  let VocalCircleSize = map(vocal, 0, 100, 1, 10);
  


  stroke('#949fff')
  drawCrossBig(400, 400, crossSize);
 
  stroke('#ff91fb');
  drawCrossSmall(370, 370, crossSize); 
  stroke('#91ffff')
  drawCrossSmall(430, 370, crossSize); 
  stroke('#c3ff91')
  drawCrossSmall(430, 430, crossSize); 
  stroke('#ff9191')
  drawCrossSmall(370, 430, crossSize); 
  stroke('#c3ff91');
  drawCrossSmall(355, 400, crossSize, crossSize);
  stroke('#ff91fb');
  drawCrossSmall(445, 400, crossSize);

  stroke('#ff91fb');
  fill('#ff91fb');
  ellipse(400, 355, VocalCircleSize, VocalCircleSize);
  stroke('#509cc8');
  fill('#509cc8');
  ellipse(400, 445, VocalCircleSize, VocalCircleSize);
  

  pop();
}




function drawCrossBig(x, y, size) {
  strokeWeight(4);
  line(x, y - size / 2, x, y + size / 2);
  line(x - size / 2, y, x + size / 2, y);
}

function drawVerse(vocal, other, drum) {
 
 
  push();
  colorMode(RGB);
  drawSynthRectanglesMedium (drum)

  const numCircles = 20; //number of circles drawn in the circle //Codiumate assisted
  const radius = 90; // amount of pixels from the center (90) //Codiumate assisted
  const centerX = 400; // what is the center point //Codiumate assisted
  const centerY = 400; //what is the center point //Codiumate assisted
  const angleStep = 360 / numCircles; //calculating the distance between each circle, since the circle is 360 degrees, if we divide by the numCircles we get the angle between each circle //Codiumate assisted

  let fromColor = color(200, 80, 80); //orange
  let toColor = color(200, 200, 80); //yellow
  let lerpFactor = map(drum, 0, 100, 0, 1);

 

 for (let i = 0; i < numCircles; i++) { //Codiumate assisted
  let angle = other * 0.05 + i * angleStep; //Codiumate assisted
  let x = centerX + radius * cos(angle); //Codiumate assisted
  let y = centerY + radius * sin(angle); //Codiumate assisted

  
  let circleSize = map(other, 0, 100, 5, 20); //controls the size of the circles depending on the 'other' volumes
  let lerpedColor = lerpColor(fromColor, toColor, lerpFactor); //taking the 'drum' lerp factor, and combining that with the from and to color which can be used for the fill of the circles.
  
  

  fill(lerpedColor);
  noStroke();
  ellipse(x, y, circleSize, circleSize);
 }

  let crossSize = map(vocal, 0, 100, 5, 50);

  stroke('#949fff')
  drawCrossBig(400, 400, crossSize); 
 
pop();
}

function drawPreVerse(vocal, other) {
  push();
  colorMode(RGB);
   drawOrganRectangles(other);
   
   let crossSize = map(vocal, 0, 100, 5, 50);
   
   stroke('#949fff')
   drawCrossBig(400, 400, crossSize); 
 
   
 pop();
 }

 function drawWindGrid(counter) {
  let windWidth = 20; // width of each pattern
  let windHeight = 20; // height of each pattern
  let gap = 10; //gap between each pattern
  let totalWidth = windWidth + gap; //gap + width
  let totalHeight = windHeight + gap; //gap + height
  let gridWidth = 25 * totalWidth - gap; // allowing the grid to be 25 patterns wide
  let gridHeight = 8 * totalHeight - gap; // allowing the grid to be 8 patterns tall
  let startX = (width - gridWidth) / 2; // calculate starting X position to center the grid //Codiumate assisted
  let startY = (height - gridHeight) / 2; // calculate starting Y position to center the grid //Codiumate assisted

  let currentColumn = 24 - Math.floor(counter / 6) % 25; //calculate the current column to turn white using the counter, the % 25 allowing the code to loop back around //Codiumate assisted
  let leftColumn1 = (currentColumn - 1 + 25) % 25; //columns to the left of the currentColumn
  let leftColumn2 = (currentColumn - 2 + 25) % 25; //columns to the left of the currentColumn
  let leftColumn3 = (currentColumn - 3 + 25) % 25; //columns to the left of the currentColumn
  let leftColumn4 = (currentColumn - 4 + 25) % 25; //columns to the left of the currentColumn
  let rightColumn1 = (currentColumn + 1) % 25; //columns to the right of the currentColumn
  let rightColumn2 = (currentColumn + 2) % 25; //columns to the right of the currentColumn
  let rightColumn3 = (currentColumn + 3) % 25; //columns to the right of the currentColumn
  let rightColumn4 = (currentColumn + 3) % 25; //columns to the right of the currentColumn



  for (let i = 0; i < 25; i++) { //codiumate assisted
    for (let j = 0; j < 8; j++) { //codiumate assisted
      //setting the fill colour based on the current column
      if (i === currentColumn) {
        stroke(100); // white in HSB
      } else if (i === leftColumn1 || i === rightColumn1) { //columns to the right and left of main column decending in opacity //codiumate assisted
        stroke(50);
      } else if (i === leftColumn2 || i === rightColumn2) { //columns to the right and left of main column decending in opacity //codiumate assisted
        stroke(25);
      }else if (i === leftColumn3 || i === rightColumn3) { //columns to the right and left of main column decending in opacity //codiumate assisted
        stroke(12);
      } else if (i === leftColumn4 || i === rightColumn4) { //columns to the right and left of main column decending in opacity //codiumate assisted
        stroke(6);
       } else {
        stroke (0); //black colour HSB
       }
       
      drawWind(startX + i * totalWidth, startY + j * totalHeight); //drawing the pattern at each stated grid position, based on the current grid cell //codiumate assisted
    }
  }
  let opacity = map(counter, 0, 800, 100, 0); //controlling the opacity of the canvas square over 800 frames

  fill(0, opacity);
  noStroke();
  rect(0, 0, 800, 800); //rectangle covering the entire canvas that adjusts from 100% black to 0% over 800 frames, uncovering the pattern underneath.
 }

function drawCrossBig(x, y, size) {
  strokeWeight(4);
  line(x, y - size / 2, x, y + size / 2);
  line(x - size / 2, y, x + size / 2, y);

}
  function drawCrossSmall(x, y, size) {
    strokeWeight(3);
    line(x, y - size / 4, x, y + size / 4);
    line(x - size / 4, y, x + size / 4, y);
  }

function drawWind(x, y) {
  strokeWeight(2);
  line(x + 10, y, x + 10, y + 20); // Vertical line
  line(x, y + 10, x + 20, y + 10); // Horizontal line
  line(x, y, x + 20, y + 20); // Diagonal line from top-left to bottom-right
  line(x + 20, y, x, y + 20); // Diagonal line from top-right to bottom-left
}



  function drawOrganRectangles(other) {
    
 
    let opacity1 = map(other - 50, 0, 100, 0, 255); //varying opacities based on the volume of 'other'
    let opacity2 = map(other - 40, 0, 100, 0, 255); //varying opacities based on the volume of 'other'
    let opacity3 = map(other - 43, 0, 100, 0, 255); //varying opacities based on the volume of 'other'
    let opacity4 = map(other - 40, 0, 100, 0, 255); //varying opacities based on the volume of 'other'
    let opacity5 = map(other - 45, 0, 100, 0, 255); //varying opacities based on the volume of 'other'
    let opacity6 = map(other - 40, 0, 100, 0, 255); //varying opacities based on the volume of 'other'
    let opacity7 = map(other - 38, 0, 100, 0, 255); //varying opacities based on the volume of 'other'
    let opacity8 = map(other - 50, 0, 100, 0, 255); //varying opacities based on the volume of 'other'
    let opacity9 = map(other - 39, 0, 100, 0, 255); //varying opacities based on the volume of 'other'
    let opacity10 = map(other - 30, 0, 100, 0, 255); //varying opacities based on the volume of 'other'
    let opacity11 = map(other- 25, 0, 100, 0, 255); //varying opacities based on the volume of 'other'
    let opacity12 = map(other - 38, 0, 100, 0, 255); //varying opacities based on the volume of 'other'
    let opacity13 = map(other - 31, 0, 100, 0, 255); //varying opacities based on the volume of 'other'
    let opacity14 = map(other - 45, 0, 100, 0, 255); //varying opacities based on the volume of 'other'
    let opacity15 = map(other - 46, 0, 100, 0, 255); //varying opacities based on the volume of 'other'
    let opacity16 = map(other - 50, 0, 100, 0, 255); //varying opacities based on the volume of 'other'

  
 //lines of cubes within the grid
 fill(255, opacity1); 
 rect(350,350,10,10)
 fill(255, opacity2);
 rect(380,350,10, 10)
 fill(255, opacity3);
 rect(410,350,10,10)
 fill(255, opacity4);
 rect(440,350,10,10)
  //lines of cubes within the grid
 fill(255, opacity5);
 rect(350,380,10,10)
 fill(255, opacity6);
 rect(380,380,10,10)
 fill(255, opacity7);
 rect(410,380,10,10)
 fill(255, opacity8);
 rect(440,380,10,10)
 //lines of cubes within the grid
 fill(255, opacity9);
 rect(350,410,10,10)
 fill(255, opacity10);
 rect(380,410,10,10)
 fill(255, opacity11);
 rect(410,410,10,10)
 fill(255, opacity12);
 rect(440,410,10,10)
 //lines of cubes within the grid
 fill(255, opacity13);
 rect(350,440,10,10)
 fill(255, opacity14);
 rect(380,440,10,10)
 fill(255, opacity15);
 rect(410,440,10,10)
 fill(255, opacity16);
 rect(440,440,10,10)
  
  }

  function drawSynthRectanglesChorus(drum) {
    push();
    rectMode(CENTER);
    fill(255, 255);
    
    let opacity1 = map(drum, 0, 100, 0, 255);
    let opacity2 = map(drum - 5, 0, 100, 0, 255);
    let opacity3 = map(drum - 15, 0, 100, 0, 255);
    let opacity4 = map(drum - 25, 0, 100, 0, 255);
    let opacity5 = map(drum - 35, 0, 100, 0, 255);
    
    

    fill(255, opacity1);
    rect(400, 400, 10, 10);

    fill(255, opacity2);
    rect(400, 370, 10, 10);
    rect(400, 430, 10, 10);
    rect(430, 400, 10, 10);
    rect(370, 400, 10, 10);

    fill(255, opacity3);
    rect(400, 340, 10, 10);
    rect(430, 370, 10, 10);
    rect(460, 400, 10, 10);
    rect(430, 430, 10, 10);
    rect(400, 460, 10, 10);
    rect(370, 430, 10, 10);
    rect(370, 370, 10, 10);
    rect(340, 400, 10, 10);

    
    fill(255, opacity4);
    rect(400, 310, 10, 10);
    rect(430, 340, 10, 10);
    rect(460, 370, 10, 10);
    rect(490, 400, 10, 10);
    rect(460, 430, 10, 10);
    rect(430, 460, 10, 10);
    rect(400, 490, 10, 10);
    rect(370, 460, 10, 10);
    rect(340, 430, 10, 10);
    rect(310, 400, 10, 10);
    rect(340, 370, 10, 10);
    rect(370, 340, 10, 10);

    fill(255, opacity5);
    rect(400, 280, 10, 10);
    rect(430, 310, 10, 10);
    rect(460, 340, 10, 10);
    rect(490, 370, 10, 10);
    rect(520, 400, 10, 10);
    rect(490, 430, 10, 10);
    rect(460, 460, 10, 10);
    rect(430, 490, 10, 10);
    rect(400, 520, 10, 10);
    rect(370, 490, 10, 10);
    rect(340, 460, 10, 10);
    rect(310, 430, 10, 10);
    rect(280, 400, 10, 10);
    rect(310, 370, 10, 10);
    rect(340, 340, 10, 10);
    rect(370, 310, 10, 10);



    
    
    
  }

  function drawSynthRectanglesMedium (drum) {
    push();
    rectMode(CENTER);
    fill(255, 255);
    
    let opacity1 = map(drum - 5, 0, 100, 0, 255);
    let opacity2 = map(drum - 15, 0, 100, 0, 255);
    let opacity3 = map(drum - 25, 0, 100, 0, 255);
    let opacity4 = map(drum - 35, 0, 100, 0, 255);
    
    
    

    fill(255, opacity1);
    rect(400, 400, 10, 10);

    fill(255, opacity2);
    rect(400, 370, 10, 10);
    rect(400, 430, 10, 10);
    rect(430, 400, 10, 10);
    rect(370, 400, 10, 10);

    fill(255, opacity3);
    rect(400, 340, 10, 10);
    rect(430, 370, 10, 10);
    rect(460, 400, 10, 10);
    rect(430, 430, 10, 10);
    rect(400, 460, 10, 10);
    rect(370, 430, 10, 10);
    rect(370, 370, 10, 10);
    rect(340, 400, 10, 10);

    
    fill(255, opacity4);
    rect(400, 310, 10, 10);
    rect(430, 340, 10, 10);
    rect(460, 370, 10, 10);
    rect(490, 400, 10, 10);
    rect(460, 430, 10, 10);
    rect(430, 460, 10, 10);
    rect(400, 490, 10, 10);
    rect(370, 460, 10, 10);
    rect(340, 430, 10, 10);
    rect(310, 400, 10, 10);
    rect(340, 370, 10, 10);
    rect(370, 340, 10, 10);


  }

  
  function drawSynthRectanglesSmall (drum) {
    push();
    rectMode(CENTER);
    fill(255, 255);
    
    let opacity1 = map(drum - 5, 0, 100, 0, 255);
    let opacity2 = map(drum - 15, 0, 100, 0, 255);
    let opacity3 = map(drum - 25, 0, 100, 0, 255);
   
    
    
    

    fill(255, opacity1);
    rect(400, 400, 10, 10);

    fill(255, opacity2);
    rect(400, 370, 10, 10);
    rect(400, 430, 10, 10);
    rect(430, 400, 10, 10);
    rect(370, 400, 10, 10);

    fill(255, opacity3);
    rect(400, 340, 10, 10);
    rect(430, 370, 10, 10);
    rect(460, 400, 10, 10);
    rect(430, 430, 10, 10);
    rect(400, 460, 10, 10);
    rect(370, 430, 10, 10);
    rect(370, 370, 10, 10);
    rect(340, 400, 10, 10);


  }

  




 
  
  
  





  
  

  

  
  

 


 
  

