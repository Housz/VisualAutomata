var mycanvas = document.getElementById("mycanvas");
var ctx = mycanvas.getContext("2d");

const WIDTH  = 1500;
const HEIGHT = 800;

const TIME_STEP = 0.1;
const G = 10;

var Ball = 
{
    x: 0,
    y: 0,
    vx: 10,
    vy: 10,
    radius: 25,
    color: 'blue',
    draw: function() 
    {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}



var init = function ()
{
    mycanvas.width = WIDTH;
    mycanvas.height = HEIGHT;
}

var draw = function ()
{
    window.requestAnimationFrame(simulation);
}


var clear_canvas = function ()
{
    ctx.clearRect(0, 0, mycanvas.width, mycanvas.height);
}


var simulation = function () 
{
    clear_canvas();

    Ball.vy += TIME_STEP * G;

    Ball.x += TIME_STEP * Ball.vx;
    Ball.y += TIME_STEP * Ball.vy;

    if (Ball.y > mycanvas.height || Ball.y < 0) 
    {
        Ball.vy = -Ball.vy;
    }
    if (Ball.x > mycanvas.width  || Ball.x < 0) 
    {
        Ball.vx = -Ball.vx;
    }

    Ball.draw();


   window.requestAnimationFrame(simulation);
}


init();
draw();