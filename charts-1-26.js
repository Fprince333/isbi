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
				'#58585a',
				'#0b9444',
				'#8cc63e',
				'#000000',
				'#58585a',
				'#58585a',
				'#58585a',
				'#0b9444',
				'#0b9444',
				'#0b9444',
				'#8cc63e',
				'#8cc63e',
				'#8cc63e',
				'#8cc63e',
				'#000000',
				'#000000',
				'#000000'
			]
		},
		{
			data: [15, 22, 51, 12],
			backgroundColor: ['#58585a', '#0b9444', '#8cc63e', '#000000']
		}
	],
	labels: [
		'Credit',
		'Bonds',
		'Equities',
		'Real Estate',
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
		'Core real estate',
		'Non-Core real estate',
		'Infrastructure'
	]
};

var privateEquityData = {
	datasets: [
		{
			data: [70, 30],
			backgroundColor: ['#3498db', '#e74c3c']
		}
	],
	labels: ['Passive', 'Active']
};

var coreRealEstateData = {
	datasets: [
		{
			data: [65, 35],
			backgroundColor: ['#3498db', '#e74c3c']
		}
	],
	labels: ['Passive', 'Active']
};

var nonCoreRealEstateData = {
	datasets: [
		{
			data: [55, 45],
			backgroundColor: ['#3498db', '#e74c3c']
		}
	],
	labels: ['Passive', 'Active']
};

var infrastructureData = {
	datasets: [
		{
			data: [80, 20],
			backgroundColor: ['#3498db', '#e74c3c']
		}
	],
	labels: ['Passive', 'Active']
};

var highYieldData = {
	datasets: [
		{
			data: [79, 21],
			backgroundColor: ['#3498db', '#e74c3c']
		}
	],
	labels: ['Passive', 'Active']
};

var opportunisticDebtData = {
	datasets: [
		{
			data: [60, 40],
			backgroundColor: ['#3498db', '#e74c3c']
		}
	],
	labels: ['Passive', 'Active']
};

var emergingMarketDebtData = {
	datasets: [
		{
			data: [72, 28],
			backgroundColor: ['#3498db', '#e74c3c']
		}
	],
	labels: ['Passive', 'Active']
};

var intermediateInvestmentData = {
	datasets: [
		{
			data: [93, 7],
			backgroundColor: ['#3498db', '#e74c3c']
		}
	],
	labels: ['Passive', 'Active']
};

var longTermGovernmentData = {
	datasets: [
		{
			data: [87, 13],
			backgroundColor: ['#3498db', '#e74c3c']
		}
	],
	labels: ['Passive', 'Active']
};

var tipsData = {
	datasets: [
		{
			data: [94, 6],
			backgroundColor: ['#3498db', '#e74c3c']
		}
	],
	labels: ['Passive', 'Active']
};

var usData = {
	datasets: [
		{
			data: [53, 47],
			backgroundColor: ['#3498db', '#e74c3c']
		}
	],
	labels: ['Passive', 'Active']
};

var developedForeignEquityData = {
	datasets: [
		{
			data: [59, 41],
			backgroundColor: ['#3498db', '#e74c3c']
		}
	],
	labels: ['Passive', 'Active']
};

var emergingMarketsData = {
	datasets: [
		{
			data: [88, 12],
			backgroundColor: ['#3498db', '#e74c3c']
		}
	],
	labels: ['Passive', 'Active']
};

var equitiesData = {
	datasets: [
		{
			data: [66, 34],
			backgroundColor: ['#3498db', '#e74c3c']
		}
	],
	labels: ['Passive', 'Active']
};

var realEstateData = {
	datasets: [
		{
			data: [75, 25],
			backgroundColor: ['#3498db', '#e74c3c']
		}
	],
	labels: ['Passive', 'Active']
};

var creditData = {
	datasets: [
		{
			data: [69, 31],
			backgroundColor: ['#3498db', '#e74c3c']
		}
	],
	labels: ['Passive', 'Active']
};

var bondsData = {
	datasets: [
		{
			data: [85, 15],
			backgroundColor: ['#3498db', '#e74c3c']
		}
	],
	labels: ['Passive', 'Active']
};

if (window.location.pathname.indexOf('portfolio') > -1) {
	var privateEquity = document.getElementById('private-equity');
	var coreRealEstate = document.getElementById('core-real-estate');
	var nonCoreRealEstate = document.getElementById('non-core-real-estate');
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
	var realEstate = document.getElementById('real-estate');
	var credit = document.getElementById('credit');
	var bonds = document.getElementById('bonds');
	var portfolio = document.getElementById('portfolio');

	var mainPortfolio = new Chart(portfolio, {
		type: 'doughnut',
		data: portfolioData,
		options: {
			title: {
				display: true,
				text: 'Title TBD',
				fontColor: '#8cc63e',
				fontSize: 30
			},
			legend: {
				labels: {
					boxWidth: 100,
					fontSize: 16,
					filter: function(legendItem, data) {
						return legendItem.index < 4 ? legendItem : null;
					}
				}
			},
			tooltips: {
				callbacks: {
					label: function(tooltipItem, data) {
						return (
							data.labels[tooltipItem.index] +
							' ' +
							data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] +
							'%'
						);
					}
				}
			},
			cutoutPercentage: 10,
			animation: {
				animateScale: true,
				duration: 2500
			},
			onHover: function(event) {
				let chartId =
					'#' +
					this.active[0]._model.label
						.toLowerCase()
						.split(':')[0]
						.replace(/\./g, '')
						.replace(/ +/g, '-');
				showSecondaryChart(chartId);
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
			}
		}
	});
	var coreRealEstateChart = new Chart(coreRealEstate, {
		type: 'pie',
		data: coreRealEstateData,
		options: {
			title: {
				display: true,
				text: 'Core Real Estate',
				fontColor: '#8cc63e',
				fontSize: 24
			},
			legend: {
				labels: {
					boxWidth: 100,
					fontSize: 16
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
				text: 'Non Core Real Estate',
				fontColor: '#8cc63e',
				fontSize: 24
			},
			legend: {
				labels: {
					boxWidth: 100,
					fontSize: 16
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
			}
		}
	});
	var realEstateChart = new Chart(realEstate, {
		type: 'pie',
		data: realEstateData,
		options: {
			title: {
				display: true,
				text: 'Real Estate',
				fontColor: '#8cc63e',
				fontSize: 24
			},
			legend: {
				labels: {
					boxWidth: 100,
					fontSize: 16
				}
			}
		}
	});
	var creditChart = new Chart(credit, {
		type: 'pie',
		data: creditData,
		options: {
			title: {
				display: true,
				text: 'Credit',
				fontColor: '#8cc63e',
				fontSize: 24
			},
			legend: {
				labels: {
					boxWidth: 100,
					fontSize: 16
				}
			}
		}
	});
	var bondsChart = new Chart(bonds, {
		type: 'pie',
		data: bondsData,
		options: {
			title: {
				display: true,
				text: 'Bonds',
				fontColor: '#8cc63e',
				fontSize: 24
			},
			legend: {
				labels: {
					boxWidth: 100,
					fontSize: 16
				}
			}
		}
	});
}
