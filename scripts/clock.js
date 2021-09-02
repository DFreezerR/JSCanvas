var screen = document.getElementById('screen');
screen.width = window.innerWidth;
screen.height = window.innerHeight;
var ctx = screen.getContext('2d');
var fps = 61;
var diameter = screen.height/3;
ctx.fillStyle = "cyan";
ctx.lineWidth = 20;
var date = new Date();
var milli = date.getMilliseconds();
var secs = date.getSeconds();
var mins = date.getMinutes();
var hours = date.getHours();
var angleMilli = map(milli, 0,1000, 0, 2*Math.PI);
var angleSecs = map(secs,0,60,0,2*Math.PI);
var angleMins = map(mins,0,59,0,2*Math.PI);
var angleHours = map(hours,0,24,0,2*Math.PI);

//90 DEG ROTATING

ctx.rotate(-90/180*Math.PI);
ctx.translate(-screen.width/1.2,screen.height/4.5);

window.main = function()
{
    date = new Date();
    milli = date.getMilliseconds();
    secs = date.getSeconds();
    mins = date.getMinutes();
    hours = date.getHours();
    angleMilli = map(milli, 0,999, 0, 2*Math.PI);
    angleSecs = map(secs, 0, 59, 0, 2*Math.PI);
    angleMins = map(mins, 0, 60, 0, 2*Math.PI);
    angleHours = map(hours, 0, 23, 0, 2*Math.PI);
    ctx.clearRect(0,0,screen.width, screen.height);
    
    
    drawClock();
    

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

//Re-maps a number from one range to another


function map(value, start1, stop1, start2, stop2) 
{
    return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
}

function drawClock()
{
    //MILLISECONDS
    
    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.arc(screen.width/2,screen.height/2, diameter+25, 0, angleMilli);
    
    ctx.stroke();
    
    //SECONDS
    
    ctx.beginPath();
    ctx.strokeStyle = "yellow";
    ctx.arc(screen.width/2,screen.height/2, diameter, 0, angleSecs);
    
    ctx.stroke();
    
    //MINUTES
    
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.arc(screen.width/2,screen.height/2, diameter-25, 0, angleMins);
    
    ctx.stroke();
    
    //HOURS
    
    ctx.beginPath();
    ctx.strokeStyle = "cyan";
    ctx.arc(screen.width/2,screen.height/2, diameter-50, 0, angleHours);
    
    ctx.stroke();  
    
    
}

