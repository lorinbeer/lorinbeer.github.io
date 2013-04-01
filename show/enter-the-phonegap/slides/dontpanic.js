var canvasdim = {x:1024,y:768};
var assetdim = {x:600,y:600};

new Bitmap('../assets/dontpanic.png')
.attr({x: (canvasdim.x - assetdim.x)/2, y:(canvasdim.y-assetdim.y)/2 })
.addTo(stage);
