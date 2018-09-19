const svgHeight = 850;
const svgWidth = 850;

//container
const svgContainer = d3.select("body").append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight)
  .style("opacity", 1);

//Outercircle with Categories:
var outerCircle = svgContainer.append("circle")
  .attr("cx", svgWidth / 2)
  .attr("cy", svgHeight / 2)
  .attr("r", 425)
  .attr("fill", "red")

//Innercircle with Categories:

var outerCircle = svgContainer.append("circle")
  .attr("cx", svgWidth / 2)
  .attr("cy", svgHeight / 2)
  .attr("r", 325)
  .attr("fill", "white")