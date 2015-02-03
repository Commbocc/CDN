$(document).ready(function () {

	$('.chart.chart-drilldown').highcharts({
		title: {
			text: 'Issued Permits -All County'
		},
		chartColors: ['#4572A7', '#AA4643', '#89A54E', '#80699B', '#3D96AE', '#DB843D', '#92A8CD', '#A47D7C', '#B5CA92'],
		xAxis: {
			categories: ['Oct, 2013', 'Nov, 2013', 'Dec, 2013', 'Jan, 2014', 'Feb, 2014', 'Mar, 2014', 'Apr, 2014', 'May, 2014', 'Jun, 2014', 'Jul, 2014', 'Aug, 2014', 'Sep, 2014', 'Oct, 2014', 'Nov, 2014', 'Dec, 2014']
		},
		// labels: {
		// 	items: [{
		// 		// html: 'Total',
		// 		style: {
		// 			left: '50px',
		// 			top: '18px'
		// 		}
		// 	}]
		// },
		series: [{
			type: 'column',
			name: 'New Residential',
			data: [228, 227, 187, 257, 221, 302, 311, 356, 306, 335, 296, 347, 278, 293, 246]
		}, {
			type: 'column',
			name: 'Commercial',
			data: [15, 43, 14, 16, 58, 6, 33, 21, 40, 28, 18, 21, 25, 10, 16]
		}, {
			type: 'column',
			name: 'Residential Other',
			data: [869, 655, 622, 678, 655, 710, 836, 801, 866, 780, 730, 761, 901, 596, 761
			]
		}, {
			type: 'column',
			name: 'Commercial Other',
			data: [196, 152, 226, 184, 180, 182, 276, 210, 234, 263, 317, 261, 239, 187, 214]
		}, {
			type: 'column',
			name: 'Other',
			data: [1964, 1508, 1486, 1737, 1798, 1916, 2230, 2316, 2448, 2437, 2348, 2191, 2379, 1673, 2086]
		}, {
			type: 'spline',
			name: 'Total',
			data: [3272, 2585, 2534, 2872, 2912, 3116, 3686, 3704, 3894, 3843, 3709, 3581, 3822, 2759, 3323],
			marker: {
				lineWidth: 2,
				lineColor: Highcharts.getOptions().colors[3],
				fillColor: 'white'
			}
		}, {
			type: 'spline',
			name: 'Residential',
			data: [1097, 882, 808, 935, 876, 1012, 1147, 1157, 1172, 1115, 1026, 1108, 1179, 889, 1007],
			color: Highcharts.getOptions().colors[0]
		}, {
			type: 'spline',
			name: 'Commercial',
			data: [211, 195, 240, 200, 238, 188, 309, 231, 274, 291, 335, 282, 264, 197, 230],
			color: Highcharts.getOptions().colors[1]
		}]
	});

	// $('.chart.chart-drilldown').highcharts({
	// 	data: {
	// 		googleSpreadsheetKey: '1z-LA9Htodmj4G5Eq82myGKbaxElYEr_BC994PFsNujE',
	// 		googleSpreadsheetWorksheet: 1
	// 	},
	// 	title: {
	// 		text: 'Data from a Google spreadsheet'
	// 	},
	// 	chart: {
	// 		type: 'column'
	// 	}
	// });

});