var drawing=[];
var drawingnow=false;
var currentPath=[];

function setup() {
 canvas = createCanvas(1300, 550);
 database= firebase.database();
canvas.mousePressed(start);
canvas.mouseReleased(end);
buttons = new Buttons();
  buttons.display();
}

function draw() {
 background("yellow");
if (drawingnow){
 var point={
  x:mouseX,
  y:mouseY
 }
  currentPath.push(point);
}
strokeWeight(5)
noFill();
stroke("teal")
for(var i=0; i<drawing.length;i++){
 var path=drawing[i];

 beginShape();
 for(var j=0;j<path.length;j++){
 vertex(path[j].x,path[j].y);
 }
 endShape();
}
buttons.button1.mousePressed(() => {
 SaveTheDrawing();
  
});
buttons.button2.mousePressed(() => {
ClearTheDrawing();

});

}
function start(){
  drawingnow=true;
  currentPath=[];
  drawing.push(currentPath)
}
function end(){
  drawingnow=false;
}
function SaveTheDrawing(){
  var ref = database.ref('drawing');
  var data={
      name: "Shashin",
      drawing :drawing
  }
  var result = ref.push(data,dataSent);
  console.log(result.key);

  function dataSent(status){
    console.log(status);
  }
}
function ClearTheDrawing(){
  drawing=[];
  var ref = database.ref('drawing');
  ref.remove();
}


