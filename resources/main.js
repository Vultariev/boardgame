var canvas = document.getElementById("theCanvas");
var ctx = canvas.getContext("2d");
var board = document.getElementById("boardImg");
function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
}
var line = function(x1,y1,x2,y2)
{
      ctx.moveTo(x1,y1);
      ctx.lineTo(x2,y2);
      ctx.stroke();
};
var fill = function(color)
{
	ctx.fillStyle = color;
};
function componentToHex(c) {
	var hex = c.toString(16);
	return hex.length == 1 ? "0" + hex : hex;
}
function rgb(r, g, b) {
	return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
function rect(x1,y1,x2,y2)
{
	ctx.fillRect(x1,y1,x2,y2);
}
function drawImage(img,x,y)
{
	ctx.drawImage(img,x,y);
}
function move(e)
{
      var keynum;
      if(window.event)
      {
            keynum = e.which;
      }
      keynum = String.fromCharCode(keynum);
      if(keynum === "w")
      {
            down();
      }
      else if(keynum === "s")
      {
            up();
      }
      else if(keynum === "a")
      {
            left();
      }
      else if(keynum === "d")
      {
            right();
      }
}
function pos(x,y)
{
	this.x = x;
	this.y = y;
}
function player(name,piece)
{
	this.pos = new pos(0,0);
	this.name = name;
	this.piece = piece;
}
window.onload = function()
{
	fill(rgb(255,255,255));
	rect(0,0,400,400);
	drawImage(board,0,0);
};
