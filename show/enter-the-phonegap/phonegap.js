var js = new Rect(0, 0, 100, 100).fill("green").addTo(stage);

var css = new Rect(0, 0, 100, 100).fill("red").addTo(stage);

var html = new Rect(0, 0, 100, 100).fill("blue").addTo(stage);

var jskeyanim = new KeyframeAnimation('5s', {
   '0%'  : { x: 0, y: 0, easing : 'quartOut' },
   '50%' : { x: 50, y:0, easing : 'quartOut'  },
   '75%' : { x: 50, y:0 } ,
   '100%': { x: 100, y: 100, easing : 'quartOut'}
});

var csskeyanim = new KeyframeAnimation('5s', {
   '0%'  : { x: 0, y: 0, easing : 'quartOut' },
   '50%' : { x: 200, y:0, easing : 'quartOut'  },
   '75%' : { x: 200, y:0 } ,
   '100%': { x: 120, y: 120, easing : 'quartOut'}
});

var htmlkeyanim = new KeyframeAnimation('5s', {
   '0%'  : { x: 0, y: 0, easing : 'quartOut' },
   '50%' : { x: 350, y:0, easing : 'quartOut'  },
   '75%' : { x: 350, y:0 } ,
   '100%': { x: 140, y: 140, easing : 'quartOut'}
});

js.animate(jskeyanim);
css.animate(csskeyanim);
html.animate(htmlkeyanim);

