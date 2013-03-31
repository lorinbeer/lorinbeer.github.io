bonsai.run(document.getElementById('movie'), {
code: function() {
function next(theta) {
  var radius = 200;
  var deltatheta = -10*Math.PI/180;
console.log('theta: ',theta);
  nTheta = theta+deltatheta;
  var nX = radius * Math.cos(theta) + 200;
  var nY = radius * Math.sin(theta) + 200;
  moon.animate('1s',{x : nX, y : nY},{onEnd: function() {next(nTheta);}});


}

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
.animate('1s',{x:20,y:30},{onEnd: function() {next(100);}})
.addTo(stage);
},width:400,height:400});


