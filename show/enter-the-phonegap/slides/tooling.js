
function addText(text,sx,sy,dx,dy) {

    new Text(text)
        .attr({x: sx,
               y: sy,
               textFillColor : 'white',
               fontFamily: 'Arial, sans-serif',
               fontSize:'50'})
        .animate('2s',{x: dx,
                       y: dy})
        .addTo(stage);
}

addText('Cordova CLI', -300, 100, 200, 100);

addText('Cordova Docs',-300,-300, 100, 200);

addText('Cordova Mobile Spec', 1000, 1000, 200, 300);

addText('Weinre (Web Inspector Remote',1000,1000,100,400);

addText('Cordova COHO',1000,-100, 200, 500);
