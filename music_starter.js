
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw() {
  draw_one_frame();
  frameCounter++;

  
}

function draw_one_frame(words, vocal, drum, bass, other, counter) {
  colorMode(HSB, 100);
  background(0);
  textFont('Verdana'); // please use CSS safe fonts
  // rectMode(CENTER)
  textSize(24);
  fill(255);
  text(`Frames: ${counter}`, 10, 30);

  if (counter > 5420) {
    drawBridge(vocal, other, drum);
  
 } else if (counter > 4070) {
    drawPreChorus(vocal, bass, other, drum, counter);

 } else if (counter > 2700) {
  drawVerse(vocal, other, drum);
 
}  else if (counter > 1360 && counter <= 2700) {
  drawPreVerse(vocal, other, counter);

}  else if (counter < 1280) {
  drawWindGrid(counter, other);
}
}

 
 
function drawBridge(vocal, other, drum) {

  
push();
colorMode(RGB);
drawSynthRectangles(drum); 

const numCircles = 20;
const radius = 60;
const centerX = 400;
const centerY = 400;
const angleStep = 360 / numCircles;

let fromColor = color(80, 200, 200);
let toColor = color(200, 80, 200);
let lerpFactor = map(drum, 0, 100, 0, 1);


for (let i = 0; i < numCircles; i++) {
  let angle = i * angleStep;
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
drawCrossBig(400, 400, crossSize); //from PreVerse


  
pop();

  


}


function drawPreChorus(vocal, bass, other, drum, counter, x, y) {
  push();
  colorMode(RGB);

  const numCircles = 16;
  const radius = 150;
  const centerX = 400;
  const centerY = 400;
  const angleStep = 360 / numCircles;

  let lerpFactor2 = map(counter, 4070, 5420, 0, 1); 
  let fromColor2 = color(200, 200, 80); //yellow
  let toColor2 = color(80, 172, 200); //blue

  for(let i = 0; i < numCircles; i++) {
    let angle = counter * 0.05 + i * angleStep;
    let x = centerX + radius * cos(angle);
    let y = centerY + radius * sin(angle);

    

    let circleSize = map(other, 0, 100, 10, 40);
    let lerpedColor2 = lerpColor(fromColor2, toColor2, lerpFactor2);

   

    fill(lerpedColor2);
    noStroke();
    ellipse(x, y, circleSize, circleSize);

  }
  
  const diamondRadius = 200;
  let lerpFactor3 = map(counter, 4070, 5420, 0, 1);
  let fromColor3 = color(255, 79, 79);
  let toColor3 = color(250, 52, 52);

  for (let i = 0; i < numCircles; i++) {
    let angle = counter * 0.1 + i * angleStep;
    let x = centerX + diamondRadius * cos(angle);
    let y = centerY + diamondRadius * sin(angle);

    let rectSize = map(bass, 0, 100, 5, 40);
    let lerpedColor3 = lerpColor(fromColor3, toColor3, lerpFactor3);

   if (counter > 4420) {
    noStroke();
    for (let glowLayer = 5; glowLayer > 0; glowLayer--) {
      fill(red(lerpedColor3), green(lerpedColor3), blue(lerpedColor3), 50 / glowLayer);
      push();
      translate(x, y);
      rotate(PI / 4);
      rectMode(CENTER);
      rect(0, 0, rectSize + glowLayer * 8, rectSize + glowLayer * 8);
      pop();
    }
  }
    fill(lerpedColor3);
    noStroke();

    push();
    translate(x, y);
    rotate(PI / 4);
    rectMode(CENTER);
    rect(0, 0, rectSize, rectSize);
    pop();
  }
  
  let crossSize = map(vocal, 0, 100, 5, 50);
  let VocalCircleSize = map(vocal, 0, 100, 1, 10);
  let glowIntensity = map(drum, 0, 100, 0, 150);


  stroke('#949fff')
  drawCrossBig(400, 400, crossSize); //from PreVerse
 
  drawCrossBig(400, 300, crossSize); 
  stroke('#91ffff')
  drawCrossBig(480, 360, crossSize);
  drawCrossBig(370, 350, crossSize);
  drawCrossBig(340, 390, crossSize);
  stroke('#ff91fb');
  drawCrossBig(330, 440, crossSize);
  drawCrossBig(370, 460, crossSize);
  drawCrossBig(420, 360, crossSize);
  stroke('#c3ff91')
  drawCrossBig(450, 440, crossSize);
  drawCrossBig(360, 420, crossSize);
  stroke(255);
  drawCrossBig(360, 370, crossSize);
  drawCrossBig(450, 350, crossSize);
  stroke('#ff9191')
  drawCrossBig(480, 400, crossSize);
  stroke('#949fff')
  drawCrossBig(480, 450, crossSize);

  stroke('#ff91fb');
  drawCrossSmall(370, 370, crossSize); //from PreVerse
  stroke('#91ffff')
  drawCrossSmall(430, 370, crossSize); //from PreVerse
  stroke('#c3ff91')
  drawCrossSmall(430, 430, crossSize); //from PreVerse
  stroke('#ff9191')
  drawCrossSmall(370, 430, crossSize); //from PreVerse
  
  
  stroke('#ff91fb');
  drawCrossSmall(450, 400, crossSize);
  drawCrossSmall(440, 330, crossSize);
  drawCrossSmall(400, 370, crossSize);
  stroke('#ff9191')
  drawCrossSmall(320, 330, crossSize);
  drawCrossSmall(290, 370, crossSize);
  stroke('#949fff')
  drawCrossSmall(440, 470, crossSize);

 

  stroke('#c3ff91')
  fill('#c3ff91');
  ellipse(390, 400, VocalCircleSize, VocalCircleSize);
  stroke('#ff91fb');
  fill('#ff91fb');
  ellipse(330, 370, VocalCircleSize, VocalCircleSize);
  stroke(255);
  fill(255);
  ellipse(415, 305, VocalCircleSize, VocalCircleSize);
  ellipse(460, 445, VocalCircleSize, VocalCircleSize);
  ellipse(460, 390, VocalCircleSize, VocalCircleSize);
  ellipse(420, 450, VocalCircleSize, VocalCircleSize);

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


  const numCircles = 20;
  const radius = 60;
  const centerX = 400;
  const centerY = 400;
  const angleStep = 360 / numCircles;

  let fromColor = color(200, 80, 80); //orange
  let toColor = color(200, 200, 80); //yellow
  let lerpFactor = map(drum, 0, 100, 0, 1);

 

 for (let i = 0; i < numCircles; i++) {
  let angle = other * 0.05 + i * angleStep;
  let x = centerX + radius * cos(angle);
  let y = centerY + radius * sin(angle);

  
  let circleSize = map(other, 0, 100, 5, 20);
  let lerpedColor = lerpColor(fromColor, toColor, lerpFactor);
  
  

  fill(lerpedColor);
  noStroke();
  ellipse(x, y, circleSize, circleSize);
 }

  let crossSize = map(vocal, 0, 100, 5, 50);
  let circleSize = map(vocal, 0, 100, 1, 10);

  stroke('#949fff')
  drawCrossBig(400, 400, crossSize); //from PreVerse
 

  
  


  stroke('#ff91fb');
  drawCrossSmall(370, 370, crossSize); //from PreVerse
  stroke('#91ffff')
  drawCrossSmall(430, 370, crossSize); //from PreVerse
  stroke('#c3ff91')
  drawCrossSmall(430, 430, crossSize); //from PreVerse
  stroke('#ff9191')
  drawCrossSmall(370, 430, crossSize); //from PreVerse
  
  stroke('#ff91fb');
  drawCrossSmall(435, 400, crossSize);

  stroke('#c3ff91')
  fill('#c3ff91');
  ellipse(370, 400, circleSize, circleSize);
  stroke('#ff91fb');
  fill('#ff91fb');
  ellipse(410, 360, circleSize, circleSize);
  
  

pop();
}

function drawPreVerse(vocal, other, counter) {
  push();
  colorMode(RGB);
   drawOrganRectangles(other);
   
   let crossSize = map(vocal, 0, 100, 5, 50);
   
   stroke('#949fff')
   drawCrossBig(400, 400, crossSize); //consistent
 
   stroke('#ff91fb');
   drawCrossSmall(370, 370, crossSize); //consistent
   stroke('#91ffff')
   drawCrossSmall(430, 370, crossSize); //consistent
   stroke('#c3ff91')
   drawCrossSmall(430, 430, crossSize); //consistent
   stroke('#ff9191')
   drawCrossSmall(370, 430, crossSize); //consistent
   
 pop();
 }

 function drawWindGrid(counter, other) {
  let windWidth = 20; // Width of each pattern
  let windHeight = 20; // Height of each pattern
  let gap = 10;
  let totalWidth = windWidth + gap; 
  let totalHeight = windHeight + gap;
  let gridWidth = 25 * totalWidth - gap;
  let gridHeight = 8 * totalHeight - gap;
  let startX = (width - gridWidth) / 2; // Calculate starting X position to center the grid
  let startY = (height - gridHeight) / 2; // Calculate starting Y position to center the grid

  let currentColumn = 24 - Math.floor(counter / 6) % 25; //calculate the current column to turn white
  let leftColumn1 = (currentColumn - 1 + 25) % 25; //left column
  let leftColumn2 = (currentColumn - 2 + 25) % 25;
  let leftColumn3 = (currentColumn - 3 + 25) % 25;
  let leftColumn4 = (currentColumn - 4 + 25) % 25;
  let rightColumn1 = (currentColumn + 1) % 25; //right column
  let rightColumn2 = (currentColumn + 2) % 25;
  let rightColumn3 = (currentColumn + 3) % 25;
  let rightColumn4 = (currentColumn + 3) % 25;


  let RectSize1 = map(other, 0, 100, 60, 150)
  let RectSize2 = map(other, 0, 100, 10, 100)
  let RectSize3 = map(other, 0, 100, 30, 120)
  let RectSize4 = map(other, 0, 100, 40, 140)
  let RectSize5 = map(other, 0, 100, 20, 110)

  let numSquares = map(other, 0,100,0,7);

  for (let i = 0; i < 25; i++) {
    for (let j = 0; j < 8; j++) {
      //setting the fill colour based on the current column
      if (i === currentColumn) {
        stroke(100); // white in HSB
      } else if (i === leftColumn1 || i === rightColumn1) {
        stroke(50);
      } else if (i === leftColumn2 || i === rightColumn2) {
        stroke(25);
      }else if (i === leftColumn3 || i === rightColumn3) {
        stroke(12);
      } else if (i === leftColumn4 || i === rightColumn4) {
        stroke(6);
       } else {
        stroke (0); //black colour HSB
       }
       
      drawWind(startX + i * totalWidth, startY + j * totalHeight);
    }
  }
  let opacity = map(counter, 0, 800, 100, 0);

  fill(0, opacity);
  noStroke();
  rect(0, 0, 800, 800);
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
    
    let lerpFactor = map(other, 0, 100, 0, 1);
    let startColor1 = color(255, 255, 255, 0);
    let endColor1 = color(41, 59, 163, 255);
    let lerpedColor1 = lerpColor(startColor1, endColor1, lerpFactor);

    let startColor2 = color(255, 255, 255, 0);
    let endColor2 = color(155, 163, 41, 255);
    let lerpedColor2 = lerpColor(startColor2, endColor2, lerpFactor);

    let startColor3 = color(255, 255, 255, 0);
    let endColor3 = color(163, 55, 41, 255);
    let lerpedColor3 = lerpColor(startColor3, endColor3, lerpFactor);

    let startColor4 = color(255, 255, 255, 0);
    let endColor4 = color(157, 41, 163, 255);
    let lerpedColor4 = lerpColor(startColor4, endColor4, lerpFactor);

    

    

    let opacity1 = map(other - 50, 0, 100, 0, 255);
    let opacity2 = map(other - 40, 0, 100, 0, 255);
    let opacity3 = map(other - 43, 0, 100, 0, 255);
    let opacity4 = map(other - 40, 0, 100, 0, 255);
    let opacity5 = map(other - 45, 0, 100, 0, 255);
    let opacity6 = map(other - 40, 0, 100, 0, 255);
    let opacity7 = map(other - 38, 0, 100, 0, 255);
    let opacity8 = map(other - 50, 0, 100, 0, 255);
    let opacity9 = map(other - 39, 0, 100, 0, 255);
    let opacity10 = map(other - 30, 0, 100, 0, 255);
    let opacity11 = map(other- 25, 0, 100, 0, 255);
    let opacity12 = map(other - 38, 0, 100, 0, 255);
    let opacity13 = map(other - 31, 0, 100, 0, 255);
    let opacity14 = map(other - 45, 0, 100, 0, 255);
    let opacity15 = map(other - 46, 0, 100, 0, 255);
    let opacity16 = map(other - 50, 0, 100, 0, 255);

  

 fill(255, opacity1);
 rect(350,350,10,10)
 fill(255, opacity2);
 rect(380,350,10, 10)
 fill(255, opacity3);
 rect(410,350,10,10)
 fill(255, opacity4);
 rect(440,350,10,10)
 
 fill(255, opacity5);
 rect(350,380,10,10)
 fill(255, opacity6);
 rect(380,380,10,10)
 fill(255, opacity7);
 rect(410,380,10,10)
 fill(255, opacity8);
 rect(440,380,10,10)

 fill(255, opacity9);
 rect(350,410,10,10)
 fill(255, opacity10);
 rect(380,410,10,10)
 fill(255, opacity11);
 rect(410,410,10,10)
 fill(255, opacity12);
 rect(440,410,10,10)

 fill(255, opacity13);
 rect(350,440,10,10)
 fill(255, opacity14);
 rect(380,440,10,10)
 fill(255, opacity15);
 rect(410,440,10,10)
 fill(255, opacity16);
 rect(440,440,10,10)
  
  }

  function drawSynthRectangles(drum) {
    push();
    rectMode(CENTER);
    fill(255, 255);
    
    let opacity1 = map(drum - 5, 0, 100, 0, 255);
    let opacity2 = map(drum - 15, 0, 100, 0, 255);
    let opacity3 = map(drum - 25, 0, 100, 0, 255);
    let opacity4 = map(drum - 35, 0, 100, 0, 255);
    let opacity5 = map(drum - 45, 0, 100, 0, 255);
    
    

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



    
    
    
    
    
   
    
    
    
    // fill(255, opacity3);
    // rect(460, 370, 10, 10);
    // fill(255, opacity3);
    // rect(340, 370, 10, 10);
    
    // fill(255, opacity3);
    // rect(340, 400, 10, 10);
    // fill(255, opacity3);
    // rect(460, 430, 10, 10);
    // fill(255, opacity3);
    // rect(340, 430, 10, 10);
    
    
    // fill(255, opacity3);
    // rect(430, 340, 10, 10);
    // fill(255, opacity3);
    // rect(460, 340, 10, 10);
    // fill(255, opacity3);
    // rect(370, 340, 10, 10);
    // fill(255, opacity3);
    // rect(340, 340, 10, 10);
    // fill(255, opacity3);
    // rect(370, 460, 10, 10);
    // fill(255, opacity3);
    // rect(340, 460, 10, 10);
    // fill(255, opacity3);
    // rect(430, 460, 10, 10);
    // fill(255, opacity3);
    // rect(460, 460, 10, 10);
    // fill(255, opacity3);
    // fill(255, 255);
    
    // rect(370, 310, 10, 10);
    
    // rect(430, 310, 10, 10);

    // rect(400, 280, 10, 10);
    
    // rect(490, 400, 10, 10);
    // rect(490, 370, 10, 10);
    // rect(490, 430, 10, 10);
    
    // rect(520, 400, 10, 10);

    // rect(400, 490, 10, 10);
    // rect(430, 490, 10, 10);
    // rect(370, 490, 10, 10);

    // rect(400, 530, 10, 10);

    // rect(310, 400, 10, 10);
    // rect(310, 370, 10, 10);
    // rect(310, 430, 10, 10);

    // rect(280, 400, 10, 10);






    
    
    // fill(255, 255);
    // rect(380,350,10, 10)
    // fill(255, 255);
    // rect(410,350,10,10)
    // fill(255, 255);
    // rect(440,350,10,10)


  }



  function drawCrossBig(x, y, size) {
    strokeWeight(4);
    line(x, y - size / 2, x, y + size / 2); // Vertical line
    line(x - size / 2, y, x + size / 2, y); // Horizontal line
  }


// function drawOrganCircle(other, counter) {
 
 

//   push();
//   colorMode(RGB);
//   fill('#fc7303');
//   noStroke();

//   let shakeX = map(other, 0, 100, -10, 10);
  
//   let size = map(counter, 1360, 2700, 10, 30);
//   size = constrain(size, 10, 50);
  
//   ellipse(400 + shakeX, 400, size, size);

//   pop();
  
  
// } 


 
  
  
  





  
  

  

  
  

 


 
  

