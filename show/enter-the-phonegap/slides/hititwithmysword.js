var canvasdim = {x:1024,y:768};
var assetdim = {x:364,y:245};

new Bitmap('../assets/hitproblem.png')
.attr({x: (canvasdim.x - assetdim.x)/2, y:(canvasdim.y-assetdim.y)/2 })
.addTo(stage);
