
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

  
//   if (counter < 1280) {

//   for (let i = 0; i < 25; i++) {
//     for (let j = 0; j < 8; j++) {
//       //setting the fill colour based on the current column
//       if (i === currentColumn) {
//         stroke(100); // white in HSB
//       } else if (i === leftColumn1 || i === rightColumn1) {
//         stroke(50);
//       } else if (i === leftColumn2 || i === rightColumn2) {
//         stroke(25);
//       }else if (i === leftColumn3 || i === rightColumn3) {
//         stroke(12);
//       } else if (i === leftColumn4 || i === rightColumn4) {
//         stroke(6);
//        } else {
//         stroke (0); //black colour HSB
//        }
       
//       drawWind(startX + i * totalWidth, startY + j * totalHeight);
//     }
//   }
//   let opacity = map(counter, 0, 800, 100, 0);

//   fill(0, opacity);
//   noStroke();
//   rect(0, 0, 800, 800);
//   }


// if (counter > 1360) {
//   drawPreVerse(vocal, other, counter);

// if (counter > 2730) {
  drawVerse(vocal, other, counter);
}
// }

// }






function drawWind(x, y) {
  strokeWeight(2);
  line(x + 10, y, x + 10, y + 20); // Vertical line
  line(x, y + 10, x + 20, y + 10); // Horizontal line
  line(x, y, x + 20, y + 20); // Diagonal line from top-left to bottom-right
  line(x + 20, y, x, y + 20); // Diagonal line from top-right to bottom-left
  
}

function drawPreVerse(vocal, other, counter) {
 push();


  drawVocalRectangles(vocal);
  drawOrganCircle(other, counter);
  
  pop();
}
  function drawVocalRectangles(vocal) {

    let opacity1 = map(vocal - 35, 0, 100, 0, 255);
    let opacity2 = map(vocal - 35, 0, 100, 0, 255);
    let opacity3 = map(vocal - 40, 0, 100, 0, 255);
    let opacity4 = map(vocal - 35, 0, 100, 0, 255);
    let opacity5 = map(vocal - 45, 0, 100, 0, 255);
    let opacity6 = map(vocal - 35, 0, 100, 0, 255);
    let opacity7 = map(vocal - 35, 0, 100, 0, 255);
    let opacity8 = map(vocal - 45, 0, 100, 0, 255);
    let opacity9 = map(vocal - 35, 0, 100, 0, 255);
    let opacity10 = map(vocal - 25, 0, 100, 0, 255);
    let opacity11 = map(vocal- 15, 0, 100, 0, 255);
    let opacity12 = map(vocal - 30, 0, 100, 0, 255);
    let opacity13 = map(vocal - 35, 0, 100, 0, 255);
    let opacity14 = map(vocal - 30, 0, 100, 0, 255);
    let opacity15 = map(vocal - 35, 0, 100, 0, 255);
    let opacity16 = map(vocal - 40, 0, 100, 0, 255);

  

 fill(255, opacity1);
 rect(345,345,20,20)
 fill(255, opacity2);
 rect(375,345,20,20)
 fill(255, opacity3);
 rect(405,345,20,20)
 fill(255, opacity4);
 rect(435,345,20,20)
 
 fill(255, opacity5);
 rect(345,375,20,20)
 fill(255, opacity6);
 rect(375,375,20,20)
 fill(255, opacity7);
 rect(405,375,20,20)
 fill(255, opacity8);
 rect(435,375,20,20)

 fill(255, opacity9);
 rect(345,405,20,20)
 fill(255, opacity10);
 rect(375,405,20,20)
 fill(255, opacity11);
 rect(405,405,20,20)
 fill(255, opacity12);
 rect(435,405,20,20)

 fill(255, opacity13);
 rect(345,435,20,20)
 fill(255, opacity14);
 rect(375,435,20,20)
 fill(255, opacity15);
 rect(405,435,20,20)
 fill(255, opacity16);
 rect(435,435,20,20)

 


  
  }


function drawOrganCircle(other, counter) {
 
 

  push();
  colorMode(RGB);
  fill('#fc7303');
  noStroke();

  let shakeX = map(other, 0, 100, -10, 10);
  
  let size = map(counter, 1360, 2700, 10, 30);
  size = constrain(size, 10, 50);
  
  ellipse(400 + shakeX, 400, size, size);

  pop();
  
  
} 

function drawVerse(vocal, other, counter, x, y) {
  drawCrossBig(400, 300);
  drawCrossBig(400, 400);
  drawCrossBig(500, 360);
  drawCrossBig(370, 350);
  drawCrossBig(310, 390);
  drawCrossBig(330, 290);
  drawCrossBig(370, 460);
  drawCrossBig(420, 360);
  drawCrossBig(450, 440);
  drawCrossBig(360, 420);

  drawCrossSmall(450, 400);
  drawCrossSmall(440, 330);
  drawCrossSmall(320, 330);
  drawCrossSmall(290, 370);

  ellipse(390, 400, 5, 5);
  ellipse(330, 370, 5, 5);
  ellipse(450, 330, 5, 5);
  ellipse(460, 445, 5, 5);
  


function drawCrossBig(x,y) {
  strokeWeight(4);
  stroke(255);
  line(x, y, x, y + 40);
  line(x - 20, y + 20, x + 20, y + 20);

}
  function drawCrossSmall(x,y) {
    strokeWeight(3);
    stroke(255);
    line(x, y, x, y + 20);
    line(x - 10, y + 10, x + 10, y + 10);
  }
 
  

  }
  





  
  

  
  // let centerX = 400;
  // let centerY = 300;
  // let baseSize = 25;

  // for (let i = 1; i <= numSquares; i++) {
  // let expandSize = map(other, 0, 100, baseSize, baseSize + i * 1);

  // fill(100);
  // rect(centerX - i * 50, centerY, expandSize, expandSize);
  // rect(centerX + i * 50, centerY, expandSize, expandSize);

  // rect(centerX, centerY, 25, 25)
  
  
  // }

  
  

 


 
  

