/*jshint esversion: 6 */

const svg = d3.select("body").append("div").classed("svg-container", true) //container class to make it responsive
   .append("svg")
   //responsive SVG needs these 2 attributes and no width and height attr
   .attr("preserveAspectRatio", "xMinYMin slice")
   .attr("viewBox", "0 0 600 400")
   //class to make it responsive
   .classed("svg-content-responsive", true);
var Pi2 = 2*Math.PI;
var data = [Pi2/5, 2*Pi2/5, 3*Pi2/5, 4*Pi2/5, Pi2];
const NumArc = 4;
var arc = d3.arc()
    .startAngle(function (d) {return d- Pi2/5})
    .outerRadius(130)
    .innerRadius(100)
    .cornerRadius(2)
    .padAngle(0.005)
    .endAngle(function (d) {return d});

var Paths = svg.selectAll("path").data(data);
var MakeArcs = Paths.enter().append("path").attr("d", arc).attr("transform", "translate(280,150)");
