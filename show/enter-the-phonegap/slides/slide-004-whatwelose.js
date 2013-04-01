var canvasdim = {x: 1279, y: 799};

new Text("When a Platform Dies")   
.attr( {fontFamily: 'Arial, sans-serif',
        fontSize: 75,
        textFillColor:'white',
        x: -50,
        y: 100
        })
.animate('0.5s', {x: 70, repeat:0})
.addTo(stage);


new Text("We Lose More Than Just Code")
.attr( {fontFamily: 'Arial, sans-serif',
        fontSize: 75,
        textFillColor:'white',
        x: canvasdim.y + 50,
        y: 300
        })
.animate('0.5s', {x: 70})
.addTo(stage);
