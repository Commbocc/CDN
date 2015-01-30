$(document).ready(function () {

	// functions

	function chartSeriesData(csvData) {
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
		return seriesData;
	}

	// execs

	$('body').append("<style type=\"text/css\">pre.data { display: none; } .chart-pie { min-width: 310px; height: 400px; max-width: 600px; margin: 0 auto }</style>");

	$('.chart-pie').each(function(){
		var options = {
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
				pointFormat: '{series.name}: <b>{point.y}</b> ({point.percentage:.1f}%)'
			},
			plotOptions: {
				pie: {
					innerSize: 100,
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
				data: chartSeriesData(csvData),
				name: $(this).data('series-name') || 'Value'}
				);
			$(this).highcharts(options);
		});


	$('.chart-column').each(function(){
		var options = {
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
				pointFormat: '<b>${point.y}</b>'
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
			data: chartSeriesData(csvData),
			name: $(this).data('series-name') || 'Value'}
			);
		$(this).highcharts(options);
	});

});