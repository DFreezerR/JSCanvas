var screen = document.getElementById('screen');
screen.width = window.innerWidth;
screen.height = window.innerHeight;
var ctx = screen.getContext('2d');
const fps = 6000;
ctx.fillStyle = "cyan";
const circle = Math.PI * 2;



var n = 10;
var c = 1.5;
var angle = 137.5;



window.main = function ()
{
	var a = n*angle;

	var r = c * Math.sqrt(n);
	var x = r*Math.cos(a)+screen.width/2;
	var y = r*Math.sin(a)+screen.height/2;

	ctx.beginPath();
	ctx.arc(x,y,1,0,circle);
	ctx.fill();
		
	//angle = intRandom(-1000,1000);
    n++;
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

