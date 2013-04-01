

function addText(text,sx,sy,dx,dy,t,fs) {
    new Text(text)
        .attr({x: sx,
               y: sy,
               textFillColor : 'white',
               fontFamily: 'Arial, sans-serif',
               fontSize:fs})
        .animate(t,{x: dx,
                    y: dy }, {
                    easing: 'expoOut'
                    })
        .addTo(stage);
}

// background rect
new Rect(1200,800,-10,-10)
.addTo(stage);

new Bitmap('../assets/lorinbeer.jpg')
.addTo(stage);

addText('Lorin Beer', 1400,20, 750, 20, '0.5s', '50');

addText('Software Developer at Adobe',500,1000, 500, 150,'1s','30');

addText('Apache Commiter', 500, 1000, 500, 225,'1s','30');

addText('PhoneGap/Cordova Contributor:',500,1000,500,300,'1s','30');
addText('iOS, Android, Blackberry',550,1000,550,340,'1s','30');
addText('MobileSpec, Docs',550,1000,550,380,'1s','30');

addText('Pender Project:' , 500, 1000, 500, 450,'1s','30');
addText('Mobile Accelerated Canvas', 550, 1000, 550, 480,'1s','30');

addText('@doggerelverse', 500, -500, 500, 550,'2s','28');
addText('www.ensufire.com',500, -500, 500, 600, '2s', '28');
