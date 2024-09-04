
// vocal, drum, bass, and other are volumes ranging from 0 to 100

function draw() {
  draw_one_frame();
  frameCounter++;
}

function draw_one_frame(words, vocal, drum, bass, other, counter) {
  colorMode(HSB, 100);
  background(0)
  textFont('Verdana'); // please use CSS safe fonts
  // rectMode(CENTER)
  textSize(24);

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

  
  if (counter < 1280) {

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


if (counter > 1360) {
  drawPreVerse(RectSize1, RectSize2, RectSize3, RectSize4, RectSize5, numSquares, other);

}

}




function drawWind(x, y) {
  strokeWeight(2);
  line(x + 10, y, x + 10, y + 20); // Vertical line
  line(x, y + 10, x + 20, y + 10); // Horizontal line
  line(x, y, x + 20, y + 20); // Diagonal line from top-left to bottom-right
  line(x + 20, y, x, y + 20); // Diagonal line from top-right to bottom-left
  
}

function drawPreVerse(RectSize1, RectSize2, RectSize3, RectSize4, RectSize5, numSquares, other) {
 push();
  rectMode(CENTER);

  drawFixedRectangles(RectSize1, RectSize2, RectSize3, RectSize4, RectSize5);
  drawVocalSquares(numSquares, other);
  pop();
}
  function drawFixedRectangles(RectSize1, RectSize2, RectSize3, RectSize4, RectSize5) {



  fill(100)
  rect(400,500,20,RectSize1)
  fill(70)
  rect(450,500,20,RectSize2)
  fill(80)
  rect(500,500,20,RectSize1)
  fill(40)
  rect(550,500,20,RectSize3)
  fill(90)
  rect(600,500,20,RectSize4)
  fill(90)
  rect(350,500,20,RectSize5)
  fill(10)
  rect(300,500,20,RectSize1)
  fill(40)
  rect(250,500,20,RectSize1)
  fill(100)
  rect(200,500,20,RectSize3)

  
  }

 function drawVocalSquares(numSquares, other) {
  let centerX = 400;
  let centerY = 300;
  let baseSize = 25;

  for (let i = 1; i <= numSquares; i++) {
  let expandSize = map(other, 0, 100, baseSize, baseSize + i * 1);

  fill(100);
  rect(centerX - i * 50, centerY, expandSize, expandSize);
  rect(centerX + i * 50, centerY, expandSize, expandSize);

  rect(centerX, centerY, 25, 25)
  
  
  }

  }
  

 


 
  

