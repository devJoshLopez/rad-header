$(document).ready( () => {
    var svgKeyframeTimelineTwin1 = new TimelineMax({ repeat: -1 });
    var svgKeyframeCountTwin1 = $(".twin._1 .desktop svg g.keyframe").length;

    var svgKeyframeTimelineTwin2 = new TimelineMax({ repeat: -1 });
    var svgKeyframeCountTwin2 = $(".twin._2 .desktop svg g.keyframe").length;

    for (i = 0; i < svgKeyframeCountTwin1; i++) {
        svgKeyframeTimelineTwin1
            .to(".twin._1 svg g.keyframe._" + [i], 0, { autoAlpha: 1 })
            .to(".twin._1 svg g.keyframe._" + [i], 0, { autoAlpha: 0 }, "+=0.15");
    }

    for (i = 0; i < svgKeyframeCountTwin2; i++) {
        svgKeyframeTimelineTwin2
            .to(".twin._2 svg g.keyframe._" + [i], 0, { autoAlpha: 1 })
            .to(".twin._2 svg g.keyframe._" + [i], 0, { autoAlpha: 0 }, "+=0.15");
    }

    svgKeyframeTimelineTwin1.play();
    svgKeyframeTimelineTwin2.play();


    var headerTitles = new Array(
        "Brand’s Hate Us For This One Simple Trick",
        "Our Beziers Bring All The Boys To The Yard",
        "Life’s Like a Box of Color Swatches",
        "Kerning? Yea we do that."
    ),
        headerTitle = $('.header-title'),
        randno = headerTitles[Math.floor(Math.random() * headerTitles.length)];

    headerTitle.text(randno);
    TweenMax.to(headerTitle, 0, { autoAlpha: 0 });
    TweenMax.to(headerTitle, 1, { autoAlpha: 1, ease: Power2.easeInOut, delay: 1 });
    












    var margin = {top: 0, right: 0, bottom: 0, left: 0},
     width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;


var npoints = 100;
var ptdata = [];


var line = d3.line()
    .curve(d3.curveBasis)
    .x(function(d, i) { return d[0]; })
    .y(function(d, i) { return d[1]; });

    var svg = d3.select("body .twin-section").append("svg")
    .attr("class", "mousetrap")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(0,0)");

var svgagain = d3.select("body .twin-section").select("svg.mousetrap")
    .on("mousemove", function() { var pt = d3.mouse(this); tick(pt); });



var path = svg.append("g")
  .append("path")
    .data([ptdata])
    .attr("class", "line")
    .attr("d", line);

function tick(pt) {

  // push a new data point onto the back
  ptdata.push(pt);

  // Redraw the path:
  path
      .attr("d", function(d) { return line(d);})


  // If more than 100 points, drop the old data pt off the front
  if (ptdata.length > npoints) {
	  ptdata.shift();
  }
}

});
    

