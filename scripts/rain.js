var screen = document.getElementById('screen');
var ctx = screen.getContext('2d');
var numberOfDrops =5000; 
var fps = 60;
screen.width = window.innerWidth;
screen.height = window.innerHeight;
ctx.fillStyle = "cyan";

class Drop
{
    constructor() 
    {
        this.x = intRandom(0,screen.width);
        this.y = intRandom(-1000,-100);
        this.z = intRandom(1,1000);
        if (this.z>500)
        {
            this.z = this.z/10;

        }
        this.length = map(this.z,1,1000,0.1,50);
        this.speed =  map(this.z,1,1000,0.5,15);
        this.wid = map(this.length,1,50,1,4);
    }

    fall()
    {
        var gravity = map(this.length,10,100,0.08,0.8);
        this.y=this.y+this.speed;
        this.speed = this.speed + gravity;
        if (this.y>screen.width)
        {
	       this.y = intRandom(-150,-50);
	       this.speed =  map(this.z,1,500,1,25);
	       this.x = intRandom(0,screen.width);
        }

    }

    show()
    {
        ctx.fillRect(this.x,this.y,this.wid,this.length);
    }

}

var d = new Array(numberOfDrops);

for (var i = 0; i < d.length; i++) 
{
	d[i] = new Drop;
}

window.main = function()
{
	ctx.clearRect(0,0,screen.width,screen.height);
	for (var i = 0; i < d.length; i++) 
	{

            d[i].show();
            d[i].fall();

	}

};

setInterval(main,1000/fps);



//------------------------------------------------------------------------------
//-------------------------------------FUNCTIONS--------------------------------
//------------------------------------------------------------------------------



//Just a nice random function

function intRandom(min,max)
{
 return Math.floor(Math.random()*(max-Math.abs(min)+1))+min;

}

//Re-maps a number from one range to another.

function map(value, start1, stop1, start2, stop2) 
{
    return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
}
