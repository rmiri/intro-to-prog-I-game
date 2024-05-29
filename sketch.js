let gameChar_x = 1;
let gameChar_y = 1;

function setup()	
{
	createCanvas(800, 1200);
	cat = new Cat(gameChar_x, gameChar_y);

}

function draw()
{
	background(255);	
	cat.display();
	
	// let flippedCat = new Cat(300, 100);
	// flippedCat.display(true); // Display the flipped cat

}

function mousePressed()
{
	gameChar_x = mouseX;
	gameChar_y = mouseY;
	cat = new Cat(gameChar_x, gameChar_y);
}

class Cat {
	constructor(x, y) {
	  this.x = x;
	  this.y = y;
	  this.width = 1;
	  this.height = 1;
	  this.colour = [204, 85, 0];
	}
  
	display(flip = false) {
	  noStroke();
	  
	  let xTransform = this.x;
	  if (flip) {
		xTransform = this.x + this.width;
	  }

	const multiplier = 3;

	const n35 = multiplier * 7;
	const n50 = multiplier * 10;
	const n75 = multiplier * 15;
	const n100 = multiplier * 20;
	const n105 = multiplier * 21;
	const n113 = multiplier * 22.6;
	const n125 = multiplier * 25;
	const n150 = multiplier * 30;
	const n175 = multiplier * 35;
	const n190 = multiplier * 38;
	const n200 = multiplier * 40;
	const n250 = multiplier * 50;
	const n275 = multiplier * 55;
	const n290 = multiplier * 58;
	const n300 = multiplier * 60;
	const n325 = multiplier * 65;
	const n350 = multiplier * 70;
	const n400 = multiplier * 80;

	  // Tail
	  fill(32, 32, 32);
	  if (!flip) {
		triangle(
		  xTransform + n250, this.y + n300,
		  xTransform + n250, this.y + n150,
		  xTransform + n325, this.y + n350
		);
	  } else {
		triangle(
		  xTransform - n250, this.y + n300,
		  xTransform - n250, this.y + n150,
		  xTransform - n325, this.y + n350
		);
	  }
  
	  // Body
	  fill(64, 64, 64);
	  if (!flip) {
		triangle(
		  xTransform +n190, this.y + n250,
		  xTransform + n100, this.y + n400,
		  xTransform + n300, this.y + n400
		);
		triangle(
		  xTransform +n190, this.y + n250,
		  xTransform + n300, this.y + n400,
		  xTransform + n325, this.y + n350
		);
	  } else {
		triangle(
		  xTransform -n190, this.y + n250,
		  xTransform - n100, this.y + n400,
		  xTransform - n300, this.y + n400
		);
		triangle(
		  xTransform -n190, this.y + n250,
		  xTransform - n300, this.y + n400,
		  xTransform - n325, this.y + n350
		);
	  }
  
	  fill(32, 32, 32);
	  if (!flip) {
		triangle(
		  xTransform +n190, this.y + n250,
		  xTransform + n100, this.y + n400,
		  xTransform + n100, this.y + n250
		);
	  } else {
		triangle(
		  xTransform -n190, this.y + n250,
		  xTransform - n100, this.y + n400,
		  xTransform - n100, this.y + n250
		);
	  }
  
	  // Head
	  fill(64, 64, 64);
	  if (!flip) {
		rect(xTransform + n75, this.y + n200, n75, n100);
		triangle(
		  xTransform + n75, this.y + n200,
		  xTransform + n75, this.y + n300,
		  xTransform +n50, this.y + n250
		);
		triangle(
		  xTransform +n150, this.y + n200,
		  xTransform +n150, this.y + n300,
		  xTransform +n175, this.y + n250
		);
	  } else {
		rect(xTransform - n75 - n75, this.y + n200, n75, n100);
		triangle(
		  xTransform - n75, this.y + n200,
		  xTransform - n75, this.y + n300,
		  xTransform -n50, this.y + n250
		);
		triangle(
		  xTransform -n150, this.y + n200,
		  xTransform -n150, this.y + n300,
		  xTransform -n175, this.y + n250
		);
	  }
  
	  // Mouth
	  fill(205);
	  if (!flip) {
		triangle(
		  xTransform + n75, this.y + n300,
		  xTransform + n100, this.y + n275,
		  xTransform + n125, this.y + n300
		);
		triangle(
		  xTransform +n150, this.y + n300,
		  xTransform + n105, this.y + n300,
		  xTransform + n125, this.y + n275
		);
	  } else {
		triangle(
		  xTransform - n75, this.y + n300,
		  xTransform - n100, this.y + n275,
		  xTransform - n125, this.y + n300
		);
		triangle(
		  xTransform -n150, this.y + n300,
		  xTransform - n105, this.y + n300,
		  xTransform - n125, this.y + n275
		);
	  }
  
	  fill(0);
	  if (!flip) {
		triangle(
		  xTransform + n100, this.y + n275,
		  xTransform + n125, this.y + n275,
		  xTransform + n113, this.y + n290
		);
	  } else {
		triangle(
		  xTransform - n100, this.y + n275,
		  xTransform - n125, this.y + n275,
		  xTransform - n113, this.y + n290
		);
	  }
  
	  // Left ear
	  fill(60, 60, 60);
	  if (!flip) {
		triangle(
		  xTransform + n75, this.y + n200,
		  xTransform +n50, this.y + n250,
		  xTransform + n35, this.y +n175
		);
	  } else {
		triangle(
		  xTransform - n75, this.y + n200,
		  xTransform -n50, this.y + n250,
		  xTransform - n35, this.y +n175
		);
	  }
  
	  // Right ear
	  if (!flip) {
		triangle(
		  xTransform +n150, this.y + n200,
		  xTransform +n175, this.y + n250,
		  xTransform +n190, this.y +n175
		);
	  } else {
		triangle(
		  xTransform -n150, this.y + n200,
		  xTransform -n175, this.y + n250,
		  xTransform -n190, this.y +n175
		);
	  }
	}
  }

  