(function() {
  // Chart.js
  var data = {
    labels: ["2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"],
    datasets: [{
      data: [31, 39, 31, 50, 42, 25, 53, 42, 39, 25, 20, 34, 35],
      backgroundColor: [
        'rgba(3, 105, 168, 1)',
        'rgba(3, 105, 168, 1)',
        'rgba(3, 105, 168, 1)',
        'rgba(3, 105, 168, 1)',
        'rgba(3, 105, 168, 1)',
        'rgba(3, 105, 168, 1)',
        'rgba(3, 105, 168, 1)',
        'rgba(3, 105, 168, 1)',
        'rgba(3, 105, 168, 1)',
        'rgba(3, 105, 168, 1)',
        'rgba(3, 105, 168, 1)',
        'rgba(3, 105, 168, 1)',
        'rgba(3, 105, 168, 1)'
      ],
      borderWidth: 0
    }]
  };
  var options = {
    legend: {
      display: false
    },
    responsive: true,
    cornerRadius: 100,
    animation: {
      animateScale: true
    },
    scales: {
      xAxes: [{
        barPercentage: 1,
        categoryPercentage: 1,
        maxBarThickness: 22
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

  const chart = function() {
    // Standard Bar Chart
    var ctx = document.getElementById("barChart");
    var myBarChart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options
    });
  };
  window.onload = chart;
})();
