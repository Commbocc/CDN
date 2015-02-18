$(document).ready(function () {

	function googleData(sheet) {
		sheet = sheet || 1;
		var theData = Highcharts.data({
			googleSpreadsheetKey: '1z-LA9Htodmj4G5Eq82myGKbaxElYEr_BC994PFsNujE',
			googleSpreadsheetWorksheet: sheet
		});
		return theData;
	}

	var allValueData = Highcharts.data({
		googleSpreadsheetKey: '1z-LA9Htodmj4G5Eq82myGKbaxElYEr_BC994PFsNujE',
		googleSpreadsheetWorksheet: 1
	});	

	console.log(googleData(1));

	var chart = new Highcharts.Chart({
		chart: {
			renderTo: 'allCountyPermits',
			zoomType: 'x'
		},
		data: {
			googleSpreadsheetKey: '1z-LA9Htodmj4G5Eq82myGKbaxElYEr_BC994PFsNujE',
			googleSpreadsheetWorksheet: 2,
			parsed: function (columns) {
				generateTable(columns);
			}
		},
		title: {
			text: 'Issued Permits - All County'
		},
		subtitle: {
			text: 'Click a data column for more information.'
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
			color: Highcharts.getOptions().colors[0],
			point: { events: { click: pointClick } },
			cursor: 'pointer'
		}, {
			type: 'column',
			index: 1,
			color: Highcharts.getOptions().colors[2],
			point: { events: { click: pointClick } },
			cursor: 'pointer'
		}, {
			type: 'column',
			index: 2,
			color: Highcharts.getOptions().colors[3],
			point: { events: { click: pointClick } },
			cursor: 'pointer'
		}, {
			type: 'spline',
			index: 3,
			color: Highcharts.getOptions().colors[5],
			marker: {
				lineWidth: 2,
				lineColor: Highcharts.getOptions().colors[5],
				fillColor: 'white'			
			}
		}]
	});

	function pointClick() {
		var $div = $('<div></div>').dialog({
			title: this.name,
			width: '60%',
			height: 450
		});

		var dataColumn = allValueData.columns[this.index+3]

		var eoMonth = this.x;
		var eoMonthName = dataColumn[0];
		var serieName = this.series.name;

		var monthData = [];
		for (var i = 0; i < dataColumn.length; i++) {
			var category = allValueData.columns[0][i]
			if ( category && dataColumn[i] && category.indexOf(serieName) > -1 ) {
				monthData.push({name: allValueData.columns[2][i], y: dataColumn[i]});
			};
		};

		window.chart = new Highcharts.Chart({
			chart: {
				renderTo: $div[0],
				type: 'pie'
			},
			title: {
				text: serieName + " - " + eoMonthName
			},
			tooltip: {
				pointFormat: '{point.tooltip}{series.name}: <b>{point.y}</b> ({point.percentage:.1f}%)'
			},
			credits: {
				enabled: false
			},
			series: [{
				name: 'Permits',
				data: minisculeValues(monthData)
			}]
		});
	}

	function generateTable(data) {
		var lastRowIndex = data[0].length - 1,
		monthsArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		d = new Date(data[0][lastRowIndex]),
		month = monthsArray[d.getMonth()+1],
		year = d.getFullYear(),
		latestMonth = month + ". " + year;

		$("#lastMonthStats").append('<div class="bs">');
		$table = $("#lastMonthStats > div.bs");

		$table.append('<table class="table table-striped"><thead><tr><th>Permit Types</th><th>No. Issued '+latestMonth+'</th><th>Value of Permits Issued</th><th>Charts</th></tr></thead><tbody>');

		

		for (var i = 0; i < data.length; i++) {
			if (i == 0) continue;

			var chartLink = (i < data.length - 1 ? '<a href="#" class="generateChart" data-series="'+allValueData+'">View Chart</a>' : '');

			$table.find('tbody').append('<tr><td>'+data[i][0]+'</td><td>'+data[i][lastRowIndex]+'</td><td></td><td>'+chartLink+'</td>');
		}
	}

	function minisculeValues(seriesData) {
		var minThreshold = .035;
		var miniValue = 0;
		var miniLabel = "";
		var total = 0;
		var passedValues= [];
		for (var i = 0; i < seriesData.length; i++) {
			total += seriesData[i].y;
		};

		for (var i = 0; i < seriesData.length; i++) {
			if ( seriesData[i].y/total <= minThreshold ) {
				miniValue += seriesData[i].y;
				miniLabel = miniLabel.concat(seriesData[i].name+": "+seriesData[i].y+"<br>");
			} else {
				passedValues.push(seriesData[i]);
			}
		};

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

	$('body').on('click', 'a.generateChart', function(){
		var $div = $('<div></div>').dialog({
			width: '60%',
			height: 450
		});

		window.chart = new Highcharts.Chart({
			chart: {
				renderTo: $div[0],
				type: 'pie'
			},
			title: {
				text: 'title'
			},
			tooltip: {
				// pointFormat: '{point.tooltip}{series.name}: <b>{point.y}</b> ({point.percentage:.1f}%)'
			},
			credits: {
				enabled: false
			},
			series: [{
            type: 'pie',
            data: [
                ['Firefox',   45.0],
                ['IE',       26.8],
                ['Safari',    8.5],
                ['Opera',     6.2],
                ['Others',   0.7]
            ]
        }]
		});
	});

});