var canvasdim = {x:1024,y:768};
var assetdim = {x:800,y:457};

new Bitmap('../assets/browsers.jpeg')
.attr({x: (canvasdim.x - assetdim.x)/2, y:(canvasdim.y-assetdim.y)/2 })
.addTo(stage);

