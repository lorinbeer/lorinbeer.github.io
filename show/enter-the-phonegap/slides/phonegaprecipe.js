
// Native Platform Project
new Rect(100,100,750,450)
.attr({strokeColor:'white',
       fillColor:color.parse('#31527f'),
      strokeWidth:5})
.addTo(stage);

// An App Window

// Chromeless browser instance
new Rect(150,150,690,390)
.attr({strokeColor:'white',
       fillColor:color.parse('#a1b8d6'),
      strokeWidth:5})
.addTo(stage);

new Text('Native Application Wrapper')
.attr({x: -800,
       y: 110,
       textFillColor : 'white',
       fontFamily: 'Arial, sans-serif',
       fontSize:'30'})
.animate('1.0s',{x: 150,
               y: 110}, {easing: 'expoIn'})
.addTo(stage);

new Text('The PhoneGap Recipe')
.attr({x: 800,
       y: 1000,
       textFillColor : 'white',
       fontFamily: 'Arial, sans-serif',
       fontSize:'50'})
.animate('1.0s',{x: 500,
               y: 700}, {easing: 'expoIn'})
.addTo(stage);



new Text('Cordova/PhoneGap')
.attr({x: -800,
       y: 110,
       textFillColor : 'white',
       fontFamily: 'Arial, sans-serif',
       fontSize:'30'})
.animate('1.0s',{x: 170,
               y: 190}, {easing: 'expoIn' })
.addTo(stage);

new Rect(275,375,200,100)
.attr({fillColor:'white'})
.addTo(stage);

new Text('Your Web App')
.attr({x: -800,
       y: 110,
       textFillColor : 'white',
       fontFamily: 'Arial, sans-serif',
       fontSize:'30'})
.animate('3.0s', {x:200, y: 320},{easing:'expoIn',delay:'5s'})
.addTo(stage);


new Bitmap('../assets/html5.png')
.attr({x: 600, y: -100})
.animate(new KeyframeAnimation('10s',{
'0%': {x:-100, y:600, easing:'expoOut'},
'30%': {x:100, y:600, easing: 'expoOut'},
'70%': {x:100, y:600, easing: 'expoOut'},
'100%': {x:300, y:400, easing: 'expoOut'},
},{ easing:'expoOut', delay: '5s'}))
.addTo(stage);


new Bitmap('../assets/css.png')
.attr({x: 600, y: -100})
.animate(new KeyframeAnimation('10s',{
'0%': {x:-100, y:590, easing:'expoOut'},
'30%': {x:125, y:590, easing: 'expoOut'},
'70%': {x:125, y:590, easing: 'expoOut'},
'100%': {x:325, y:390, easing: 'expoOut'},
},{ easing:'expoOut', delay: '5s'}))
.addTo(stage);

new Bitmap('../assets/js.png')
.attr({x: 600, y: -100})
.animate(new KeyframeAnimation('10s',{
'0%': {x:-1000, y:603, easing:'expoOut'},
'30%': {x:200, y:603, easing: 'expoOut'},
'70%': {x:200, y:603, easing: 'expoOut'},
'100%': {x:400, y:403, easing: 'expoOut'},
},{ easing:'expoOut',  delay: '5s'}))
.addTo(stage);
