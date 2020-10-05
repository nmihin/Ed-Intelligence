(function() {
  // Calendar Date Time Picker
  $('#datepicker-inline').datetimepicker({
    inline: true
  });

  // Swiper.js
  const swiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  });

  // Chart.js
  let data = {
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
  let options = {
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
    },
    tooltips: {
      yAlign: 'bottom',
      backgroundColor: '#fff',
      borderColor: '#e5e5e5',
      titleFontColor: "#0264a0",
      borderWidth: 1,
      titleFontSize: 16,
      xPadding:15,
      yPadding:15,
      displayColors: false,
      callbacks: {
          label: function(tooltipItem) {
              return Number(tooltipItem.yLabel) + "k Subscribers in this year!";
          }
      },
      bodyFontColor: '#ababab'
    }
  };

  let ctx = document.getElementById("barChart");
  let myBarChart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options
  });
})();
