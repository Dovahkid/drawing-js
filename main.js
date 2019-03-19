var colorChoice = 'lightblue';
var drawSize = 20;
var shapeChoice = 'circle';

(function()
{
  'use strict';
  paper.install(window);
  paper.setup(document.getElementById('mainCanvas'));

  var tool = new Tool();
  var drawToCanvas = event =>
  {
    let pnt = new Point(             // This is only
      event.point.x - (drawSize/2),  // used for the
      event.point.y - (drawSize/2)); // rectangle

    let c = shapeChoice === 'circle' ?        // This is a ternary
      Shape.Circle(event.point, drawSize/2) : // operator to decide
      Shape.Rectangle(pnt, drawSize); // to draw rectangle or circle

    c.fillColor = colorChoice;
  }

  tool.onMouseDrag = function(event){drawToCanvas(event);} // When mouse is dragged
  tool.onMouseDown = function(event){drawToCanvas(event);} // when mouse is clicked

  paper.view.draw();
}())

function ColorPick(color)
{
  switch(color)
  {
    case 'lb':
      colorChoice = 'lightblue';
      break;

    case 'lg':
      colorChoice = 'lightgreen';
      break;

    case 'lr':
      colorChoice = 'pink';
      break;

    case 'wh':
      colorChoice = 'white';
      break;

    case 'bl':
      colorChoice = 'black';
      break;

    default:
      colorChoice = 'lightblue';
      break;

  }
}

function drawSizeSet(size)
{
    switch(size)
    {
      case 5:
        drawSize = 5;
        break;

      case 10:
        drawSize = 10;
        break;

      case 20:
        drawSize = 20;
        break;

      case 30:
        drawSize = 30;
        break;

      case 40:
        drawSize = 40;
        break;

      default:
        drawSize = 20;
        break;
    }
}

function prjClear()
{
  project.clear();
  paper.view.draw();
}

function finClear()
{
  document.getElementById('imgLocation').innerHTML = "";
}

function createPNG()
{
  finClear();

  let canvas = document.getElementById('mainCanvas');
  let img = new Image();
  img.src = canvas.toDataURL();
  document.getElementById('imgLocation').innerHTML =
    "<a href='"+img.src+"' download><img src='"+img.src+"'></a>";
}
