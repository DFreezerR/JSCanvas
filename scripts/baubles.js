var screen = document.getElementById('screen');
screen.width = window.innerWidth;
screen.height = window.innerHeight;
var ctx = screen.getContext('2d');
const fps = 60;
ctx.strokeStyle = "cyan";
var numberOfBaubles = 50;
const circle = Math.PI * 2;

class Bauble
{
    constructor()
    {
        this.x = intRandom(0, screen.width);
        this.y = intRandom(0, screen.height);
        this.d = 0;
        this.speed = intRandom(0.5, 5);


    }

    draw()
    {
        this.d = this.d + this.speed;
        this.lineW = map(this.d, 0, 1000, 1, 100);
        ctx.lineWidth = this.lineW;
        if (this.d > screen.width / 10)
        {
            this.x = intRandom(0, screen.width);
            this.y = intRandom(0, screen.height);
            this.d = 0;
            this.speed = intRandom(0.5, 5);
            numberOfBaubles = numberOfBaubles + 1;

        }

    }

    show()
    {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.d, 0, circle);
        ctx.stroke();
    }

}

var b = new Array(numberOfBaubles);

for (var i = 0; i < b.length; i++)
{
    b[i] = new Bauble;
}


window.main = function ()
{

    ctx.clearRect(0, 0, screen.width, screen.height);

    for (var i = 0; i < b.length; i++)
    {
       // document.addEventListener("keydown", b[i].draw());
        //document.addEventListener("keydown", b[i].show());
        b[i].draw();
        b[i].show();

    }
};

setInterval(main, 1000 / fps);

//------------------------------------------------------------------------------
//-------------------------------------FUNCTIONS--------------------------------
//------------------------------------------------------------------------------



//Just a nice random function

function intRandom(min, max)
{
    return Math.floor(Math.random() * (max - Math.abs(min) + 1)) + min;

}

//Re-maps a number from one range to another


function map(value, start1, stop1, start2, stop2)
{
    return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
}

