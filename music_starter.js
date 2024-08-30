
// vocal, drum, bass, and other are volumes ranging from 0 to 100
let frameCounter = 0; //global counter to keep track of frames
let currentSection = 1; //variable to keep track of the current section

function draw() {
  if (currentSection === 1) {
  if (frameCounter < 1300) {
    draw_one_frame(/*parameters */);
    frameCounter++;
  } else {
    frameCounter = 0; //reset frame counter for next section
    currectSection = 2; //move to next section
  }
  }
}

// function draw() {
//   if (currentSection === 1) {
//     if (frameCounter < 1300) {
//       draw_one_frame(/* parameters */);
//       frameCounter++;
//     } else {
//       frameCounter = 0; // Reset the frame counter for the next section
//       currentSection = 2; // Move to the next section
//     }
//   } else if (currentSection === 2) {
//     if (frameCounter < 1300) {
//       draw_second_section(/* parameters */);
//       frameCounter++;
//     } else {
//       frameCounter = 0; // Reset the frame counter for the next section
//       currentSection = 3; // Move to the next section
//     }
//   } else if (currentSection === 3) {
//     // Add more sections as needed
//     draw_third_section(/* parameters */);
//   }
// }

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
 

  
}

function drawWind(x, y) {
  strokeWeight(2);
  line(x + 10, y, x + 10, y + 20); // Vertical line
  line(x, y + 10, x + 20, y + 10); // Horizontal line
  line(x, y, x + 20, y + 20); // Diagonal line from top-left to bottom-right
  line(x + 20, y, x, y + 20); // Diagonal line from top-right to bottom-left
}

fill(255);
  text("Frame:" + frameCounter, 10, height - 10);
 
//  line(200,100,200,120);
//  line(190,110,210,110);
//  strokeWeight(2)
//  line(190,100,210,120);
//  line(210,100,190,120);
 




// let Circle1 = map(drum,0,100,10,150) //Drum
// let Circle2 = map(other,0,100,10,80) //Synth
// let Circle3 = map(bass,0,100,30,90) //Bass



//   ellipse(200,150,Circle2,Circle2) //Synth
// ellipse(300,300,2*Circle2,2*Circle2) //Synth
// ellipse(200,450,Circle1/1.3,Circle1/1.3 ) //Drum
// ellipse(300,600,1.5*Circle1,1.5*Circle1) //Drum
// ellipse(200,750,Circle3/1.5,Circle3/1.5) //Bass
// ellipse(300,900,Circle3,Circle3) //Bass 


  //  let bar_spacing = height / 10;
  //  let bar_height = width / 12;
  //  let bar_pos_x = width / 2;
 

  //  // vocal bar is red
  //  fill(200, 0, 0);
  //  rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
  //  fill(0);
  //  text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
  //  // drum bar is green
  //  fill(0, 200, 0);
  //  rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
  //  fill(0);
  //  text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
  //  // bass bar is blue
  //  fill(50, 50, 240);
  //  rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
  //  fill(0);
  //  text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
  //  // other bar is white
  //  fill(200, 200, 200);
  //  rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
  //  fill(0);
  //  text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
  //  fill(255, 255, 0);
 
  //  // display "words"
  //  textAlign(CENTER);
  //  textSize(vocal);
  //  text(words, width/2, height/3);