

new Rect(0,0,1024,768)
.attr({fillColor: 'white'})
.addTo(stage);


new Bitmap('../assets/contributers/adobe.jpg')
.attr({x:-350,y:50})
.animate('10s', {x: -100, y: 50}, {easing:'expoIn'})
.addTo(stage);


new Bitmap('../assets/contributers/google.png')
.attr({x:1000,y:50})
.animate('1s', {x: 240, y: 145}, {easing:'expoIn'})
.addTo(stage);


new Bitmap('../assets/contributers/ibm.png')
.attr({x:140,y:-200})
.animate('1s', {x: 140, y: 450}, {easing:'expoIn'})
.addTo(stage);


new Bitmap('../assets/contributers/intel.png')
.attr({x:1000,y:450})
.animate('1s', {x: 620, y: 50}, {easing:'expoIn'})
.addTo(stage);


new Bitmap('../assets/contributers/rim.jpg')
.attr({x:1000,y:450})
.animate('5s', {x: 600, y:450}, {easing:'expoOut'})
.addTo(stage);

