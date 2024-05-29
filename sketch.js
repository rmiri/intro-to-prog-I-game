
var gameChar_x = 100;
var gameChar_y = 0;

function setup()
{
	createCanvas(400, 600);
}

function draw()
{
	background(255);

	boxes()

	// let cat = new Cat(100, 100);
	
	// cat.display();
	
	// let flippedCat = new Cat(300, 100);
	// flippedCat.display(true); // Display the flipped cat

	// cat(0,0)
	// grid()
	// mouse()
}

function boxes()
{
		//Standing, facing frontwards

		stroke(100);
		noFill();
		rect(20, 60, 50, 80);
		noStroke();
		fill(0);
		text("1. standing front facing", 20, 160);
	
		gameChar_x = 45;
		gameChar_y = 137;
		//Add your code here ...
		// cat(gameChar_x-15,gameChar_y-37);
		let cat = new Cat(gameChar_x - 15, gameChar_y-37);
		cat.display();
	
	
		//Jumping facing forwards
		stroke(100);
		noFill();
		rect(220, 60, 50, 80);
		noStroke();
		fill(0);
		text("2. jumping facing forwards", 220, 160);
	
		gameChar_x = 245;
		gameChar_y = 137;
		//Add your code here ...
		let cat_jumping = new Cat(gameChar_x - 15, gameChar_y-77);
		cat_jumping.display();

	
		//Walking, turned left
		stroke(100);
		noFill();
		rect(20, 260, 50, 80);
		noStroke();
		fill(0);
		text("3. Walking left", 20, 360);
	
		gameChar_x = 45;
		gameChar_y = 337;
		//Add your code here ...
		let cat_left = new Cat(gameChar_x - 27, gameChar_y-37);
		cat_left.display();
	
		//Walking, turned right
		stroke(100);
		noFill();
		rect(220, 260, 50, 80);
		noStroke();
		fill(0);
		text("4. Walking right", 220, 360);
	
		gameChar_x = 245;
		gameChar_y = 337;
		//Add your code here ...
		let cat_right = new Cat(gameChar_x - 25, gameChar_y-37);
		cat_right.display(true);
		
	
		//Jumping right
		stroke(100);
		noFill();
		rect(20, 460, 50, 80);
		noStroke();
		fill(0);
		text("5. Jumping to the right", 20, 560);
	
		gameChar_x = 45;
		gameChar_y = 537;
		//Add your code here ...
		let cat_jumping_right = new Cat(gameChar_x - 25, gameChar_y-77);
		cat_jumping_right.display(true);
	
	
		//Jumping to the left
		stroke(100);
		noFill();
		rect(220, 460, 50, 80);
		noStroke();
		fill(0);
		text("6. Jumping to the left", 220, 560);
	
		gameChar_x = 245;
		gameChar_y = 537;
		//Add your code here ...
		let cat_jumping_left = new Cat(gameChar_x - 25, gameChar_y-77);
		cat_jumping_left.display();
		

}

class Cat {
	constructor(x, y) {
	  this.x = x;
	  this.y = y;
	  this.width = 50;
	  this.height = 50;
	  this.colour = [204, 85, 0];
	}
  
	display(flip = false) {
	  noStroke();
	  
	  let xTransform = this.x;
	  if (flip) {
		xTransform = this.x + this.width;
	  }
  
	  // Tail
	  fill(32, 32, 32);
	  if (!flip) {
		triangle(
		  xTransform + 25, this.y + 30,
		  xTransform + 25, this.y + 15,
		  xTransform + 32.5, this.y + 35
		);
	  } else {
		triangle(
		  xTransform - 25, this.y + 30,
		  xTransform - 25, this.y + 15,
		  xTransform - 32.5, this.y + 35
		);
	  }
  
	  // Body
	  fill(64, 64, 64);
	  if (!flip) {
		triangle(
		  xTransform + 19, this.y + 25,
		  xTransform + 10, this.y + 40,
		  xTransform + 30, this.y + 40
		);
		triangle(
		  xTransform + 19, this.y + 25,
		  xTransform + 30, this.y + 40,
		  xTransform + 32.5, this.y + 35
		);
	  } else {
		triangle(
		  xTransform - 19, this.y + 25,
		  xTransform - 10, this.y + 40,
		  xTransform - 30, this.y + 40
		);
		triangle(
		  xTransform - 19, this.y + 25,
		  xTransform - 30, this.y + 40,
		  xTransform - 32.5, this.y + 35
		);
	  }
  
	  fill(32, 32, 32);
	  if (!flip) {
		triangle(
		  xTransform + 19, this.y + 25,
		  xTransform + 10, this.y + 40,
		  xTransform + 10, this.y + 25
		);
	  } else {
		triangle(
		  xTransform - 19, this.y + 25,
		  xTransform - 10, this.y + 40,
		  xTransform - 10, this.y + 25
		);
	  }
  
	  // Head
	  fill(64, 64, 64);
	  if (!flip) {
		rect(xTransform + 7.5, this.y + 20, 7.5, 10);
		triangle(
		  xTransform + 7.5, this.y + 20,
		  xTransform + 7.5, this.y + 30,
		  xTransform + 5, this.y + 25
		);
		triangle(
		  xTransform + 15, this.y + 20,
		  xTransform + 15, this.y + 30,
		  xTransform + 17.5, this.y + 25
		);
	  } else {
		rect(xTransform - 7.5 - 7.5, this.y + 20, 7.5, 10);
		triangle(
		  xTransform - 7.5, this.y + 20,
		  xTransform - 7.5, this.y + 30,
		  xTransform - 5, this.y + 25
		);
		triangle(
		  xTransform - 15, this.y + 20,
		  xTransform - 15, this.y + 30,
		  xTransform - 17.5, this.y + 25
		);
	  }
  
	  // Mouth
	  fill(255);
	  if (!flip) {
		triangle(
		  xTransform + 7.5, this.y + 30,
		  xTransform + 10, this.y + 27.5,
		  xTransform + 12.5, this.y + 30
		);
		triangle(
		  xTransform + 15, this.y + 30,
		  xTransform + 10.5, this.y + 30,
		  xTransform + 12.5, this.y + 27.5
		);
	  } else {
		triangle(
		  xTransform - 7.5, this.y + 30,
		  xTransform - 10, this.y + 27.5,
		  xTransform - 12.5, this.y + 30
		);
		triangle(
		  xTransform - 15, this.y + 30,
		  xTransform - 10.5, this.y + 30,
		  xTransform - 12.5, this.y + 27.5
		);
	  }
  
	  fill(0);
	  if (!flip) {
		triangle(
		  xTransform + 10, this.y + 27.5,
		  xTransform + 12.5, this.y + 27.5,
		  xTransform + 11.3, this.y + 29
		);
	  } else {
		triangle(
		  xTransform - 10, this.y + 27.5,
		  xTransform - 12.5, this.y + 27.5,
		  xTransform - 11.3, this.y + 29
		);
	  }
  
	  // Left ear
	  fill(60, 60, 60);
	  if (!flip) {
		triangle(
		  xTransform + 7.5, this.y + 20,
		  xTransform + 5, this.y + 25,
		  xTransform + 3.5, this.y + 17.5
		);
	  } else {
		triangle(
		  xTransform - 7.5, this.y + 20,
		  xTransform - 5, this.y + 25,
		  xTransform - 3.5, this.y + 17.5
		);
	  }
  
	  // Right ear
	  if (!flip) {
		triangle(
		  xTransform + 15, this.y + 20,
		  xTransform + 17.5, this.y + 25,
		  xTransform + 19, this.y + 17.5
		);
	  } else {
		triangle(
		  xTransform - 15, this.y + 20,
		  xTransform - 17.5, this.y + 25,
		  xTransform - 19, this.y + 17.5
		);
	  }
	}
  }
  