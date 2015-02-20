$(function () {
    var allCountyPermits;
    var permitsTable = $('#permitsTable > tbody > tr').map(function () {
        return $(this).children().map(function () {
            return $(this);
        });
    });

    var googleSheetKey = "1z-LA9Htodmj4G5Eq82myGKbaxElYEr_BC994PFsNujE",
        chartColors = ['#4572A7', '#AA4643', '#89A54E', '#80699B', '#3D96AE', '#DB843D', '#92A8CD', '#A47D7C', '#B5CA92'];

    var issuedData = Highcharts.data({
        googleSpreadsheetKey: googleSheetKey,
        googleSpreadsheetWorksheet: 1 // Permit Issued
    });

    var valuesData = Highcharts.data({
        googleSpreadsheetKey: googleSheetKey,
        googleSpreadsheetWorksheet: 2 // Permit Values
    });

    Highcharts.data({
        googleSpreadsheetKey: googleSheetKey,
        googleSpreadsheetWorksheet: 3, // Summary
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
                    year = date.getMonth() == 11 ? date.getFullYear() + 1 : date.getFullYear();
                    month = monthsArray[date.getMonth()] + ', ' + year;

                    // create month array
                    months.push(month);

                    // Create issued data
                    issuedTotals.push({
                        "name": month,
                            "y": columns[4][i]
                    });

                    // create value data
                    valuesTotals.push({
                        "name": month,
                            "y": columns[8][i]
                    });
                }
            });

            var lastRow = columns[4].length - 1;

            for (var i = 0; i < 4; i++) {

                var issuedCell = i < 3 ? columns[i + 1][lastRow] + ' <small>(<a href="#" class="chart" data-series="' + (i + 2) + '">View Chart</a>)</small>' : columns[i + 1][lastRow];
                var valueCell = i < 3 ? '$' + columns[i + 5][lastRow].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + ' <small>(<a href="#" class="chart" data-series="' + (i + 5) + '">View Chart</a>)</small>' : '$' + columns[i + 5][lastRow].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

                permitsTable[i][1].html(issuedCell);
                permitsTable[i][2].html(valueCell);
            };
            $('#permitsTable').find('th').first().text(months[months.length-1] + ' Permits');

            function shiftColumn(column) {
                column.shift();
                return column;
            }

            function clickIssued() {
                var chartTitle = this.series.name + ' Permits Issued - ' + this.category;
                var $div = $('<div></div>').dialog({
                    title: chartTitle,
                    width: '60%',
                    height: 450
                });
                var dataColumn = issuedData.columns[this.index + 3];
                var monthData = [];
                for (var i = 0; i < dataColumn.length; i++) {
                    var category = issuedData.columns[0][i]
                    if (category && dataColumn[i] && category.indexOf(this.series.name) > -1) {
                        monthData.push({
                            name: issuedData.columns[2][i],
                            y: dataColumn[i]
                        });
                    };
                };

                window.chart = new Highcharts.Chart({
                    chart: {
                        renderTo: $div[0],
                        type: 'pie'
                    },
                    title: {
                        text: chartTitle,
                    },
                    tooltip: {
                        pointFormat: '{point.tooltip}{series.name}: <b>{point.y}</b> ({point.percentage:.1f}%)'
                    },
                    credits: {
                        enabled: false
                    },
                    series: [{
                        name: 'Permits Issued',
                        data: minisculeValues(monthData)
                    }]
                });

            }

            function clickValue() {
                var chartTitle = this.series.name + ' Permit Values - ' + this.category;
                var $div = $('<div></div>').dialog({
                    title: chartTitle,
                    width: '60%',
                    height: 450
                });
                var dataColumn = valuesData.columns[this.index + 3];
                var monthData = [];
                for (var i = 0; i < dataColumn.length; i++) {
                    var category = issuedData.columns[0][i]
                    if (category && dataColumn[i] && category.indexOf(this.series.name) > -1) {
                        monthData.push({
                            name: issuedData.columns[2][i],
                            y: dataColumn[i]
                        });
                    };
                };

                window.chart = new Highcharts.Chart({
                    chart: {
                        renderTo: $div[0],
                        type: 'pie'
                    },
                    title: {
                        text: chartTitle,
                    },
                    tooltip: {
                        pointFormat: '{point.tooltip}{series.name}: <b>${point.y}</b> ({point.percentage:.1f}%)'
                    },
                    credits: {
                        enabled: false
                    },
                    series: [{
                        name: 'Permits Issued',
                        data: minisculeValues(monthData)
                    }]
                });

            }

            allCountyPermits = new Highcharts.Chart({
                chart: {
                    renderTo: 'allCountyPermits',
                    zoomType: 'x'
                },
                title: {
                    text: 'Issued Permits - All County'
                },
                subtitle: {
                    text: 'Click a data column for more information.'
                },
                colors: chartColors,
                credits: {
                    enabled: false
                },
                xAxis: [{
                    categories: months
                }],
                yAxis: [{ // Primary yAxis
                    labels: {
                        format: '{value}'
                    },
                    title: {
                        text: 'Permits Issued'
                    }
                }, { // Secondary yAxis
                    title: {
                        text: 'Permit Values'
                    },
                    labels: {
                        formatter: function () {
                            return '$' + this.value / 1000000 + 'M';
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
                    name: columns[1][0],
                    type: 'column',
                    data: shiftColumn(columns[1]),
                    point: {
                        events: {
                            click: clickIssued
                        }
                    },
                    cursor: 'pointer'
                }, {
                    name: columns[2][0],
                    type: 'column',
                    data: shiftColumn(columns[2]),
                    point: {
                        events: {
                            click: clickIssued
                        }
                    },
                    cursor: 'pointer'
                }, {
                    name: columns[3][0],
                    type: 'column',
                    data: shiftColumn(columns[3]),
                    point: {
                        events: {
                            click: clickIssued
                        }
                    },
                    cursor: 'pointer'
                }, {
                    name: 'Permit Values',
                    type: 'area',
                    yAxis: 1,
                    index: -1,
                    legendIndex: 99,
                    data: valuesTotals,
                    fillOpacity: 0.1,
                    tooltip: {
                        pointFormat: "Value: ${point.y:,.2f}"
                    }
                }, {
                    name: columns[5][0],
                    type: 'column',
                    yAxis: 1,
                    visible: false,
                    showInLegend: false,
                    data: shiftColumn(columns[5]),
                    point: {
                        events: {
                            click: clickValue
                        }
                    },
                    cursor: 'pointer'
                }, {
                    name: columns[6][0],
                    type: 'column',
                    yAxis: 1,
                    visible: false,
                    showInLegend: false,
                    data: shiftColumn(columns[6]),
                    point: {
                        events: {
                            click: clickValue
                        }
                    },
                    cursor: 'pointer'
                }, {
                    name: columns[7][0],
                    type: 'column',
                    yAxis: 1,
                    visible: false,
                    showInLegend: false,
                    data: shiftColumn(columns[7]),
                    point: {
                        events: {
                            click: clickValue
                        }
                    },
                    cursor: 'pointer'
                }]
            });

        }
    });

    function minisculeValues(seriesData) {
        var minThreshold = .035;
        var miniValue = 0;
        var miniLabel = "";
        var total = 0;
        var passedValues = [];
        for (var i = 0; i < seriesData.length; i++) {
            total += seriesData[i].y;
        };

        for (var i = 0; i < seriesData.length; i++) {
            if (seriesData[i].y / total <= minThreshold) {
                miniValue += seriesData[i].y;
                miniLabel = miniLabel.concat(seriesData[i].name + ": " + seriesData[i].y + "<br>");
            } else {
                passedValues.push(seriesData[i]);
            }
        };

        if (i == 1) {
            passedValues.sort(compare);
            miniValue += passedValues[0].y;
            miniLabel = miniLabel.concat(passedValues[0].name + ": " + passedValues[0].y + "<br>");
            passedValues.shift();
        };

        if (miniValue > 0) {
            passedValues.push({
                name: "Misc. ≤ " + (minThreshold * 100).toFixed(1) + "%",
                tooltip: miniLabel,
                y: miniValue
            });
        };

        return passedValues;
    }

    function compare(a, b) {
        if (a.y < b.y) return -1;
        if (a.y > b.y) return 1;
        return 0;
    }

    $('#permitsTable').on('click', '.chart', function (event) {
        event.preventDefault();
        var series = $(this).data('series');
        var last = allCountyPermits.series[series].data.length - 1;
        allCountyPermits.series[series].data[last].firePointEvent('click');
    });


});