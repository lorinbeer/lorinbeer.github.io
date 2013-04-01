var canvasdim = {x: 1024, y: 768};

new Text("When a Platform Dies,")   
.attr( {fontFamily: 'Arial, sans-serif',
        fontSize: 60,
        textFillColor:'white',
        x: -50,
        y: 100
        })
.animate('0.5s', {x: 70, repeat:0})
.addTo(stage);


new Text("We Lose More")
.attr( {fontFamily: 'Arial, sans-serif',
        fontSize: 60,
        textFillColor:'white',
        x: canvasdim.y + 50,
        y: 300
        })
.animate('0.5s', {x: 70})
.addTo(stage);



new Text("Than Just Code")
.attr( {fontFamily: 'Arial, sans-serif',
        fontSize: 60,
        textFillColor:'white',
        x: canvasdim.y + 50,
        y: 300
        })
.animate('0.5s', {x: 70, y: 350})
.addTo(stage);
