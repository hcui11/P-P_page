/*jshint esversion: 6 */

const svg = d3.select("body") //container class to make it responsive
   .append("svg")
   //responsive SVG needs these 2 attributes and no width and height attr
   .attr("preserveAspectRatio", "xMinYMin slice")
   .attr("viewBox", "0 0 600 400")
   //class to make it responsive
   .classed("svg-content-responsive", true)
   .on("mouseClick", hovering);
var Pi2 = 2*Math.PI;
//data containing information of each arc
var data = [{"location" : Pi2/5, "color":"red"},
            {"location" : 2*Pi2/5, "color":"blue"},
            {"location" : 3*Pi2/5, "color":"green"},
            {"location" : 4*Pi2/5, "color":"orange"},
            {"location" : Pi2, "color":"magenta"}];
//creating the arc function
var arc = d3.arc()
    .startAngle(function (d) {return d.location - Pi2/5;})
    .outerRadius(130)
    .innerRadius(100)
    .cornerRadius(2)
    .padAngle(0.005)
    .endAngle(function (d) {return d.location;});

var Paths = svg.selectAll("path").data(data);
//creating the actual arcs
var MakeArcs = Paths.enter().append("path")
                    .attr("d", arc)
                    .attr("fill", function (d) {return d.color;})
                    .on("mousemove", function () {console.log("hellO");})
                    .attr("transform", "translate(280,150)");

svg.append("circle").attr("cy", 100).attr("cx", 100).attr("r", 10).on("mouseOver", hovering);
function hovering(){
  d3.select(this).attr("fill", "red");
  console.log("hovering");
}
