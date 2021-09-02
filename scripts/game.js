"use strict";
var screen = document.getElementById('screen');
screen.width = window.innerWidth;
screen.height = window.innerHeight;
var ctx = screen.getContext('2d');
ctx.fillStyle = "yellow";
const fps = 600;
var playerX = screen.width/2;
var playerY = screen.height/2;
var playerHeight = 20;
var playerWidth = 20;
var KeyW = false;
var KeyS = false;
var KeyA = false;
var KeyD = false;
var KeyF = false;
var directions = {"none":1, "up":2,"down":3,"left":4,"right":5};
var playerDirection = directions.none;
var circle = 2*Math.PI;
var score = 0;

var xy = 
{
	x: playerX,
	y: playerY

};
var coords = [];

var playerCreate = function()
{
	//ctx.clearRect(0,0,screen.width,screen.height);
	rect(playerX,playerY,playerHeight,playerWidth);


}

document.addEventListener("keydown", function(e)
{
	switch(e.code)
	{
		case "KeyW": playerDirection=directions.up;
		break;
		case "KeyS": playerDirection=directions.down;
		break;
		case "KeyA": playerDirection=directions.left;
		break;
		case "KeyD": playerDirection=directions.right;
		break;
	}
});

/*document.addEventListener("keyup", function(e)
{
	switch(e.code)
	{
		case "KeyW": KeyW = false;
		break;
		case "KeyS": KeyS = false;
		break;
		case "KeyA": KeyA = false;
		break;
		case "KeyD": KeyD = false;
		break;
	}
});*/


var playerMoving = function()
{
	switch(playerDirection)
	{
		case directions.up: playerY--;
		break;
		case directions.down: playerY++;
		break;
		case directions.left: playerX--;
		break;
		case directions.right: playerX++;
		break;
	}



	xy = 
	{
	x: playerX,
	y: playerY

	};
		coords.push(xy);
		score = coords.length;
		console.log(score);
coords.forEach(function(xy)
	{
		if (xy.x==playerX&&xy.y==playerY) 
		{
			//alert('GAMEOVER');

		}

	});

}

window.main = function ()
{
	
	playerCreate();
	playerMoving();


};

setInterval(main, 1000 / fps);

//------------------------------------------------------------------------------
//-------------------------------------FUNCTIONS--------------------------------
//------------------------------------------------------------------------------



//Just a nice random function

function intRandom(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;

}

//Re-maps a number from one range to another


function map(value, start1, stop1, start2, stop2)
{
    return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
}

function rect(startx,starty,x,y)
{
	return ctx.fillRect(startx,starty,x,y);
}