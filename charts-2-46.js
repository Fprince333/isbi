function showSecondaryChart(el) {
  $j("#portfolio-text").hide();
  $j("#secondary-chart-container").show();
  $j("#secondary-chart-container canvas").each(function (i) {
    $j(this).hide();
  });
  $j(el).show();
}

var portfolioData = {
  datasets: [{
      data: [0, 0, 0, 0, 5, 8, 4, 10, 5, 5, 23, 13, 8, 7, 3, 5, 4],
      backgroundColor: [
        "#fff",
        "#0b9444",
        "#8cc63e",
        "#0b9444",
        "#0b9444",
        "#0b9444",
        "#0b9444",
        "#0b9444",
        "#0b9444",
        "#0b9444",
        "#8cc63e",
        "#8cc63e",
        "#8cc63e",
        "#8cc63e",
        "#2ecc71",
        "#2ecc71",
        "#2ecc71"
      ]
    },
    {
      data: [0, 37, 51, 12],
      backgroundColor: ["#fff", "#0b9444", "#8cc63e", "#2ecc71"]
    },
    {
      data: [100],
      backgroundColor: ["#fff"]
    }
  ],
  labels: [
    "Portfolio",
    "Fixed Income",
    "Equities",
    "Real Assets",
    "High Yield",
    "Opportunistic Debt",
    "Emerging Market Debt",
    "Intermediate Investment",
    "Long-term Government",
    "TIPS",
    "U.S.",
    "Developed Foreign Equity",
    "Emerging Markets",
    "Private Equity",
    "Infrastructure",
    "Core Real Estate",
    "Non-Core Real Estate"
  ]
};

var centerPortfolioData = {
  datasets: [{
    data: [76.5, 23.5],
    backgroundColor: ["#3498db", "#f1c40f"]
  }],
  labels: ["Passive", "Active"]
};

var privateEquityData = {
  datasets: [{
    data: [0, 100],
    backgroundColor: ["#3498db", "#f1c40f"]
  }],
  labels: ["Passive", "Active"]
};

var coreRealEstateData = {
  datasets: [{
    data: [100, 0],
    backgroundColor: ["#3498db", "#f1c40f"]
  }],
  labels: ["Passive", "Active"]
};

var nonCoreRealEstateData = {
  datasets: [{
    data: [0, 100],
    backgroundColor: ["#3498db", "#f1c40f"]
  }],
  labels: ["Passive", "Active"]
};

var infrastructureData = {
  datasets: [{
    data: [0, 100],
    backgroundColor: ["#3498db", "#f1c40f"]
  }],
  labels: ["Passive", "Active"]
};

var highYieldData = {
  datasets: [{
    data: [0, 100],
    backgroundColor: ["#3498db", "#f1c40f"]
  }],
  labels: ["Passive", "Active"]
};

var opportunisticDebtData = {
  datasets: [{
    data: [0, 100],
    backgroundColor: ["#3498db", "#f1c40f"]
  }],
  labels: ["Passive", "Active"]
};

var emergingMarketDebtData = {
  datasets: [{
    data: [100, 0],
    backgroundColor: ["#3498db", "#f1c40f"]
  }],
  labels: ["Passive", "Active"]
};

var intermediateInvestmentData = {
  datasets: [{
    data: [95, 5],
    backgroundColor: ["#3498db", "#f1c40f"]
  }],
  labels: ["Passive", "Active"]
};

var longTermGovernmentData = {
  datasets: [{
    data: [95.2, 4.8],
    backgroundColor: ["#3498db", "#f1c40f"]
  }],
  labels: ["Passive", "Active"]
};

var tipsData = {
  datasets: [{
    data: [99.4, 0.6],
    backgroundColor: ["#3498db", "#f1c40f"]
  }],
  labels: ["Passive", "Active"]
};

var usData = {
  datasets: [{
    data: [90.3, 9.7],
    backgroundColor: ["#3498db", "#f1c40f"]
  }],
  labels: ["Passive", "Active"]
};

var developedForeignEquityData = {
  datasets: [{
    data: [70.7, 29.3],
    backgroundColor: ["#3498db", "#f1c40f"]
  }],
  labels: ["Passive", "Active"]
};

var emergingMarketsData = {
  datasets: [{
    data: [83.4, 16.6],
    backgroundColor: ["#3498db", "#f1c40f"]
  }],
  labels: ["Passive", "Active"]
};

var equitiesData = {
  datasets: [{
    data: [78.4, 21.6],
    backgroundColor: ["#3498db", "#f1c40f"]
  }],
  labels: ["Passive", "Active"]
};

var realEstateData = {
  datasets: [{
    data: [59.1, 40.9],
    backgroundColor: ["#3498db", "#f1c40f"]
  }],
  labels: ["Passive", "Active"]
};

var fixedIncomeData = {
  datasets: [{
    data: [69, 31],
    backgroundColor: ["#3498db", "#f1c40f"]
  }],
  labels: ["Passive", "Active"]
};

if (window.location.pathname.indexOf("portfolio") > -1) {
  var privateEquity = document.getElementById("private-equity");
  var coreRealEstate = document.getElementById("core-real-estate");
  var nonCoreRealEstate = document.getElementById("non-core-real-estate");
  var infrastructure = document.getElementById("infrastructure");
  var highYield = document.getElementById("high-yield");
  var opportunisticDebt = document.getElementById("opportunistic-debt");
  var emergingMarketDebt = document.getElementById("emerging-market-debt");
  var intermediateInvestment = document.getElementById(
    "intermediate-investment"
  );
  var longTermGovernment = document.getElementById("long-term-government");
  var tips = document.getElementById("tips");
  var us = document.getElementById("us");
  var developedForeignEquity = document.getElementById(
    "developed-foreign-equity"
  );
  var emergingMarkets = document.getElementById("emerging-markets");
  var equities = document.getElementById("equities");
  var realEstate = document.getElementById("real-assets");
  var fixedIncome = document.getElementById("fixed-income");
  var centerPortfolio = document.getElementById("second-portfolio");
  var portfolio = document.getElementById("portfolio");

  var mainPortfolio = new Chart(portfolio, {
    type: "pie",
    data: portfolioData,
    options: {
      legend: {
        display: false
      },
      tooltips: {
        enabled: false
      },
      animation: {
        animateScale: true,
        duration: 2500,
        onComplete: function () {
          var ctx = this.chart.ctx;
          ctx.textAlign = "center";
          ctx.textBaseline = "bottom";
          this.data.datasets.forEach(function (dataset) {
            for (var i = 0; i < dataset.data.length; i++) {
              var model =
                dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
                total = dataset._meta[Object.keys(dataset._meta)[0]].total,
                mid_radius =
                model.innerRadius +
                (model.outerRadius - model.innerRadius) / 2,
                start_angle = model.startAngle,
                end_angle = model.endAngle,
                mid_angle = start_angle + (end_angle - start_angle) / 2;

              var x = mid_radius * Math.cos(mid_angle);
              var y = mid_radius * Math.sin(mid_angle);

              ctx.fillStyle = "#444";
              ctx.font = "12px Lato";
              if (window.innerWidth < 601) {
                ctx.font = "6px Lato";
              }
              var label = model.label;
              var percent =
                String(Math.round(dataset.data[i] / total * 100)) + "%";

              if (percent === "0%") {
                console.log("returning");
              } else {
                if (label === "Infrastructure") {
                  ctx.fillText("Infra-", model.x + x, model.y + y);
                  if (window.innerWidth < 601) { 
                    ctx.fillText("structure", model.x + x, model.y + y + 5);
                    ctx.fillText("2%", model.x + x, model.y + y + 15);
                  } else {
                    ctx.fillText("structure", model.x + x, model.y + y + 15);
                    ctx.fillText("2%", model.x + x, model.y + y + 30);  
                  }
                } else if (label === "Non-Core Real Estate") {
                  ctx.fillText("Non-Core", model.x + x, model.y + y);
                  if (window.innerWidth < 601) { 
                    ctx.fillText("Real Estate", model.x + x, model.y + y + 10);
                    ctx.fillText("4.5%", model.x + x, model.y + y + 20);
                  } else {
                    ctx.fillText("Real Estate", model.x + x, model.y + y + 15);
                    ctx.fillText("4.5%", model.x + x, model.y + y + 30);
                  }                 
                } else if (label === "Core Real Estate") {               
                  if (window.innerWidth < 601) { 
                    ctx.fillText("Core", model.x + x, model.y + y + 10);
                    ctx.fillText("Real Estate", model.x + x, model.y + y + 15);
                    ctx.fillText("5.5%", model.x + x, model.y + y + 20);
                  } else {
                    ctx.fillText("Core", model.x + x, model.y + y);
                    ctx.fillText("Real Estate", model.x + x, model.y + y + 15);
                    ctx.fillText("5.5%", model.x + x, model.y + y + 30);
                  }                 
                } else if (label === "Emerging Market Debt") {
                  if (window.innerWidth < 601) { 
                    ctx.fillText(
                      label.split(" ")[0] + " " + label.split(" ")[1],
                      model.x + x,
                      model.y + y + 5
                    );
                    ctx.fillText(
                      label.split(" ")[2] + " " + "2%",
                      model.x + x,
                      model.y + y + 15
                    );
                  } else {
                    ctx.fillText(
                      label.split(" ")[0] + " " + label.split(" ")[1],
                      model.x + x,
                      model.y + y + 10
                    );
                    ctx.fillText(label.split(" ")[2] + " " + "2%", model.x + x, model.y + y + 25);
                  }                 
                } else if (label === "Intermediate Investment") {
                  ctx.fillText(label.split(" ")[0], model.x + x, model.y + y);
                  ctx.fillText(
                    label.split(" ")[1],
                    model.x + x,
                    model.y + y + 15
                  );
                  ctx.fillText("14%", model.x + x, model.y + y + 30);
                } else if (label === "Long-term Government") {
                  ctx.fillText(label.split(" ")[0], model.x + x, model.y + y);
                  if (window.innerWidth < 601) { 
                    ctx.fillText(label.split(" ")[1], model.x + x, model.y + y + 5);
                    ctx.fillText("4%", model.x + x, model.y + y + 15);
                  } else {
                    ctx.fillText(
                      label.split(" ")[1],
                      model.x + x,
                      model.y + y + 15
                    );
                    ctx.fillText("4%", model.x + x, model.y + y + 30);
                  }
                } else if (label === "TIPS") {
                  ctx.fillText(label, model.x + x, model.y + y);
                  ctx.fillText("4%", model.x + x, model.y + y + 15);
                } else if (label === "Developed Foreign Equity") {
                  ctx.fillText(
                    label.split(" ")[0] + " " + label.split(" ")[1],
                    model.x + x,
                    model.y + y
                  );
                  ctx.fillText(
                    label.split(" ")[2] + " " + percent,
                    model.x + x,
                    model.y + y + 15
                  );
                } else if (label === "Portfolio") {
                  ctx.fillStyle = "#8cc63e";
                  ctx.font = "24px Lato";
                  ctx.fillText(label, model.x + x, model.y + y);
                  ctx.fillText("Entire", model.x + x, model.y + y - 25);
                } else {
                  ctx.fillText(label, model.x + x, model.y + y);
                  ctx.fillText(percent, model.x + x, model.y + y + 15);
                }
              }
            }
          });
          ctx.destroy();
        }
      },
      onHover: function (event) {
        let chartId =
          "#" +
          this.active[0]._model.label
          .toLowerCase()
          .replace(/\./g, "")
          .replace(/ +/g, "-");
        if (chartId === "#portfolio") {
          chartId = "#second-portfolio";
        }
        showSecondaryChart(chartId);
      }
    }
  });
  var centerPortfolioChart = new Chart(centerPortfolio, {
    type: "pie",
    data: centerPortfolioData,
    options: {
      title: {
        display: true,
        text: "Portfolio",
        fontColor: "#8cc63e",
        fontSize: 24
      },
      legend: {
        labels: {
          boxWidth: 100,
          fontSize: 16
        }
      },
      animation: {
        onComplete: function () {
          var ctx = this.chart.ctx;
          ctx.textAlign = "center";
          ctx.textBaseline = "bottom";

          this.data.datasets.forEach(function (dataset) {
            for (var i = 0; i < dataset.data.length; i++) {
              var model =
                dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
                total = dataset._meta[Object.keys(dataset._meta)[0]].total,
                mid_radius =
                model.innerRadius +
                (model.outerRadius - model.innerRadius) / 2,
                start_angle = model.startAngle,
                end_angle = model.endAngle,
                mid_angle = start_angle + (end_angle - start_angle) / 2;

              var x = mid_radius * Math.cos(mid_angle);
              var y = mid_radius * Math.sin(mid_angle);

              ctx.fillStyle = "#fff";
              if (i == 3) {
                // Darker text color for lighter background
                ctx.fillStyle = "#444";
              }
              var percent =
                dataset.data[i].toLocaleString() + "%";
              // Display percent in another line, line break doesn't work for fillText
              ctx.fillText(percent, model.x + x, model.y + y + 15);
            }
          });
        }
      }
    }
  });
  var privateEquityChart = new Chart(privateEquity, {
    type: "pie",
    data: privateEquityData,
    options: {
      title: {
        display: true,
        text: "Private Equity",
        fontColor: "#8cc63e",
        fontSize: 24
      },
      legend: {
        labels: {
          boxWidth: 100,
          fontSize: 16
        }
      },
      animation: {
        onComplete: function () {
          var ctx = this.chart.ctx;
          ctx.textAlign = "center";
          ctx.textBaseline = "bottom";

          this.data.datasets.forEach(function (dataset) {
            for (var i = 0; i < dataset.data.length; i++) {
              var model =
                dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
                total = dataset._meta[Object.keys(dataset._meta)[0]].total,
                mid_radius =
                model.innerRadius +
                (model.outerRadius - model.innerRadius) / 2,
                start_angle = model.startAngle,
                end_angle = model.endAngle,
                mid_angle = start_angle + (end_angle - start_angle) / 2;

              var x = mid_radius * Math.cos(mid_angle);
              var y = mid_radius * Math.sin(mid_angle);

              ctx.fillStyle = "#fff";
              if (i == 3) {
                // Darker text color for lighter background
                ctx.fillStyle = "#444";
              }
              var percent =
                dataset.data[i].toLocaleString() + "%";
              // Display percent in another line, line break doesn't work for fillText
              ctx.fillText(percent, model.x + x, model.y + y + 15);
            }
          });
        }
      }
    }
  });
  var coreRealEstateChart = new Chart(coreRealEstate, {
    type: "pie",
    data: coreRealEstateData,
    options: {
      title: {
        display: true,
        text: "Core Real Estate",
        fontColor: "#8cc63e",
        fontSize: 24
      },
      legend: {
        labels: {
          boxWidth: 100,
          fontSize: 16
        }
      },
      animation: {
        onComplete: function () {
          var ctx = this.chart.ctx;
          ctx.textAlign = "center";
          ctx.textBaseline = "bottom";

          this.data.datasets.forEach(function (dataset) {
            for (var i = 0; i < dataset.data.length; i++) {
              var model =
                dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
                total = dataset._meta[Object.keys(dataset._meta)[0]].total,
                mid_radius =
                model.innerRadius +
                (model.outerRadius - model.innerRadius) / 2,
                start_angle = model.startAngle,
                end_angle = model.endAngle,
                mid_angle = start_angle + (end_angle - start_angle) / 2;

              var x = mid_radius * Math.cos(mid_angle);
              var y = mid_radius * Math.sin(mid_angle);

              ctx.fillStyle = "#fff";
              if (i == 3) {
                // Darker text color for lighter background
                ctx.fillStyle = "#444";
              }
              var percent =
                dataset.data[i].toLocaleString() + "%";
              // Display percent in another line, line break doesn't work for fillText
              ctx.fillText(percent, model.x + x, model.y + y + 15);
            }
          });
        }
      }
    }
  });
  var nonCoreRealEstateChart = new Chart(nonCoreRealEstate, {
    type: "pie",
    data: nonCoreRealEstateData,
    options: {
      title: {
        display: true,
        text: "Non Core Real Estate",
        fontColor: "#8cc63e",
        fontSize: 24
      },
      legend: {
        labels: {
          boxWidth: 100,
          fontSize: 16
        }
      },
      animation: {
        onComplete: function () {
          var ctx = this.chart.ctx;
          ctx.textAlign = "center";
          ctx.textBaseline = "bottom";

          this.data.datasets.forEach(function (dataset) {
            for (var i = 0; i < dataset.data.length; i++) {
              var model =
                dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
                total = dataset._meta[Object.keys(dataset._meta)[0]].total,
                mid_radius =
                model.innerRadius +
                (model.outerRadius - model.innerRadius) / 2,
                start_angle = model.startAngle,
                end_angle = model.endAngle,
                mid_angle = start_angle + (end_angle - start_angle) / 2;

              var x = mid_radius * Math.cos(mid_angle);
              var y = mid_radius * Math.sin(mid_angle);

              ctx.fillStyle = "#fff";
              if (i == 3) {
                // Darker text color for lighter background
                ctx.fillStyle = "#444";
              }
              var percent =
                dataset.data[i].toLocaleString() + "%";
              // Display percent in another line, line break doesn't work for fillText
              ctx.fillText(percent, model.x + x, model.y + y + 15);
            }
          });
        }
      }
    }
  });
  var infrastructureChart = new Chart(infrastructure, {
    type: "pie",
    data: infrastructureData,
    options: {
      title: {
        display: true,
        text: "Infrastructure",
        fontColor: "#8cc63e",
        fontSize: 24
      },
      legend: {
        labels: {
          boxWidth: 100,
          fontSize: 16
        }
      },
      animation: {
        onComplete: function () {
          var ctx = this.chart.ctx;
          ctx.textAlign = "center";
          ctx.textBaseline = "bottom";

          this.data.datasets.forEach(function (dataset) {
            for (var i = 0; i < dataset.data.length; i++) {
              var model =
                dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
                total = dataset._meta[Object.keys(dataset._meta)[0]].total,
                mid_radius =
                model.innerRadius +
                (model.outerRadius - model.innerRadius) / 2,
                start_angle = model.startAngle,
                end_angle = model.endAngle,
                mid_angle = start_angle + (end_angle - start_angle) / 2;

              var x = mid_radius * Math.cos(mid_angle);
              var y = mid_radius * Math.sin(mid_angle);

              ctx.fillStyle = "#fff";
              if (i == 3) {
                // Darker text color for lighter background
                ctx.fillStyle = "#444";
              }
              var percent =
                dataset.data[i].toLocaleString() + "%";
              // Display percent in another line, line break doesn't work for fillText
              ctx.fillText(percent, model.x + x, model.y + y + 15);
            }
          });
        }
      }
    }
  });
  var highYieldChart = new Chart(highYield, {
    type: "pie",
    data: highYieldData,
    options: {
      title: {
        display: true,
        text: "High Yield",
        fontColor: "#8cc63e",
        fontSize: 24
      },
      legend: {
        labels: {
          boxWidth: 100,
          fontSize: 16
        }
      },
      animation: {
        onComplete: function () {
          var ctx = this.chart.ctx;
          ctx.textAlign = "center";
          ctx.textBaseline = "bottom";

          this.data.datasets.forEach(function (dataset) {
            for (var i = 0; i < dataset.data.length; i++) {
              var model =
                dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
                total = dataset._meta[Object.keys(dataset._meta)[0]].total,
                mid_radius =
                model.innerRadius +
                (model.outerRadius - model.innerRadius) / 2,
                start_angle = model.startAngle,
                end_angle = model.endAngle,
                mid_angle = start_angle + (end_angle - start_angle) / 2;

              var x = mid_radius * Math.cos(mid_angle);
              var y = mid_radius * Math.sin(mid_angle);

              ctx.fillStyle = "#fff";
              if (i == 3) {
                // Darker text color for lighter background
                ctx.fillStyle = "#444";
              }
              var percent =
                dataset.data[i].toLocaleString() + "%";
              // Display percent in another line, line break doesn't work for fillText
              ctx.fillText(percent, model.x + x, model.y + y + 15);
            }
          });
        }
      }
    }
  });
  var opportunisticDebtChart = new Chart(opportunisticDebt, {
    type: "pie",
    data: opportunisticDebtData,
    options: {
      title: {
        display: true,
        text: "Opportunistic Debt",
        fontColor: "#8cc63e",
        fontSize: 24
      },
      legend: {
        labels: {
          boxWidth: 100,
          fontSize: 16
        }
      },
      animation: {
        onComplete: function () {
          var ctx = this.chart.ctx;
          ctx.textAlign = "center";
          ctx.textBaseline = "bottom";

          this.data.datasets.forEach(function (dataset) {
            for (var i = 0; i < dataset.data.length; i++) {
              var model =
                dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
                total = dataset._meta[Object.keys(dataset._meta)[0]].total,
                mid_radius =
                model.innerRadius +
                (model.outerRadius - model.innerRadius) / 2,
                start_angle = model.startAngle,
                end_angle = model.endAngle,
                mid_angle = start_angle + (end_angle - start_angle) / 2;

              var x = mid_radius * Math.cos(mid_angle);
              var y = mid_radius * Math.sin(mid_angle);

              ctx.fillStyle = "#fff";
              if (i == 3) {
                // Darker text color for lighter background
                ctx.fillStyle = "#444";
              }
              var percent =
                dataset.data[i].toLocaleString() + "%";
              // Display percent in another line, line break doesn't work for fillText
              ctx.fillText(percent, model.x + x, model.y + y + 15);
            }
          });
        }
      }
    }
  });
  var emergingMarketDebtChart = new Chart(emergingMarketDebt, {
    type: "pie",
    data: emergingMarketDebtData,
    options: {
      title: {
        display: true,
        text: "Emerging Market Debt",
        fontColor: "#8cc63e",
        fontSize: 24
      },
      legend: {
        labels: {
          boxWidth: 100,
          fontSize: 16
        }
      },
      animation: {
        onComplete: function () {
          var ctx = this.chart.ctx;
          ctx.textAlign = "center";
          ctx.textBaseline = "bottom";

          this.data.datasets.forEach(function (dataset) {
            for (var i = 0; i < dataset.data.length; i++) {
              var model =
                dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
                total = dataset._meta[Object.keys(dataset._meta)[0]].total,
                mid_radius =
                model.innerRadius +
                (model.outerRadius - model.innerRadius) / 2,
                start_angle = model.startAngle,
                end_angle = model.endAngle,
                mid_angle = start_angle + (end_angle - start_angle) / 2;

              var x = mid_radius * Math.cos(mid_angle);
              var y = mid_radius * Math.sin(mid_angle);

              ctx.fillStyle = "#fff";
              if (i == 3) {
                // Darker text color for lighter background
                ctx.fillStyle = "#444";
              }
              var percent =
                dataset.data[i].toLocaleString() + "%";
              // Display percent in another line, line break doesn't work for fillText
              ctx.fillText(percent, model.x + x, model.y + y + 15);
            }
          });
        }
      }
    }
  });
  var intermediateInvestmentChart = new Chart(intermediateInvestment, {
    type: "pie",
    data: intermediateInvestmentData,
    options: {
      title: {
        display: true,
        text: "Intermediate Investment",
        fontColor: "#8cc63e",
        fontSize: 24
      },
      legend: {
        labels: {
          boxWidth: 100,
          fontSize: 16
        }
      },
      animation: {
        onComplete: function () {
          var ctx = this.chart.ctx;
          ctx.textAlign = "center";
          ctx.textBaseline = "bottom";

          this.data.datasets.forEach(function (dataset) {
            for (var i = 0; i < dataset.data.length; i++) {
              var model =
                dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
                total = dataset._meta[Object.keys(dataset._meta)[0]].total,
                mid_radius =
                model.innerRadius +
                (model.outerRadius - model.innerRadius) / 2,
                start_angle = model.startAngle,
                end_angle = model.endAngle,
                mid_angle = start_angle + (end_angle - start_angle) / 2;

              var x = mid_radius * Math.cos(mid_angle);
              var y = mid_radius * Math.sin(mid_angle);

              ctx.fillStyle = "#fff";
              if (i == 3) {
                // Darker text color for lighter background
                ctx.fillStyle = "#444";
              }
              var percent =
                dataset.data[i].toLocaleString() + "%";
              // Display percent in another line, line break doesn't work for fillText
              ctx.fillText(percent, model.x + x, model.y + y + 15);
            }
          });
        }
      }
    }
  });
  var longTermGovernmentChart = new Chart(longTermGovernment, {
    type: "pie",
    data: longTermGovernmentData,
    options: {
      title: {
        display: true,
        text: "Long Term Government",
        fontColor: "#8cc63e",
        fontSize: 24
      },
      legend: {
        labels: {
          boxWidth: 100,
          fontSize: 16
        }
      },
      animation: {
        onComplete: function () {
          var ctx = this.chart.ctx;
          ctx.textAlign = "center";
          ctx.textBaseline = "bottom";

          this.data.datasets.forEach(function (dataset) {
            for (var i = 0; i < dataset.data.length; i++) {
              var model =
                dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
                total = dataset._meta[Object.keys(dataset._meta)[0]].total,
                mid_radius =
                model.innerRadius +
                (model.outerRadius - model.innerRadius) / 2,
                start_angle = model.startAngle,
                end_angle = model.endAngle,
                mid_angle = start_angle + (end_angle - start_angle) / 2;

              var x = mid_radius * Math.cos(mid_angle);
              var y = mid_radius * Math.sin(mid_angle);

              ctx.fillStyle = "#fff";
              if (i == 3) {
                // Darker text color for lighter background
                ctx.fillStyle = "#444";
              }
              var percent =
                dataset.data[i].toLocaleString() + "%";
              // Display percent in another line, line break doesn't work for fillText
              ctx.fillText(percent, model.x + x, model.y + y + 15);
            }
          });
        }
      }
    }
  });
  var tipsChart = new Chart(tips, {
    type: "pie",
    data: tipsData,
    options: {
      title: {
        display: true,
        text: "TIPS",
        fontColor: "#8cc63e",
        fontSize: 24
      },
      legend: {
        labels: {
          boxWidth: 100,
          fontSize: 16
        }
      },
      animation: {
        onComplete: function () {
          var ctx = this.chart.ctx;
          ctx.textAlign = "center";
          ctx.textBaseline = "bottom";

          this.data.datasets.forEach(function (dataset) {
            for (var i = 0; i < dataset.data.length; i++) {
              var model =
                dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
                total = dataset._meta[Object.keys(dataset._meta)[0]].total,
                mid_radius =
                model.innerRadius +
                (model.outerRadius - model.innerRadius) / 2,
                start_angle = model.startAngle,
                end_angle = model.endAngle,
                mid_angle = start_angle + (end_angle - start_angle) / 2;

              var x = mid_radius * Math.cos(mid_angle);
              var y = mid_radius * Math.sin(mid_angle);

              ctx.fillStyle = "#fff";
              if (i == 3) {
                // Darker text color for lighter background
                ctx.fillStyle = "#444";
              }
              var percent =
                dataset.data[i].toLocaleString() + "%";
              // Display percent in another line, line break doesn't work for fillText
              ctx.fillText(percent, model.x + x, model.y + y + 15);
            }
          });
        }
      }
    }
  });
  var usChart = new Chart(us, {
    type: "pie",
    data: usData,
    options: {
      title: {
        display: true,
        text: "U.S.",
        fontColor: "#8cc63e",
        fontSize: 24
      },
      legend: {
        labels: {
          boxWidth: 100,
          fontSize: 16
        }
      },
      animation: {
        onComplete: function () {
          var ctx = this.chart.ctx;
          ctx.textAlign = "center";
          ctx.textBaseline = "bottom";

          this.data.datasets.forEach(function (dataset) {
            for (var i = 0; i < dataset.data.length; i++) {
              var model =
                dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
                total = dataset._meta[Object.keys(dataset._meta)[0]].total,
                mid_radius =
                model.innerRadius +
                (model.outerRadius - model.innerRadius) / 2,
                start_angle = model.startAngle,
                end_angle = model.endAngle,
                mid_angle = start_angle + (end_angle - start_angle) / 2;

              var x = mid_radius * Math.cos(mid_angle);
              var y = mid_radius * Math.sin(mid_angle);

              ctx.fillStyle = "#fff";
              if (i == 3) {
                // Darker text color for lighter background
                ctx.fillStyle = "#444";
              }
              var percent =
                dataset.data[i].toLocaleString() + "%";
              // Display percent in another line, line break doesn't work for fillText
              ctx.fillText(percent, model.x + x, model.y + y + 15);
            }
          });
        }
      }
    }
  });
  var developedForeignEquityChart = new Chart(developedForeignEquity, {
    type: "pie",
    data: developedForeignEquityData,
    options: {
      title: {
        display: true,
        text: "Developed Foreign Equity",
        fontColor: "#8cc63e",
        fontSize: 24
      },
      legend: {
        labels: {
          boxWidth: 100,
          fontSize: 16
        }
      },
      animation: {
        onComplete: function () {
          var ctx = this.chart.ctx;
          ctx.textAlign = "center";
          ctx.textBaseline = "bottom";

          this.data.datasets.forEach(function (dataset) {
            for (var i = 0; i < dataset.data.length; i++) {
              var model =
                dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
                total = dataset._meta[Object.keys(dataset._meta)[0]].total,
                mid_radius =
                model.innerRadius +
                (model.outerRadius - model.innerRadius) / 2,
                start_angle = model.startAngle,
                end_angle = model.endAngle,
                mid_angle = start_angle + (end_angle - start_angle) / 2;

              var x = mid_radius * Math.cos(mid_angle);
              var y = mid_radius * Math.sin(mid_angle);

              ctx.fillStyle = "#fff";
              if (i == 3) {
                // Darker text color for lighter background
                ctx.fillStyle = "#444";
              }
              var percent =
                dataset.data[i].toLocaleString() + "%";
              // Display percent in another line, line break doesn't work for fillText
              ctx.fillText(percent, model.x + x, model.y + y + 15);
            }
          });
        }
      }
    }
  });
  var emergingMarketsChart = new Chart(emergingMarkets, {
    type: "pie",
    data: emergingMarketsData,
    options: {
      title: {
        display: true,
        text: "Emerging Markets",
        fontColor: "#8cc63e",
        fontSize: 24
      },
      legend: {
        labels: {
          boxWidth: 100,
          fontSize: 16
        }
      },
      animation: {
        onComplete: function () {
          var ctx = this.chart.ctx;
          ctx.textAlign = "center";
          ctx.textBaseline = "bottom";

          this.data.datasets.forEach(function (dataset) {
            for (var i = 0; i < dataset.data.length; i++) {
              var model =
                dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
                total = dataset._meta[Object.keys(dataset._meta)[0]].total,
                mid_radius =
                model.innerRadius +
                (model.outerRadius - model.innerRadius) / 2,
                start_angle = model.startAngle,
                end_angle = model.endAngle,
                mid_angle = start_angle + (end_angle - start_angle) / 2;

              var x = mid_radius * Math.cos(mid_angle);
              var y = mid_radius * Math.sin(mid_angle);

              ctx.fillStyle = "#fff";
              if (i == 3) {
                // Darker text color for lighter background
                ctx.fillStyle = "#444";
              }
              var percent =
                dataset.data[i].toLocaleString() + "%";
              // Display percent in another line, line break doesn't work for fillText
              ctx.fillText(percent, model.x + x, model.y + y + 15);
            }
          });
        }
      }
    }
  });
  var equitiesChart = new Chart(equities, {
    type: "pie",
    data: equitiesData,
    options: {
      title: {
        display: true,
        text: "Equities",
        fontColor: "#8cc63e",
        fontSize: 24
      },
      legend: {
        labels: {
          boxWidth: 100,
          fontSize: 16
        }
      },
      animation: {
        onComplete: function () {
          var ctx = this.chart.ctx;
          ctx.textAlign = "center";
          ctx.textBaseline = "bottom";

          this.data.datasets.forEach(function (dataset) {
            for (var i = 0; i < dataset.data.length; i++) {
              var model =
                dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
                total = dataset._meta[Object.keys(dataset._meta)[0]].total,
                mid_radius =
                model.innerRadius +
                (model.outerRadius - model.innerRadius) / 2,
                start_angle = model.startAngle,
                end_angle = model.endAngle,
                mid_angle = start_angle + (end_angle - start_angle) / 2;

              var x = mid_radius * Math.cos(mid_angle);
              var y = mid_radius * Math.sin(mid_angle);

              ctx.fillStyle = "#fff";
              if (i == 3) {
                // Darker text color for lighter background
                ctx.fillStyle = "#444";
              }
              var percent =
                dataset.data[i].toLocaleString() + "%";
              // Display percent in another line, line break doesn't work for fillText
              ctx.fillText(percent, model.x + x, model.y + y + 15);
            }
          });
        }
      }
    }
  });
  var realEstateChart = new Chart(realEstate, {
    type: "pie",
    data: realEstateData,
    options: {
      title: {
        display: true,
        text: "Real Assets",
        fontColor: "#8cc63e",
        fontSize: 24
      },
      legend: {
        labels: {
          boxWidth: 100,
          fontSize: 16
        }
      },
      animation: {
        onComplete: function () {
          var ctx = this.chart.ctx;
          ctx.textAlign = "center";
          ctx.textBaseline = "bottom";

          this.data.datasets.forEach(function (dataset) {
            for (var i = 0; i < dataset.data.length; i++) {
              var model =
                dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
                total = dataset._meta[Object.keys(dataset._meta)[0]].total,
                mid_radius =
                model.innerRadius +
                (model.outerRadius - model.innerRadius) / 2,
                start_angle = model.startAngle,
                end_angle = model.endAngle,
                mid_angle = start_angle + (end_angle - start_angle) / 2;

              var x = mid_radius * Math.cos(mid_angle);
              var y = mid_radius * Math.sin(mid_angle);

              ctx.fillStyle = "#fff";
              if (i == 3) {
                // Darker text color for lighter background
                ctx.fillStyle = "#444";
              }
              var percent =
                dataset.data[i].toLocaleString() + "%";
              // Display percent in another line, line break doesn't work for fillText
              ctx.fillText(percent, model.x + x, model.y + y + 15);
            }
          });
        }
      }
    }
  });

  var fixedIncomeChart = new Chart(fixedIncome, {
    type: "pie",
    data: fixedIncomeData,
    options: {
      title: {
        display: true,
        text: "Fixed Income",
        fontColor: "#8cc63e",
        fontSize: 24
      },
      legend: {
        labels: {
          boxWidth: 100,
          fontSize: 16
        }
      },
      animation: {
        onComplete: function () {
          var ctx = this.chart.ctx;
          ctx.textAlign = "center";
          ctx.textBaseline = "bottom";

          this.data.datasets.forEach(function (dataset) {
            for (var i = 0; i < dataset.data.length; i++) {
              var model =
                dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
                total = dataset._meta[Object.keys(dataset._meta)[0]].total,
                mid_radius =
                model.innerRadius +
                (model.outerRadius - model.innerRadius) / 2,
                start_angle = model.startAngle,
                end_angle = model.endAngle,
                mid_angle = start_angle + (end_angle - start_angle) / 2;

              var x = mid_radius * Math.cos(mid_angle);
              var y = mid_radius * Math.sin(mid_angle);

              ctx.fillStyle = "#fff";
              if (i == 3) {
                // Darker text color for lighter background
                ctx.fillStyle = "#444";
              }
              var percent =
                dataset.data[i].toLocaleString() + "%";
              // Display percent in another line, line break doesn't work for fillText
              ctx.fillText(percent, model.x + x, model.y + y + 15);
            }
          });
        }
      }
    }
  });
}