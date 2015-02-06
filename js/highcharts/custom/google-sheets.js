$(document).ready(function () {

	var d = new Date();
	var oneYearAgo = new Date( d.getMonth()+"/"+d.getDate()+"/"+(d.getFullYear()-1)).getTime();
	if (navigator.appVersion.indexOf("MSIE")!=-1) { oneYearAgo = null; };

	var chart = new Highcharts.Chart({
		chart: {
			renderTo: 'allCountyPermits'
		},
		data: {
			googleSpreadsheetKey: '1z-LA9Htodmj4G5Eq82myGKbaxElYEr_BC994PFsNujE',
			googleSpreadsheetWorksheet: 2
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
		scrollbar: {
		    enabled: true
		},
		xAxis: {
			min: oneYearAgo
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

	// $('#allCountyPermits').highcharts(options);

	var allData = Highcharts.data({
		googleSpreadsheetKey: '1z-LA9Htodmj4G5Eq82myGKbaxElYEr_BC994PFsNujE',
		googleSpreadsheetWorksheet: 1
	});	

	function pointClick() {
		var $div = $('<div></div>').dialog({
			title: this.name,
			width: '60%',
			height: 450
		});

		var dataColumn = allData.columns[this.index+3]

		var eoMonth = this.x;
		var eoMonthName = dataColumn[0];
		var serieName = this.series.name;

		var monthData = [];
		for (var i = 0; i < dataColumn.length; i++) {
			var category = allData.columns[0][i]
			if ( category && dataColumn[i] && category.indexOf(serieName) > -1 ) {
				monthData.push({name: allData.columns[2][i], y: dataColumn[i]});
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

});