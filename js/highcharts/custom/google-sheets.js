$(document).ready(function () {

	var options = {
		data: {
			googleSpreadsheetKey: '1z-LA9Htodmj4G5Eq82myGKbaxElYEr_BC994PFsNujE',
			googleSpreadsheetWorksheet: 2,
			parsed: function (columns) {
				// console.log(columns);
			}
		},
		title: {
			text: 'Issued Permits - All County'
		},
		credits: {
			enabled: false
		},
		yAxis: {
			title: {
				text: 'Permits'
			}
		},
		series: [
		{
			type: 'column',
			index: 0,
			color: Highcharts.getOptions().colors[0]
		}, {
			type: 'column',
			index: 1,
			color: Highcharts.getOptions().colors[2]
		}, {
			type: 'column',
			index: 2,
			color: Highcharts.getOptions().colors[3]
		}, {
			type: 'spline',
			index: 3,
			color: Highcharts.getOptions().colors[5],
			marker: {
				lineWidth: 2,
				lineColor: Highcharts.getOptions().colors[5],
				fillColor: 'white'			
			},
			point: {
				events: {
					click: pointClick
				}
			},
		}]
	};

	$('.chart.chart-google').highcharts(options);

	var allData = Highcharts.data({
		googleSpreadsheetKey: '1z-LA9Htodmj4G5Eq82myGKbaxElYEr_BC994PFsNujE',
		googleSpreadsheetWorksheet: 3
	});

	function pointClick() {
		// console.log(this);
		var $div = $('<div></div>').dialog({
			title: this.name,
			width: '60%',
			height: 450
		});

		window.chart = new Highcharts.Chart({
			chart: {
				renderTo: $div[0],
				type: 'coulmn'
			},
			data: {
				googleSpreadsheetKey: '1z-LA9Htodmj4G5Eq82myGKbaxElYEr_BC994PFsNujE',
				googleSpreadsheetWorksheet: 2
			}
			// series: [{
			// 	type: 'pie',
			// 	name: 'Browser share',
			// 	data: [
			// 	['Firefox',   45.0],
			// 	['IE',       26.8],
			// 	{
			// 		name: 'Chrome',
			// 		y: 12.8,
			// 		sliced: true,
			// 		selected: true
			// 	},
			// 	['Safari',    8.5],
			// 	['Opera',     6.2],
			// 	['Others',   0.7]
			// 	]
			// }]
		});

	}

});