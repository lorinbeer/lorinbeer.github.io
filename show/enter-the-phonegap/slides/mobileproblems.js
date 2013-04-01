var canvasdim = {x: 1024, y: 768};
var longshanksdim = {x: 886, y: 574};
var longshankspath = '../assets/longshanks.png';

new Bitmap(longshankspath)
.on('load', 
    function() {
        this.attr({ width : longshanksdim.x, 
                    height: longshanksdim.y,
                    opacity: 0.0,
                    x : (canvasdim.x - longshanksdim.x) / 2,
                    y : (canvasdim.y - longshanksdim.y) / 2 })
                    .addTo(stage)
                    .animate('0.5s',{opacity:1.0});
});

new Text('The Problem with Mobile Development') 
.attr({x : -200,
       y : 50,
       fontFamily: 'Arial, sans-serif',
       fontSize: '50',
       textFillColor: 'white'
      })
.animate('1.0s',{x : 80})
.addTo(stage);

new Text('is all the Devices')
.attr({x : canvasdim.x + 200,
       y : canvasdim.y - 80,
       fontFamily: 'Arial, sans-serif',
       fontSize: '50',
       textFillColor: 'white'
      })
.animate('1.0s',{x : 80})
.addTo(stage);
