var canvasdim = {x: 1279, y: 799};
var longshanksdim = {x: 886, y: 574};
var longshankspath = '../assets/longshanks.png';

var subMovie;
var csi = 1;
var slides = stage.options.initialData1;

console.log(slides[0]);
var t = new Movie(slides[0]);
stage.addChild(t);

stage.on('key', function(e) {
    console.log("Slide Number",csi, "of",slides);
    stage.clear();
    var movie = new Movie(slides[csi]);
    stage.addChild(movie);
    csi = csi + 1;
});

