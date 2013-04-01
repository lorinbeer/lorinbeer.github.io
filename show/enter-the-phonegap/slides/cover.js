function addText(text,sx,sy,dx,dy,t,fs) {
    new Text(text)
        .attr({x: sx,
               y: sy,
               textFillColor : 'black',
               fontFamily: 'Arial, sans-serif',
               fontSize:fs})
        .animate(t,{x: dx,
                    y: dy }, {
                    easing: 'expoOut'
                    })
        .addTo(stage);
}

new Rect(0,0,1100,800)
.attr({fillColor:'white'})
.addTo(stage);

new Bitmap('../assets/logo-phonegap.png')
.attr({x:-300, y: 75})
.animate('1.5s',{x:50, y:75})
.addTo(stage);

addText('Enter The', 1400, 50, 50, 25, '0.5s', '60');
addText('Lorin Beer', 500, 800, 500, 500,'2s', '35');
addText('@doggerelverse', 500, 800, 500, 550,'2s', '35');
addText('www.ensufire.com', 500, 800, 500, 600,'2s','35');
