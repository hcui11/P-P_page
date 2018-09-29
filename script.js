/*jshint esversion: 6 */

const svg = d3.select("body") //container class to make it responsive
    .append("svg")
    //responsive SVG needs these 2 attributes and no width and height attr
    .attr("preserveAspectRatio", "xMinYMin slice")
    .attr("viewBox", "0 0 600 400")
    //class to make it responsive
    .classed("svg-content-responsive", true);
var Pi2 = 2 * Math.PI;
//data containing information of each arc
var data =
    [{ "location": Pi2 / 8, "color": "red" },
    { "location": 2 * Pi2 / 8, "color": "blue" },
    { "location": 3 * Pi2 / 8, "color": "green" },
    { "location": 4 * Pi2 / 8, "color": "orange" },
    { "location": 5 * Pi2 / 8, "color": "magenta" },
    { "location": 6 * Pi2 / 8, "color": "coral" },
    { "location": 7 * Pi2 / 8, "color": "cyan" },
    { "location": Pi2, "color": "orchid" }];
//creating the arc function
var arc = d3.arc()
    .startAngle(function (d) { return d.location - Pi2 / 8; })
    .outerRadius(160)
    .innerRadius(130)
    .cornerRadius(2)
    .padAngle(0.005)
    .endAngle(function (d) { return d.location; });

var Paths = svg.selectAll("path").data(data);
//creating the actual arcs
var MakeArcs = Paths.enter().append("path")
    .attr("d", arc)
    .attr("fill", function (d) { return d.color; })
    .on("click", Onclick)
    .attr("transform", "translate(320,180)");
function Onclick() {
    MakeArcs.attr("d", arc).attr("fill", function (d) { return d.color; });
    d3.select(this).attr("fill", "red");
    console.log("hovering");
}
