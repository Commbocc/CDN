$(document).ready(function () {

	var chartColors = ['#4572A7', '#AA4643', '#89A54E', '#80699B', '#3D96AE', 
	'#DB843D', '#92A8CD', '#A47D7C', '#B5CA92'];

	// functions

	function chartSeriesData(csvData, chartObj) {
		var seriesData = [];
		var lines = csvData.split(/\r|\r\n|\n/);
		$.each(lines, function(index,line) {
			var items = line.split(',');
			if (items[0].length) {
				seriesData.push({
					name: items[0],
					y:parseFloat(items[1])
				});
			};
		});
		if (chartObj.data('mini') == "false") {
			return seriesData;
		} else {
			return minisculeValues(seriesData, chartObj);
		}
	}

	function minisculeValues(seriesData, chartObj) {
		var minThreshold = chartObj.data('misc-threshold') || .035;
		var miniValue = 0;
		var miniLabel = "";
		var total = 0;
		var passedValues= [];
		seriesData.forEach(function(line) {	total += line.y; });

		var i = 0;
		seriesData.forEach(function(line) {
			if ( line.y/total <= minThreshold ) {
				i++;
				miniValue += line.y;
				miniLabel = miniLabel.concat(line.name+": "+line.y+"<br>");
			} else {
				passedValues.push(line);
			}
		});

		if (i == 1) {
			passedValues.sort(compare);
			miniValue += passedValues[0].y;
			miniLabel = miniLabel.concat(passedValues[0].name+": "+passedValues[0].y+"<br>");
			passedValues.shift();
		};

		if (miniValue > 0) {
			passedValues.push({
				name: "Misc. ≤ " + (minThreshold*100).toFixed(1) +"%",
				tooltip: miniLabel,
				y: miniValue
			});
		};

		return passedValues;
	}

	function compare(a,b) {
		if (a.y < b.y)
			return -1;
		if (a.y > b.y)
			return 1;
		return 0;
	}

	// execs

	$('body').append("<style type=\"text/css\">.chart .data { display: none; }</style>");

	$('.chart.chart-pie').each(function(){
		var options = {
			colors: chartColors,
			chart: {
				type: 'pie',
				options3d: {
					enabled: $(this).data('3d') || false,
					alpha: 40
				}
			},
			title: {
				text: $(this).data('title') || null
			},
			tooltip: {
				pointFormat: '{point.tooltip}{series.name}: <b>{point.y}</b> ({point.percentage:.1f}%)'
			},
			plotOptions: {
				pie: {
					innerSize: $(this).data('inner-size') || 0,
					depth: 45,
					allowPointSelect: true,
					cursor: 'pointer',
					dataLabels: {
						enabled: true,
							// format: '<b>{point.name}</b>: {point.percentage:.1f} %'
						},
						showInLegend: false
					}
				},
				series: [{
					name: null
				}]
			};
			var csvData = $(this, '.data').text().replace(/\t/g, '');
			options.series.push({
				data: chartSeriesData(csvData, $(this)),
				name: $(this).data('series-name') || 'Value'}
				);
			$(this).highcharts(options);
		});

	$('.chart.chart-column').each(function(){
		var options = {
			colors: chartColors,
			chart: {
				type: 'column'
			},
			title: {
				text: $(this).data('title') || null
			},
			xAxis: {
				type: 'category',
				title: {
					text: $(this).data('xaxis-label') || null
				},
				labels: {
					rotation: -45,
					style: {
						fontSize: '13px',
						fontFamily: 'Verdana, sans-serif'
					}
				}
			},
			yAxis: {
				min: 0,
				title: {
					text: $(this).data('yaxis-label') || null
				}
			},
			legend: {
				enabled: false
			},
			tooltip: {
				pointFormat: '{point.tooltip}<b>${point.y}</b>'
			},
			series: [{
				name: 'Population',
				dataLabels: {
					enabled: true,
					rotation: -90,
					color: '#FFFFFF',
					align: 'right',
					x: 4,
					y: 10,
					style: {
						fontSize: '13px',
						fontFamily: 'Verdana, sans-serif',
						textShadow: '0 0 3px black'
					}
				}
			}]
		};
		var csvData = $(this, '.data').text().replace(/\t/g, '');
		options.series.push({
			data: chartSeriesData(csvData, $(this)),
			name: $(this).data('series-name') || 'Value'}
			);
		$(this).highcharts(options);
	});

});