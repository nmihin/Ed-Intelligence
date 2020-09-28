(function() {
  // D3 Chart
  const chart = function() {
    var margin = {
        top: 20,
        right: 20,
        bottom: 70,
        left: 40
      },
      width = 600 - margin.left - margin.right,
      height = 300 - margin.top - margin.bottom;

    // Parse the date / time
    var parseDate = d3.time.format("%Y").parse;

    var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);

    var y = d3.scale.linear().range([height, 0]);

    var xAxis = d3.svg.axis()
      .scale(x)
      .orient("bottom")
      .tickFormat(d3.time.format("%Y"));

    var yAxis = d3.svg.axis()
      .scale(y)
      .orient("left")
      .ticks(10);

    var svg = d3.select("#chart")
       .append("div")
       .classed("svg-container", true) //container class to make it responsive
       .append("svg")
       //responsive SVG needs these 2 attributes and no width and height attr
       .attr("preserveAspectRatio", "xMinYMin meet")
       .attr("viewBox", "0 0 600 400")
       //class to make it responsive
       .classed("svg-content-responsive", true); 

    d3.csv("assets/data/data.csv", function(error, data) {

      data.forEach(function(d) {
        d.date = parseDate(d.date);
        d.value = +d.value;
      });

      x.domain(data.map(function(d) {
        return d.date;
      }));
      y.domain([0, d3.max(data, function(d) {
        return d.value;
      })]);

      svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", "-.55em")
        .attr("transform", "rotate(-90)");

      svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")

      svg.selectAll("bar")
        .data(data)
        .enter().append("rect")
        .style("fill", "steelblue")
        .attr("x", function(d) {
          return x(d.date);
        })
        .attr("width", x.rangeBand())
        .attr("y", function(d) {
          return y(d.value);
        })
        .attr("height", function(d) {
          return height - y(d.value);
        });

    });
  };
  window.onload = chart;
})();
