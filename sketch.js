var  database;

var drawing = [];
var currentPath = [];


function setup(){
  database = firebase.database();
  console.log(database);

  createCanvas(500,500);

  canvas.mousePressed(startPath);
}  


function startPath(){
  currentPath = [];
  drawing.push(currentPath);
}


function draw(){
  background(0);
    
  if(mouseIsPressed){
    var point = {

      x: mouseX,
      y: mouseY
    }
  }


  stroke('yellow');
  strokeWeight(2);
  noFill();


  for(var i = 0; i<drawing.length; i++){
    var path = drawing[i];

    beginShape();

    for(var j = 0; j<path.length; j++){
      vertex(drawing[j].x, drawing[j].y)
    } 

    endShape(); 
  }
}