var canvasdim = {w:1024,h:768};

function next(theta) {
  var radius = 200;
  var deltatheta = -10*Math.PI/180;
console.log('theta: ',theta);
  nTheta = theta+deltatheta;
  var nX = radius * Math.cos(theta) + 200;
  var nY = radius * Math.sin(theta) + 200;
  moon.animate('1s',{x : nX, y : nY},{onEnd: function() {next(nTheta);}});


}

var sky = new Circle(-100,0,780,780)
.fill("white")
.animate('2s',{fillColor: "grey",x:470,y:30})
.addTo(stage);

var hill = new Ellipse(canvasdim.w/2+5, canvasdim.h/2 +105,0,0)
               .fill("#789732")
               .animate('1s',{radiusX:1000, radiusY:250, easing: "expoInOut"})
               .addTo(stage);

var moon = new Bitmap('../assets/moon.png')
.animate('1s',{x:20,y:30},{onEnd: function() {next(100);}})
.addTo(stage);

new Bitmap('../assets/rip/meego.png').on('load', function() {
  this.attr({width:100, height:100})
.addTo(stage)
.animate('1s',{x:250,y:250});
});

new Bitmap('../assets/rip/webos.png').on('load', function() {
  this.attr({width:80, height:80})
.addTo(stage)
.animate('1s',{x:150,y:200});
});

new Bitmap('../assets/rip/symbian.png').on('load', function() {
  this.attr({width:90, height:90})
.addTo(stage)
.animate('1s',{x:40,y:225});
});

new Bitmap('../assets/rip/windowsmobile.png').on('load', function() {
  this.attr({width:110, height:110})
.addTo(stage)
.animate('1s',{x:100,y:275});
});
