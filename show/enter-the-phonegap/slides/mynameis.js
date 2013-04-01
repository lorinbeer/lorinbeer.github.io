

function addText(text,sx,sy,dx,dy,t) {
    new Text(text)
        .attr({x: sx,
               y: sy,
               textFillColor : 'white',
               fontFamily: 'Arial, sans-serif',
               fontSize:'50'})
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

addText('Lorin Beer', 1400, 25, 1000, 25, '0.5s');
/*
addText('Software Developer at Adobe Systems',-300,-300, 100, 200);

addText('Apache Commiter on the PhoneGap/Cordova Project', 1000, 1000, 200, 300);

addText('Cordova Contributor: iOS, Android, Blackberry, MobileSpec, Docs',1000,1000,100,400);

addText('Pender Project: Hardware Accelerated Canvas on Mobile',1000,-100, 200, 500);
*/
