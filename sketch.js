/*

The Game Project

2 - Game character

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the different states of your game character.

Write the code so that your character appears inside the box for each
state.

IMPORTANT: For each box the variables gameChar_x & gameChar_y are set to the bottom
center of the box. You must combine these variables with arithmetic to
determine the position of each shape that you draw. This will later allow
you to adjust the position of your game character.

Each state is worth two marks:

//standing front facing = 2
//jumping facing forwards = 2
//walking left = 2
//walking right = 2
//jumping left and jumping right = 2

0 marks = not a reasonable attempt
1 mark = attempted but it lacks detail and you didn't use gameChar_x and gameChar_y correctly
2 marks = you've used a selction of shape functions and made consistent use of gameChar_x and gameChar_y

WARNING: Do not get too carried away. Around 10-20 lines of code should work for each state of your game character.

*/

var gameChar_x = 0;
var gameChar_y = 0;

function setup()
{
	createCanvas(400, 600);
}

function draw()
{
	background(255);

	// boxes()
	cat(0,0)
	// grid()
	// mouse()
}

function grid()
{
	stroke(0); // Set the color of the grid lines
	strokeWeight(0.1); // Set the thickness of the grid lines
	fill(0); // Set the fill color for the text
	textSize(6); // Set the text size
  
	// Draw vertical lines
	for (let x = 0; x <= width; x += 50) {
	  line(x, 0, x, height);
	}
  
	// Draw horizontal lines
	for (let y = 0; y <= height; y += 50) {
	  line(0, y, width, y);
	}
  
	// Draw coordinates at each junction
	for (let x = 0; x <= width; x += 50) {
	  for (let y = 0; y <= height; y += 50) {
		text(`(${x}, ${y})`, x + 5, y + 15);
	  }
	}
}

function mouse()
{
	push();
		fill(0);
		noStroke();
		text(mouseX + "," + mouseY, mouseX,mouseY);
	pop();

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
		cat2(gameChar_x-15,gameChar_y-37)
	
	
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
		cat2(gameChar_x,gameChar_y)
	
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
		

}


function cat(gameChar_x,gameChar_y)
{
	noStroke();
  	// var colour = (150,150,150)
	var colour = [204,85,0]

  	// body
  	fill(colour);
  	triangle(
		gameChar_x+20,gameChar_y+25,//200,250,
		gameChar_x+10,gameChar_y+40,//100,400,
		gameChar_x+30,gameChar_y+40//300,400
	);
  	triangle(
		gameChar_x+20,gameChar_y+25,//200,250,
		gameChar_x+30,gameChar_y+40,//300,400,
		gameChar_x+32.5,gameChar_y+35//325,350
	);
  	fill(colour - 30);
	triangle(
		gameChar_x+20, gameChar_y+25,//200,250,
		gameChar_x+10, gameChar_y+40,//100,400,
		gameChar_x+10, gameChar_y+25//100,250
	);


	//tail
	tail_colour = colour.push(50)
	fill(colour);
	triangle(
		gameChar_x+26.3,gameChar_y+30, //263,300,
		gameChar_x+26.3,gameChar_y+15, //263,150,
		gameChar_x+32.5,gameChar_y+35 //325,350
	);

	//head
	fill(colour);
	rect(gameChar_x+7.5, gameChar_y+20, 7.5, 10);//75,200,75,100
	triangle(
		gameChar_x+7.5,gameChar_y+20,//75,200,
		gameChar_x+7.5,gameChar_y+30,//75,300,
		gameChar_x+5,gameChar_y+25//50,250
	);
	triangle(
		gameChar_x+15,gameChar_y+20, //150,200,
		gameChar_x+15,gameChar_y+30,//150,300,
		gameChar_x+17.5,gameChar_y+25//175,250
	);

	//mouth
	fill(255);
	triangle(
		gameChar_x+7.5,gameChar_y+30,
		gameChar_x+10,gameChar_y+27.5,
		gameChar_x+12.5,gameChar_y+30
	);
	triangle(
		gameChar_x+15,gameChar_y+30,
		gameChar_x+10.5,gameChar_y+30,
		gameChar_x+12.5,gameChar_y+27.5
	);
	fill(0);
	triangle(
		gameChar_x+10,gameChar_y+27.5,
		gameChar_x+12.5,gameChar_y+27.5,
		gameChar_x+11.3,gameChar_y+29
	);
	
	//left ear
	fill(colour - 30);
	triangle(
		gameChar_x+7.5,gameChar_y+20,
		gameChar_x+5,gameChar_y+25,
		gameChar_x+3.5,gameChar_y+17.5
	);

	//right ear
	triangle(
		gameChar_x+15,gameChar_y+20,
		gameChar_x+17.5,gameChar_y+25,
		gameChar_x+19,gameChar_y+17.5
	);
  

}
