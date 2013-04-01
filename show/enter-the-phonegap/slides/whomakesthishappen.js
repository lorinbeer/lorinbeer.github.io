

new Rect(0,0,10240,768)
.attr({fillColor: 'white'})
.addTo(stage);


new Bitmap('../assets/contributers/adobe.jpg')
.attr({x:-100,y:50})
.animate('2s', {x: 0, y: 50})
.addTo(stage);


new Bitmap('../assets/contributers/google.png')
.attr({x:1000,y:50})
.animate('2s', {x: 375, y: 145})
.addTo(stage);


new Bitmap('../assets/contributers/ibm.png')
.animate('2s', {x: 140, y: 450})
.addTo(stage);


new Bitmap('../assets/contributers/intel.png')
.attr({x:1000,y:450})
.animate('2s', {x: 800, y: 50})
.addTo(stage);


new Bitmap('../assets/contributers/rim.jpg')
.attr({x:1000,y:450})
.animate('2s', {x: 700, y:450})
.addTo(stage);

