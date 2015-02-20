$(function () {

    var googleSheetKey = "1z-LA9Htodmj4G5Eq82myGKbaxElYEr_BC994PFsNujE";
    
    // drillIssued chart
	Highcharts.data({
		googleSpreadsheetKey: googleSheetKey,
		googleSpreadsheetWorksheet: 4,
		parsed: function (columns) {
			var months = [],
                issuedTotals = [],
			    valuesTotals = [],
                date,
                year,
                monthsArray = ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'];
           

			$.each(columns[0], function (i, month) {
                
				if (i > 0) {
                    
                    date = new Date(month);
                    year = date.getMonth() == 11 ? date.getFullYear()+1 : date.getFullYear();
                    month = monthsArray[date.getMonth()] + ', ' + year;
                    
                    // create month array
                    months.push(month);
                    
					// Create issued data
                    issuedTotals.push({"name": month, "y": columns[4][i]});

					// create value data
                    valuesTotals.push({"name": month, "y": columns[8][i]});					
				}
			});
            
            //console.log(issuedTotals);
            //console.log(months);
            
            $('#container').highcharts({
                chart: {
                    zoomType: 'x'
                },
                xAxis: [{
                    categories: months
                }],
                 yAxis: [{ // Primary yAxis
                    labels: {
                        format: '{value}',
                        style: {
                            color: Highcharts.getOptions().colors[0]
                        }
                    },
                    title: {
                        text: 'Permits Issued',
                        style: {
                            color: Highcharts.getOptions().colors[0]
                        }
                    }
                }, { // Secondary yAxis
                    title: {
                        text: 'Permit Value',
                        style: {
                            color: Highcharts.getOptions().colors[1]
                        }
                    },
                    labels: {
                        format: '${value}',
                        style: {
                            color: Highcharts.getOptions().colors[1]
                        }
                    },
                    opposite: true
                }],
                series: [{
                    name: 'Issued',
                    type: 'spline',
                    data: issuedTotals,
                    tooltip: {}
        
                }, {
                    name: 'Value',
                    type: 'scatter',
                    yAxis: 1,
                    data: valuesTotals,
                    tooltip: {
                        pointFormat: "Value: ${point.y:.2f}"
                    }
                }]
            });

		}
	});
});