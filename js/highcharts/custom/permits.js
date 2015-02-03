$(document).ready(function () {

	$('.chart.chart-permits').highcharts({
		title: {
			text: 'Issued Permits -All County'
		},
		chartColors: ['#4572A7', '#AA4643', '#89A54E', '#80699B', '#3D96AE', '#DB843D', '#92A8CD', '#A47D7C', '#B5CA92'],
		xAxis: {
			categories: ['Oct, 2013', 'Nov, 2013', 'Dec, 2013', 'Jan, 2014', 'Feb, 2014', 'Mar, 2014', 'Apr, 2014', 'May, 2014', 'Jun, 2014', 'Jul, 2014', 'Aug, 2014', 'Sep, 2014', 'Oct, 2014', 'Nov, 2014', 'Dec, 2014']
		},
		series: [{
			type: 'spline',
			name: 'Total',
			data: [3272, 2585, 2534, 2872, 2912, 3116, 3686, 3704, 3894, 3843, 3709, 3581, 3822, 2759, 3323],
			marker: {
				lineWidth: 2,
				lineColor: Highcharts.getOptions().colors[4],
				fillColor: 'white'
			},
			color: Highcharts.getOptions().colors[4]
		}, {
			type: 'column',
			name: 'Residential',
			data: [1097, 882, 808, 935, 876, 1012, 1147, 1157, 1172, 1115, 1026, 1108, 1179, 889, 1007],
			color: Highcharts.getOptions().colors[0]
		}, {
			type: 'column',
			name: 'Commercial',
			data: [211, 195, 240, 200, 238, 188, 309, 231, 274, 291, 335, 282, 264, 197, 230],
			color: Highcharts.getOptions().colors[2]
		},{
			type: 'column',
			name: 'Other',
			data: [1964, 1508, 1486, 1737, 1798, 1916, 2230, 2316, 2448, 2437, 2348, 2191, 2379, 1673, 2086],
			color: Highcharts.getOptions().colors[3]
		}]
	});

});