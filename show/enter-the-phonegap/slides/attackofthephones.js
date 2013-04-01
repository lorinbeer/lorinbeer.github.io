var ao = '../assets/devices/';

var devices = [ {url: ao+'bb-9790.png',x:10, y:10 },
                {url: ao+'bb-curve-9380.png', x:110,y: 10},
                {url: ao+'bb-z10.png', x:220, y:10},
                {url: ao+'droid-galaxy-nexus.png', x:10, y:150},
                {url: ao+'droid-htc-one-s.png', x:110, y:150},
                {url: ao+'droid-nexus7.png', x:220, y:150},
                {url: ao+'ios-iphone.png', x:220, y:300},
                {url: ao+'ios-ipad.png', x:220, y:450},
                {url: ao+'wp7-nokia-lumia 900.png', x:650, y:150},
                {url: ao+'wp7samsungfocus.png', xg:650, y:300},
                {url: ao+'wp8-Samsung-Ativ-S.png', xg:650, y:450},
];

function addPhone(img, xp, yp) {
    new Bitmap(img.url)
    .attr({x: img.x, y: img.y})
    .addTo(stage);
}

new Rect(0,0,1000,1000)
.attr({fillColor:'white'})
.addTo(stage);

for (var i = 0; i < devices.length; i=i+1) {
  addPhone(devices[i]);
}
