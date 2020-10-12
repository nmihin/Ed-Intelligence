<template> 
                  <div class="card-box flex-fill">
                    <div class="card-title d-flex justify-content-between align-items-center">
                      <h2>Visitor Statistics</h2>
                      <div class="user-profile">
                        <div class="profile-tag">
                          <span>Custom range</span>
                          <i class="icon icon-arrow-gray"></i>
                        </div>
                        <div class="user-menu">
                          <ul>
                            <li>
                              <a href="#">Last 7 days</a>
                            </li>
                            <li>
                              <a href="#">Last 28 days</a>
                            </li>
                            <li>
                              <a href="#">Last 90 days</a>
                              </li>
                            <li>
                              <a href="#">Last 365 days</a>
                            </li>
                            <li>
                              <a href="#">This year</a>
                            </li>
                          </ul>
                          <ul>
                            <li>
                              <a href="#">2020.</a>
                            </li>
                            <li>
                              <a href="#">2019.</a>
                             </li>
                          </ul>
                          <ul>
                            <li>
                              <a href="#">September</a>
                            </li>
                            <li>
                              <a href="#">August</a>
                            </li>
                            <li>
                              <a href="#">July</a>
                            </li>
                          </ul>
                          <ul>
                            <li>
                              <a href="#">Custom range</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="card-content d-flex">
                      <canvas
                        id="barChart"
                      ></canvas>
                    </div>
                  </div>
</template>

<script>
    import { Bar } from 'vue-chartjs'
    import '../../../assets/js/Chart.roundedBarCharts.min.js';

    export default {
        name: 'chart',
        mounted: function() {

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


        } 
    }
</script>