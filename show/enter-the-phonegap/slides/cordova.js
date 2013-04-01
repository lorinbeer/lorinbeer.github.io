var canvasdim = {x:1024,y:768};
var cordovalogo = {w:1120,h:500,url:'../assets/logo-cordova.png'};
var phonegaplogo = {w:1120,h:500,url:'../assets/logo-phonegap.png'};

function addBitmap(img,anim){
    new Bitmap(img.url)
    .attr({x: (canvasdim.x - img.w)/2, y:(canvasdim.y - img.h)/2 })
    .animate(anim)
    .addTo(stage);
}

addBitmap(cordovalogo,{});
addBitmap(phonegaplogo,{});
