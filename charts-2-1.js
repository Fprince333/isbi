function showSecondaryChart(el) {
	$j('#portfolio-text').hide();
	$j('#secondary-chart-container').show();
	Array.from($j('#secondary-chart-container canvas')).forEach(function(elem) {
		$j(elem).hide();
	});
	$j(el).show();
}

var portfolioData = {
	datasets: [
		{
			data: [0, 0, 0, 0, 5, 8, 2, 14, 4, 4, 23, 13, 8, 7, 5.5, 4.5, 2],
			backgroundColor: [
				'#fff',
				'#0b9444',
				'#8cc63e',
				'#0b9444',
				'#0b9444',
				'#0b9444',
				'#0b9444',
				'#0b9444',
				'#0b9444',
				'#0b9444',
				'#8cc63e',
				'#8cc63e',
				'#8cc63e',
				'#8cc63e',
				'#2ecc71',
				'#2ecc71',
				'#2ecc71'
			]
		},
		{
			data: [0, 37, 51, 12],
			backgroundColor: ['#fff', '#0b9444', '#8cc63e', '#2ecc71']
		},
		{
			data: [100],
			backgroundColor: ['#fff']
		}
	],
	labels: [
		'Portfolio',
		'Fixed Income',
		'Equities',
		'Real Assets',
		'High Yield',
		'Opportunistic Debt',
		'Emerging Market Debt',
		'Intermediate Investment',
		'Long-term Government',
		'TIPS',
		'U.S.',
		'Developed Foreign Equity',
		'Emerging Markets',
		'Private Equity',
		'Core',
		'Non-Core',
		'Infrastructure'
	]
};

var centerPortfolioData = {
	datasets: [
		{
			data: [70, 30],
			backgroundColor: ['#3498db', '#f1c40f']
		}
	],
	labels: ['Passive', 'Active']
};

var privateEquityData = {
	datasets: [
		{
			data: [70, 30],
			backgroundColor: ['#3498db', '#f1c40f']
		}
	],
	labels: ['Passive', 'Active']
};

var coreRealEstateData = {
	datasets: [
		{
			data: [65, 35],
			backgroundColor: ['#3498db', '#f1c40f']
		}
	],
	labels: ['Passive', 'Active']
};

var nonCoreRealEstateData = {
	datasets: [
		{
			data: [55, 45],
			backgroundColor: ['#3498db', '#f1c40f']
		}
	],
	labels: ['Passive', 'Active']
};

var infrastructureData = {
	datasets: [
		{
			data: [80, 20],
			backgroundColor: ['#3498db', '#f1c40f']
		}
	],
	labels: ['Passive', 'Active']
};

var highYieldData = {
	datasets: [
		{
			data: [79, 21],
			backgroundColor: ['#3498db', '#f1c40f']
		}
	],
	labels: ['Passive', 'Active']
};

var opportunisticDebtData = {
	datasets: [
		{
			data: [60, 40],
			backgroundColor: ['#3498db', '#f1c40f']
		}
	],
	labels: ['Passive', 'Active']
};

var emergingMarketDebtData = {
	datasets: [
		{
			data: [72, 28],
			backgroundColor: ['#3498db', '#f1c40f']
		}
	],
	labels: ['Passive', 'Active']
};

var intermediateInvestmentData = {
	datasets: [
		{
			data: [93, 7],
			backgroundColor: ['#3498db', '#f1c40f']
		}
	],
	labels: ['Passive', 'Active']
};

var longTermGovernmentData = {
	datasets: [
		{
			data: [87, 13],
			backgroundColor: ['#3498db', '#f1c40f']
		}
	],
	labels: ['Passive', 'Active']
};

var tipsData = {
	datasets: [
		{
			data: [94, 6],
			backgroundColor: ['#3498db', '#f1c40f']
		}
	],
	labels: ['Passive', 'Active']
};

var usData = {
	datasets: [
		{
			data: [53, 47],
			backgroundColor: ['#3498db', '#f1c40f']
		}
	],
	labels: ['Passive', 'Active']
};

var developedForeignEquityData = {
	datasets: [
		{
			data: [59, 41],
			backgroundColor: ['#3498db', '#f1c40f']
		}
	],
	labels: ['Passive', 'Active']
};

var emergingMarketsData = {
	datasets: [
		{
			data: [88, 12],
			backgroundColor: ['#3498db', '#f1c40f']
		}
	],
	labels: ['Passive', 'Active']
};

var equitiesData = {
	datasets: [
		{
			data: [66, 34],
			backgroundColor: ['#3498db', '#f1c40f']
		}
	],
	labels: ['Passive', 'Active']
};

var realEstateData = {
	datasets: [
		{
			data: [75, 25],
			backgroundColor: ['#3498db', '#f1c40f']
		}
	],
	labels: ['Passive', 'Active']
};

var fixedIncomeData = {
	datasets: [
		{
			data: [69, 31],
			backgroundColor: ['#3498db', '#f1c40f']
		}
	],
	labels: ['Passive', 'Active']
};

if (window.location.pathname.indexOf('portfolio') > -1) {
	var privateEquity = document.getElementById('private-equity');
	var coreRealEstate = document.getElementById('core');
	var nonCoreRealEstate = document.getElementById('non-core');
	var infrastructure = document.getElementById('infrastructure');
	var highYield = document.getElementById('high-yield');
	var opportunisticDebt = document.getElementById('opportunistic-debt');
	var emergingMarketDebt = document.getElementById('emerging-market-debt');
	var intermediateInvestment = document.getElementById('intermediate-investment');
	var longTermGovernment = document.getElementById('long-term-government');
	var tips = document.getElementById('tips');
	var us = document.getElementById('us');
	var developedForeignEquity = document.getElementById('developed-foreign-equity');
	var emergingMarkets = document.getElementById('emerging-markets');
	var equities = document.getElementById('equities');
	var realEstate = document.getElementById('real-assets');
	var fixedIncome = document.getElementById('fixed-income');
	var centerPortfolio = document.getElementById('second-portfolio');
	var portfolio = document.getElementById('portfolio');

	var mainPortfolio = new Chart(portfolio, {
		type: 'pie',
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
				onComplete: function() {
					var ctx = this.chart.ctx;
					ctx.textAlign = 'center';
					ctx.textBaseline = 'bottom';
					this.data.datasets.forEach(function(dataset) {
						for (var i = 0; i < dataset.data.length; i++) {
							var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
								total = dataset._meta[Object.keys(dataset._meta)[0]].total,
								mid_radius = model.innerRadius + (model.outerRadius - model.innerRadius) / 2,
								start_angle = model.startAngle,
								end_angle = model.endAngle,
								mid_angle = start_angle + (end_angle - start_angle) / 2;

							var x = mid_radius * Math.cos(mid_angle);
							var y = mid_radius * Math.sin(mid_angle);

							ctx.fillStyle = '#444';
							var label = model.label;
							var percent = String(Math.round(dataset.data[i] / total * 100)) + '%';

							if (percent === '0%') {
								console.log('returning');
							} else {
								if (label === 'Infrastructure') {
									ctx.fillText(label, model.x + x, model.y + y - 15);
									ctx.fillText(percent, model.x + x, model.y + y - 30);
								} else if (label === 'Portfolio') {
									ctx.fillText(label, model.x + x, model.y + y - 20);
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
			onHover: function(event) {
				let chartId =
					'#' +
					this.active[0]._model.label
						.toLowerCase()
						.replace(/\./g, '')
						.replace(/ +/g, '-');
				if (chartId === '#portfolio') {
					chartId = '#second-portfolio';
				}
				showSecondaryChart(chartId);
			}
		}
	});
	var centerPortfolioChart = new Chart(centerPortfolio, {
		type: 'pie',
		data: centerPortfolioData,
		options: {
			title: {
				display: true,
				text: 'Portfolio',
				fontColor: '#8cc63e',
				fontSize: 24
			},
			legend: {
				labels: {
					boxWidth: 100,
					fontSize: 16
				}
			},
			animation: {
				onComplete: function() {
					var ctx = this.chart.ctx;
					ctx.textAlign = 'center';
					ctx.textBaseline = 'bottom';

					this.data.datasets.forEach(function(dataset) {
						for (var i = 0; i < dataset.data.length; i++) {
							var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
								total = dataset._meta[Object.keys(dataset._meta)[0]].total,
								mid_radius = model.innerRadius + (model.outerRadius - model.innerRadius) / 2,
								start_angle = model.startAngle,
								end_angle = model.endAngle,
								mid_angle = start_angle + (end_angle - start_angle) / 2;

							var x = mid_radius * Math.cos(mid_angle);
							var y = mid_radius * Math.sin(mid_angle);

							ctx.fillStyle = '#fff';
							if (i == 3) {
								// Darker text color for lighter background
								ctx.fillStyle = '#444';
							}
							var percent = String(Math.round(dataset.data[i] / total * 100)) + '%';
							// Display percent in another line, line break doesn't work for fillText
							ctx.fillText(percent, model.x + x, model.y + y + 15);
						}
					});
				}
			}
		}
	});
	var privateEquityChart = new Chart(privateEquity, {
		type: 'pie',
		data: privateEquityData,
		options: {
			title: {
				display: true,
				text: 'Private Equity',
				fontColor: '#8cc63e',
				fontSize: 24
			},
			legend: {
				labels: {
					boxWidth: 100,
					fontSize: 16
				}
			},
			animation: {
				onComplete: function() {
					var ctx = this.chart.ctx;
					ctx.textAlign = 'center';
					ctx.textBaseline = 'bottom';

					this.data.datasets.forEach(function(dataset) {
						for (var i = 0; i < dataset.data.length; i++) {
							var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
								total = dataset._meta[Object.keys(dataset._meta)[0]].total,
								mid_radius = model.innerRadius + (model.outerRadius - model.innerRadius) / 2,
								start_angle = model.startAngle,
								end_angle = model.endAngle,
								mid_angle = start_angle + (end_angle - start_angle) / 2;

							var x = mid_radius * Math.cos(mid_angle);
							var y = mid_radius * Math.sin(mid_angle);

							ctx.fillStyle = '#fff';
							if (i == 3) {
								// Darker text color for lighter background
								ctx.fillStyle = '#444';
							}
							var percent = String(Math.round(dataset.data[i] / total * 100)) + '%';
							// Display percent in another line, line break doesn't work for fillText
							ctx.fillText(percent, model.x + x, model.y + y + 15);
						}
					});
				}
			}
		}
	});
	var coreRealEstateChart = new Chart(coreRealEstate, {
		type: 'pie',
		data: coreRealEstateData,
		options: {
			title: {
				display: true,
				text: 'Core Real Assets',
				fontColor: '#8cc63e',
				fontSize: 24
			},
			legend: {
				labels: {
					boxWidth: 100,
					fontSize: 16
				}
			},
			animation: {
				onComplete: function() {
					var ctx = this.chart.ctx;
					ctx.textAlign = 'center';
					ctx.textBaseline = 'bottom';

					this.data.datasets.forEach(function(dataset) {
						for (var i = 0; i < dataset.data.length; i++) {
							var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
								total = dataset._meta[Object.keys(dataset._meta)[0]].total,
								mid_radius = model.innerRadius + (model.outerRadius - model.innerRadius) / 2,
								start_angle = model.startAngle,
								end_angle = model.endAngle,
								mid_angle = start_angle + (end_angle - start_angle) / 2;

							var x = mid_radius * Math.cos(mid_angle);
							var y = mid_radius * Math.sin(mid_angle);

							ctx.fillStyle = '#fff';
							if (i == 3) {
								// Darker text color for lighter background
								ctx.fillStyle = '#444';
							}
							var percent = String(Math.round(dataset.data[i] / total * 100)) + '%';
							// Display percent in another line, line break doesn't work for fillText
							ctx.fillText(percent, model.x + x, model.y + y + 15);
						}
					});
				}
			}
		}
	});
	var nonCoreRealEstateChart = new Chart(nonCoreRealEstate, {
		type: 'pie',
		data: nonCoreRealEstateData,
		options: {
			title: {
				display: true,
				text: 'Non Core Real Assets',
				fontColor: '#8cc63e',
				fontSize: 24
			},
			legend: {
				labels: {
					boxWidth: 100,
					fontSize: 16
				}
			},
			animation: {
				onComplete: function() {
					var ctx = this.chart.ctx;
					ctx.textAlign = 'center';
					ctx.textBaseline = 'bottom';

					this.data.datasets.forEach(function(dataset) {
						for (var i = 0; i < dataset.data.length; i++) {
							var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
								total = dataset._meta[Object.keys(dataset._meta)[0]].total,
								mid_radius = model.innerRadius + (model.outerRadius - model.innerRadius) / 2,
								start_angle = model.startAngle,
								end_angle = model.endAngle,
								mid_angle = start_angle + (end_angle - start_angle) / 2;

							var x = mid_radius * Math.cos(mid_angle);
							var y = mid_radius * Math.sin(mid_angle);

							ctx.fillStyle = '#fff';
							if (i == 3) {
								// Darker text color for lighter background
								ctx.fillStyle = '#444';
							}
							var percent = String(Math.round(dataset.data[i] / total * 100)) + '%';
							// Display percent in another line, line break doesn't work for fillText
							ctx.fillText(percent, model.x + x, model.y + y + 15);
						}
					});
				}
			}
		}
	});
	var infrastructureChart = new Chart(infrastructure, {
		type: 'pie',
		data: infrastructureData,
		options: {
			title: {
				display: true,
				text: 'Infrastructure',
				fontColor: '#8cc63e',
				fontSize: 24
			},
			legend: {
				labels: {
					boxWidth: 100,
					fontSize: 16
				}
			},
			animation: {
				onComplete: function() {
					var ctx = this.chart.ctx;
					ctx.textAlign = 'center';
					ctx.textBaseline = 'bottom';

					this.data.datasets.forEach(function(dataset) {
						for (var i = 0; i < dataset.data.length; i++) {
							var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
								total = dataset._meta[Object.keys(dataset._meta)[0]].total,
								mid_radius = model.innerRadius + (model.outerRadius - model.innerRadius) / 2,
								start_angle = model.startAngle,
								end_angle = model.endAngle,
								mid_angle = start_angle + (end_angle - start_angle) / 2;

							var x = mid_radius * Math.cos(mid_angle);
							var y = mid_radius * Math.sin(mid_angle);

							ctx.fillStyle = '#fff';
							if (i == 3) {
								// Darker text color for lighter background
								ctx.fillStyle = '#444';
							}
							var percent = String(Math.round(dataset.data[i] / total * 100)) + '%';
							// Display percent in another line, line break doesn't work for fillText
							ctx.fillText(percent, model.x + x, model.y + y + 15);
						}
					});
				}
			}
		}
	});
	var highYieldChart = new Chart(highYield, {
		type: 'pie',
		data: highYieldData,
		options: {
			title: {
				display: true,
				text: 'High Yield',
				fontColor: '#8cc63e',
				fontSize: 24
			},
			legend: {
				labels: {
					boxWidth: 100,
					fontSize: 16
				}
			},
			animation: {
				onComplete: function() {
					var ctx = this.chart.ctx;
					ctx.textAlign = 'center';
					ctx.textBaseline = 'bottom';

					this.data.datasets.forEach(function(dataset) {
						for (var i = 0; i < dataset.data.length; i++) {
							var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
								total = dataset._meta[Object.keys(dataset._meta)[0]].total,
								mid_radius = model.innerRadius + (model.outerRadius - model.innerRadius) / 2,
								start_angle = model.startAngle,
								end_angle = model.endAngle,
								mid_angle = start_angle + (end_angle - start_angle) / 2;

							var x = mid_radius * Math.cos(mid_angle);
							var y = mid_radius * Math.sin(mid_angle);

							ctx.fillStyle = '#fff';
							if (i == 3) {
								// Darker text color for lighter background
								ctx.fillStyle = '#444';
							}
							var percent = String(Math.round(dataset.data[i] / total * 100)) + '%';
							// Display percent in another line, line break doesn't work for fillText
							ctx.fillText(percent, model.x + x, model.y + y + 15);
						}
					});
				}
			}
		}
	});
	var opportunisticDebtChart = new Chart(opportunisticDebt, {
		type: 'pie',
		data: opportunisticDebtData,
		options: {
			title: {
				display: true,
				text: 'Opportunistic Debt',
				fontColor: '#8cc63e',
				fontSize: 24
			},
			legend: {
				labels: {
					boxWidth: 100,
					fontSize: 16
				}
			},
			animation: {
				onComplete: function() {
					var ctx = this.chart.ctx;
					ctx.textAlign = 'center';
					ctx.textBaseline = 'bottom';

					this.data.datasets.forEach(function(dataset) {
						for (var i = 0; i < dataset.data.length; i++) {
							var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
								total = dataset._meta[Object.keys(dataset._meta)[0]].total,
								mid_radius = model.innerRadius + (model.outerRadius - model.innerRadius) / 2,
								start_angle = model.startAngle,
								end_angle = model.endAngle,
								mid_angle = start_angle + (end_angle - start_angle) / 2;

							var x = mid_radius * Math.cos(mid_angle);
							var y = mid_radius * Math.sin(mid_angle);

							ctx.fillStyle = '#fff';
							if (i == 3) {
								// Darker text color for lighter background
								ctx.fillStyle = '#444';
							}
							var percent = String(Math.round(dataset.data[i] / total * 100)) + '%';
							// Display percent in another line, line break doesn't work for fillText
							ctx.fillText(percent, model.x + x, model.y + y + 15);
						}
					});
				}
			}
		}
	});
	var emergingMarketDebtChart = new Chart(emergingMarketDebt, {
		type: 'pie',
		data: emergingMarketDebtData,
		options: {
			title: {
				display: true,
				text: 'Emerging Market Debt',
				fontColor: '#8cc63e',
				fontSize: 24
			},
			legend: {
				labels: {
					boxWidth: 100,
					fontSize: 16
				}
			},
			animation: {
				onComplete: function() {
					var ctx = this.chart.ctx;
					ctx.textAlign = 'center';
					ctx.textBaseline = 'bottom';

					this.data.datasets.forEach(function(dataset) {
						for (var i = 0; i < dataset.data.length; i++) {
							var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
								total = dataset._meta[Object.keys(dataset._meta)[0]].total,
								mid_radius = model.innerRadius + (model.outerRadius - model.innerRadius) / 2,
								start_angle = model.startAngle,
								end_angle = model.endAngle,
								mid_angle = start_angle + (end_angle - start_angle) / 2;

							var x = mid_radius * Math.cos(mid_angle);
							var y = mid_radius * Math.sin(mid_angle);

							ctx.fillStyle = '#fff';
							if (i == 3) {
								// Darker text color for lighter background
								ctx.fillStyle = '#444';
							}
							var percent = String(Math.round(dataset.data[i] / total * 100)) + '%';
							// Display percent in another line, line break doesn't work for fillText
							ctx.fillText(percent, model.x + x, model.y + y + 15);
						}
					});
				}
			}
		}
	});
	var intermediateInvestmentChart = new Chart(intermediateInvestment, {
		type: 'pie',
		data: intermediateInvestmentData,
		options: {
			title: {
				display: true,
				text: 'Intermediate Investment',
				fontColor: '#8cc63e',
				fontSize: 24
			},
			legend: {
				labels: {
					boxWidth: 100,
					fontSize: 16
				}
			},
			animation: {
				onComplete: function() {
					var ctx = this.chart.ctx;
					ctx.textAlign = 'center';
					ctx.textBaseline = 'bottom';

					this.data.datasets.forEach(function(dataset) {
						for (var i = 0; i < dataset.data.length; i++) {
							var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
								total = dataset._meta[Object.keys(dataset._meta)[0]].total,
								mid_radius = model.innerRadius + (model.outerRadius - model.innerRadius) / 2,
								start_angle = model.startAngle,
								end_angle = model.endAngle,
								mid_angle = start_angle + (end_angle - start_angle) / 2;

							var x = mid_radius * Math.cos(mid_angle);
							var y = mid_radius * Math.sin(mid_angle);

							ctx.fillStyle = '#fff';
							if (i == 3) {
								// Darker text color for lighter background
								ctx.fillStyle = '#444';
							}
							var percent = String(Math.round(dataset.data[i] / total * 100)) + '%';
							// Display percent in another line, line break doesn't work for fillText
							ctx.fillText(percent, model.x + x, model.y + y + 15);
						}
					});
				}
			}
		}
	});
	var longTermGovernmentChart = new Chart(longTermGovernment, {
		type: 'pie',
		data: longTermGovernmentData,
		options: {
			title: {
				display: true,
				text: 'Long Term Government',
				fontColor: '#8cc63e',
				fontSize: 24
			},
			legend: {
				labels: {
					boxWidth: 100,
					fontSize: 16
				}
			},
			animation: {
				onComplete: function() {
					var ctx = this.chart.ctx;
					ctx.textAlign = 'center';
					ctx.textBaseline = 'bottom';

					this.data.datasets.forEach(function(dataset) {
						for (var i = 0; i < dataset.data.length; i++) {
							var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
								total = dataset._meta[Object.keys(dataset._meta)[0]].total,
								mid_radius = model.innerRadius + (model.outerRadius - model.innerRadius) / 2,
								start_angle = model.startAngle,
								end_angle = model.endAngle,
								mid_angle = start_angle + (end_angle - start_angle) / 2;

							var x = mid_radius * Math.cos(mid_angle);
							var y = mid_radius * Math.sin(mid_angle);

							ctx.fillStyle = '#fff';
							if (i == 3) {
								// Darker text color for lighter background
								ctx.fillStyle = '#444';
							}
							var percent = String(Math.round(dataset.data[i] / total * 100)) + '%';
							// Display percent in another line, line break doesn't work for fillText
							ctx.fillText(percent, model.x + x, model.y + y + 15);
						}
					});
				}
			}
		}
	});
	var tipsChart = new Chart(tips, {
		type: 'pie',
		data: tipsData,
		options: {
			title: {
				display: true,
				text: 'TIPS',
				fontColor: '#8cc63e',
				fontSize: 24
			},
			legend: {
				labels: {
					boxWidth: 100,
					fontSize: 16
				}
			},
			animation: {
				onComplete: function() {
					var ctx = this.chart.ctx;
					ctx.textAlign = 'center';
					ctx.textBaseline = 'bottom';

					this.data.datasets.forEach(function(dataset) {
						for (var i = 0; i < dataset.data.length; i++) {
							var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
								total = dataset._meta[Object.keys(dataset._meta)[0]].total,
								mid_radius = model.innerRadius + (model.outerRadius - model.innerRadius) / 2,
								start_angle = model.startAngle,
								end_angle = model.endAngle,
								mid_angle = start_angle + (end_angle - start_angle) / 2;

							var x = mid_radius * Math.cos(mid_angle);
							var y = mid_radius * Math.sin(mid_angle);

							ctx.fillStyle = '#fff';
							if (i == 3) {
								// Darker text color for lighter background
								ctx.fillStyle = '#444';
							}
							var percent = String(Math.round(dataset.data[i] / total * 100)) + '%';
							// Display percent in another line, line break doesn't work for fillText
							ctx.fillText(percent, model.x + x, model.y + y + 15);
						}
					});
				}
			}
		}
	});
	var usChart = new Chart(us, {
		type: 'pie',
		data: usData,
		options: {
			title: {
				display: true,
				text: 'U.S.',
				fontColor: '#8cc63e',
				fontSize: 24
			},
			legend: {
				labels: {
					boxWidth: 100,
					fontSize: 16
				}
			},
			animation: {
				onComplete: function() {
					var ctx = this.chart.ctx;
					ctx.textAlign = 'center';
					ctx.textBaseline = 'bottom';

					this.data.datasets.forEach(function(dataset) {
						for (var i = 0; i < dataset.data.length; i++) {
							var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
								total = dataset._meta[Object.keys(dataset._meta)[0]].total,
								mid_radius = model.innerRadius + (model.outerRadius - model.innerRadius) / 2,
								start_angle = model.startAngle,
								end_angle = model.endAngle,
								mid_angle = start_angle + (end_angle - start_angle) / 2;

							var x = mid_radius * Math.cos(mid_angle);
							var y = mid_radius * Math.sin(mid_angle);

							ctx.fillStyle = '#fff';
							if (i == 3) {
								// Darker text color for lighter background
								ctx.fillStyle = '#444';
							}
							var percent = String(Math.round(dataset.data[i] / total * 100)) + '%';
							// Display percent in another line, line break doesn't work for fillText
							ctx.fillText(percent, model.x + x, model.y + y + 15);
						}
					});
				}
			}
		}
	});
	var developedForeignEquityChart = new Chart(developedForeignEquity, {
		type: 'pie',
		data: developedForeignEquityData,
		options: {
			title: {
				display: true,
				text: 'Developed Foreign Equity',
				fontColor: '#8cc63e',
				fontSize: 24
			},
			legend: {
				labels: {
					boxWidth: 100,
					fontSize: 16
				}
			},
			animation: {
				onComplete: function() {
					var ctx = this.chart.ctx;
					ctx.textAlign = 'center';
					ctx.textBaseline = 'bottom';

					this.data.datasets.forEach(function(dataset) {
						for (var i = 0; i < dataset.data.length; i++) {
							var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
								total = dataset._meta[Object.keys(dataset._meta)[0]].total,
								mid_radius = model.innerRadius + (model.outerRadius - model.innerRadius) / 2,
								start_angle = model.startAngle,
								end_angle = model.endAngle,
								mid_angle = start_angle + (end_angle - start_angle) / 2;

							var x = mid_radius * Math.cos(mid_angle);
							var y = mid_radius * Math.sin(mid_angle);

							ctx.fillStyle = '#fff';
							if (i == 3) {
								// Darker text color for lighter background
								ctx.fillStyle = '#444';
							}
							var percent = String(Math.round(dataset.data[i] / total * 100)) + '%';
							// Display percent in another line, line break doesn't work for fillText
							ctx.fillText(percent, model.x + x, model.y + y + 15);
						}
					});
				}
			}
		}
	});
	var emergingMarketsChart = new Chart(emergingMarkets, {
		type: 'pie',
		data: emergingMarketsData,
		options: {
			title: {
				display: true,
				text: 'Emerging Markets',
				fontColor: '#8cc63e',
				fontSize: 24
			},
			legend: {
				labels: {
					boxWidth: 100,
					fontSize: 16
				}
			},
			animation: {
				onComplete: function() {
					var ctx = this.chart.ctx;
					ctx.textAlign = 'center';
					ctx.textBaseline = 'bottom';

					this.data.datasets.forEach(function(dataset) {
						for (var i = 0; i < dataset.data.length; i++) {
							var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
								total = dataset._meta[Object.keys(dataset._meta)[0]].total,
								mid_radius = model.innerRadius + (model.outerRadius - model.innerRadius) / 2,
								start_angle = model.startAngle,
								end_angle = model.endAngle,
								mid_angle = start_angle + (end_angle - start_angle) / 2;

							var x = mid_radius * Math.cos(mid_angle);
							var y = mid_radius * Math.sin(mid_angle);

							ctx.fillStyle = '#fff';
							if (i == 3) {
								// Darker text color for lighter background
								ctx.fillStyle = '#444';
							}
							var percent = String(Math.round(dataset.data[i] / total * 100)) + '%';
							// Display percent in another line, line break doesn't work for fillText
							ctx.fillText(percent, model.x + x, model.y + y + 15);
						}
					});
				}
			}
		}
	});
	var equitiesChart = new Chart(equities, {
		type: 'pie',
		data: equitiesData,
		options: {
			title: {
				display: true,
				text: 'Equities',
				fontColor: '#8cc63e',
				fontSize: 24
			},
			legend: {
				labels: {
					boxWidth: 100,
					fontSize: 16
				}
			},
			animation: {
				onComplete: function() {
					var ctx = this.chart.ctx;
					ctx.textAlign = 'center';
					ctx.textBaseline = 'bottom';

					this.data.datasets.forEach(function(dataset) {
						for (var i = 0; i < dataset.data.length; i++) {
							var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
								total = dataset._meta[Object.keys(dataset._meta)[0]].total,
								mid_radius = model.innerRadius + (model.outerRadius - model.innerRadius) / 2,
								start_angle = model.startAngle,
								end_angle = model.endAngle,
								mid_angle = start_angle + (end_angle - start_angle) / 2;

							var x = mid_radius * Math.cos(mid_angle);
							var y = mid_radius * Math.sin(mid_angle);

							ctx.fillStyle = '#fff';
							if (i == 3) {
								// Darker text color for lighter background
								ctx.fillStyle = '#444';
							}
							var percent = String(Math.round(dataset.data[i] / total * 100)) + '%';
							// Display percent in another line, line break doesn't work for fillText
							ctx.fillText(percent, model.x + x, model.y + y + 15);
						}
					});
				}
			}
		}
	});
	var realEstateChart = new Chart(realEstate, {
		type: 'pie',
		data: realEstateData,
		options: {
			title: {
				display: true,
				text: 'Real Assets',
				fontColor: '#8cc63e',
				fontSize: 24
			},
			legend: {
				labels: {
					boxWidth: 100,
					fontSize: 16
				}
			},
			animation: {
				onComplete: function() {
					var ctx = this.chart.ctx;
					ctx.textAlign = 'center';
					ctx.textBaseline = 'bottom';

					this.data.datasets.forEach(function(dataset) {
						for (var i = 0; i < dataset.data.length; i++) {
							var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
								total = dataset._meta[Object.keys(dataset._meta)[0]].total,
								mid_radius = model.innerRadius + (model.outerRadius - model.innerRadius) / 2,
								start_angle = model.startAngle,
								end_angle = model.endAngle,
								mid_angle = start_angle + (end_angle - start_angle) / 2;

							var x = mid_radius * Math.cos(mid_angle);
							var y = mid_radius * Math.sin(mid_angle);

							ctx.fillStyle = '#fff';
							if (i == 3) {
								// Darker text color for lighter background
								ctx.fillStyle = '#444';
							}
							var percent = String(Math.round(dataset.data[i] / total * 100)) + '%';
							// Display percent in another line, line break doesn't work for fillText
							ctx.fillText(percent, model.x + x, model.y + y + 15);
						}
					});
				}
			}
		}
	});

	var fixedIncomeChart = new Chart(fixedIncome, {
		type: 'pie',
		data: fixedIncomeData,
		options: {
			title: {
				display: true,
				text: 'Fixed Income',
				fontColor: '#8cc63e',
				fontSize: 24
			},
			legend: {
				labels: {
					boxWidth: 100,
					fontSize: 16
				}
			},
			animation: {
				onComplete: function() {
					var ctx = this.chart.ctx;
					ctx.textAlign = 'center';
					ctx.textBaseline = 'bottom';

					this.data.datasets.forEach(function(dataset) {
						for (var i = 0; i < dataset.data.length; i++) {
							var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
								total = dataset._meta[Object.keys(dataset._meta)[0]].total,
								mid_radius = model.innerRadius + (model.outerRadius - model.innerRadius) / 2,
								start_angle = model.startAngle,
								end_angle = model.endAngle,
								mid_angle = start_angle + (end_angle - start_angle) / 2;

							var x = mid_radius * Math.cos(mid_angle);
							var y = mid_radius * Math.sin(mid_angle);

							ctx.fillStyle = '#fff';
							if (i == 3) {
								// Darker text color for lighter background
								ctx.fillStyle = '#444';
							}
							var percent = String(Math.round(dataset.data[i] / total * 100)) + '%';
							// Display percent in another line, line break doesn't work for fillText
							ctx.fillText(percent, model.x + x, model.y + y + 15);
						}
					});
				}
			}
		}
	});
}
