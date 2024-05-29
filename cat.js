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