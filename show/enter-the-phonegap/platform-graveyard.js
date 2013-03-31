function next(x,y) {
  var radius = 100;
  var deltatheta = 5;
  var theta = Math.acos(x/100);
  theta = theta+deltatheta;
  nX = radius * Math.cos(theta);
  nY = radius * Math.sin(theta);
  console.log(nX,nY)
  moon.animate('1s',{x:nX,y:nY},{onEnd: function() {next(nX,nY);}});
}
function except() {}

var sky = new Circle(-100,0,500,500)
.fill("white")
.animate('3s',{fillColor: "grey",x:300, y:30})
.addTo(stage);

var hill = new Ellipse(300,450, 0,20)
               .fill("green")
               .animate('1s',{radiusX:500, radiusY:200, easing: "expoInOut"})
               .addTo(stage);

var moon = new Circle(-10,-10,40,40)
.fill('white')
.animate('1s',{x:20,y:30},{onEnd: function() {next(20,30);}})
.addTo(stage);


//var meegorib = new Rect(100,150,100,100).fill("red").animate('3s',{x:10}).addTo(stage);


