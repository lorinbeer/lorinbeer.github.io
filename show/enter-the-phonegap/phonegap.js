var frame1delta = '1s';
var js = new Rect(0, 0, 100, 100).fill("green").addTo(stage);
var css = new Rect(0, 0, 100, 100).fill("red").addTo(stage);
var html = new Rect(0, 0, 100, 100).fill("blue").addTo(stage);

var container = new Rect(90,60,160,190).stroke('white','5');

var text1 = new Text('Your Web App').attr({
  fontFamily: 'Arial, serif',
  fontSize: '30',
  textFillColor: 'black',
  textStrokeColor: 'black',
  textStrokeWidth: 1,
  x : 0,
  y : 65
});

function htmlsequence2() {
  container.addTo(stage).animate('2s',{strokeColor:'black'});
  text1.addTo(stage).animate('1.5s',{x:55, y:65});
  js.animate(jskeyanim2);
  css.animate(csskeyanim2);
  html.animate(htmlkeyanim2);  
}

var jskeyanim = new KeyframeAnimation(frame1delta, {
   '0%'  : { x: 0, y: 0, easing : 'quartOut' },
   '50%' : { x: 50, y:0, easing : 'quartOut'  },
   '75%' : { x: 50, y:0 } ,
   '100%': { x: 100, y: 100, easing : 'quartOut'}
});

var csskeyanim = new KeyframeAnimation(frame1delta, {
   '0%'  : { x: 0, y: 0, easing : 'quartOut' },
   '50%' : { x: 200, y:0, easing : 'quartOut'  },
   '75%' : { x: 200, y:0 } ,
   '100%': { x: 120, y: 120, easing : 'quartOut'}
});

var htmlkeyanim = new KeyframeAnimation(frame1delta, {
   '0%'  : { x: 0, y: 0, easing : 'quartOut' },
   '50%' : { x: 350, y:0, easing : 'quartOut'  },
   '75%' : { x: 350, y:0 } ,
   '100%': { x: 140, y: 140, easing : 'quartOut'}},
   {onEnd: function() {htmlsequence2();}}
); 

js.animate(jskeyanim);
css.animate(csskeyanim);
html.animate(htmlkeyanim);

