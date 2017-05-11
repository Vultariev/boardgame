      var canvas = document.getElementById("theCanvas");
      var ctx = canvas.getContext("2d");
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
      var xp = 0;
      var yp = 0;
      function reset()
      {
        fill("#FFFFFF");
        rect(0,0,400,400);
        xp = 0;
        yp = 0;
        fill("#FF0000");
        rect(xp,yp,10,10);
      }
      function right()
      {
        fill("#FFFFFF");
        rect(xp,yp,10,10);
        if(xp < 400-10)
        {
          xp += 10;
        }
        fill("#FF0000");
        rect(xp,yp,10,10);
      }
      function left()
      {
        fill("#FFFFFF");
        rect(xp,yp,10,10);
        if(xp > 0)
        {
          xp += -10;
        }
        fill("#FF0000");
        rect(xp,yp,10,10);
      }
      function up()
      {
        fill("#FFFFFF");
        rect(xp,yp,10,10);
        if(yp < 400-10)
        {
          yp += 10;
        }
        fill("#FF0000");
        rect(xp,yp,10,10);
      }
      function down()
      {
        fill("#FFFFFF");
        rect(xp,yp,10,10);
        if(yp > 0)
        {
          yp += -10;
        }
        fill("#FF0000");
        rect(xp,yp,10,10);
      }
      function move(e)
      {
        var keynum;
        if(window.event) { // IE
          keynum = e.keyCode;
        } else if(e.which){ // Netscape/Firefox/Opera
          keynum = e.which;
        }
        keynum = String.fromCharCode(keynum);
        if(keynum === "w")
        {
          down();
        }
        else if(keynum === "s") {
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
      reset();
