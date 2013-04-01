

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

addText('What we need (want) is...', -300, 100, 100, 100);

addText('Mature Publishing Framework',-300,-300, 100, 200);

addText('Advanced Tooling', 1000, 1000, 200, 300);

addText('easy to learn, but powerful and expressive',1000,1000,100,400);

addText('fun to use',1000,-100, 200, 500);

addText('Crossplatform', 800, -200, 300, 600);

addTText('proven method of writing complex apps', 1000,  -100, 300,350);
