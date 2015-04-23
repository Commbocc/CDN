// Production steps of ECMA-262, Edition 5, 15.4.4.21
// Reference: http://es5.github.io/#x15.4.4.21
if (!Array.prototype.reduce) {
  Array.prototype.reduce = function(callback /*, initialValue*/) {
    'use strict';
    if (this == null) {
      throw new TypeError('Array.prototype.reduce called on null or undefined');
    }
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }
    var t = Object(this), len = t.length >>> 0, k = 0, value;
    if (arguments.length == 2) {
      value = arguments[1];
    } else {
      while (k < len && !(k in t)) {
        k++; 
      }
      if (k >= len) {
        throw new TypeError('Reduce of empty array with no initial value');
      }
      value = t[k++];
    }
    for (; k < len; k++) {
      if (k in t) {
        value = callback(value, t[k], k, t);
      }
    }
    return value;
  };
}

 var googleSheetKey = "1ong8NoBkZUruBkfG0ZvwiF0VZPYSiPxOMyduslCrnNw",
     chartColors = ['#4572A7', '#AA4643', '#89A54E', '#80699B', '#3D96AE', '#DB843D', '#92A8CD', '#A47D7C', '#B5CA92'];

 Highcharts.data({
     googleSpreadsheetKey: googleSheetKey,
     googleSpreadsheetWorksheet: 1,
     parsed: function (columns) {

         var months = [],
             totals = [],
             monthsArray = ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'];

         for (var i = 0; i < columns.length; i++) {

             if (i < 3) {
                 continue;
             }

             var colValues = [];
             for (var ci = 0; ci < columns[i].length; ci++) {
                 if (ci == 0) {
                     continue;
                 }
                 colValues.push(columns[i][ci]);
             }

             var columnTotal = colValues.reduce(function (a, b) {
                 return a + b;
             });

             months.push(columns[i][0]);
             totals.push([columns[i][0], columnTotal]);

         }

         function clickSeries() {

             var monthColumn = this.index + 3;

             var catData = [],
                 versions = [],
                 pieData = [],
                 drillDownData = [];

             for (var i = 0; i < columns[0].length; i++) {
                 if (i == 0) {
                     continue;
                 }

                 var cat = columns[0][i];

                 if (!catData[cat]) {
                     catData[cat] = columns[monthColumn][i];
                 } else {
                     catData[cat] += columns[monthColumn][i];
                 }

                 if (cat !== null) {
                     if (!versions[cat]) {
                         versions[cat] = [];
                     }
                     versions[cat].push([columns[2][i], columns[monthColumn][i]]);
                 }

             }

             for (var key in catData) {
                 if (catData.hasOwnProperty(key)) {
                     pieData.push({
                         name: key,
                         y: catData[key],
                         drilldown: key ? key : null
                     });
                 }
             }

             for (var key in versions) {
                 if (versions.hasOwnProperty(key)) {
                     drillDownData.push({
                         name: key,
                         id: key,
                         data: versions[key]
                     });
                 }
             }

             var chartTitle = this.series.name + ' - ' + this.category;

             var $div = $('<div></div>').dialog({
                 title: chartTitle,
                 width: '60%',
                 height: 450
             });

             window.chart = new Highcharts.Chart({
                 chart: {
                     renderTo: $div[0],
                     type: 'pie'
                 },
                 title: {
                     text: 'chartTitle'
                 },
                 colors: chartColors,
                 credits: {
                     enabled: false
                 },
                 series: [{
                     name: 'Cases',
                     data: pieData
                 }],
                 drilldown: {
                     series: drillDownData
                 }
             });
         }

         zoningApps = new Highcharts.Chart({
             chart: {
                 renderTo: 'zoningApps',
                 zoomType: 'x',
                 type: 'column'
             },
             title: {
                 text: 'Community Development and Zoning Applications'
             },
             subtitle: {
                 text: 'Click a data column for more information.'
             },
             colors: chartColors,
             credits: {
                 enabled: false
             },
             xAxis: {
                 categories: months,
                 labels: {
                     rotation: -45,
                     style: {
                         fontSize: '13px',
                         fontFamily: 'Verdana, sans-serif'
                     }
                 }
             },
             yAxis: {
                 labels: {
                     format: '{value}'
                 },
                 //type: 'logarithmic',
                 title: {
                     text: 'Cases Assigned'
                 }
             },
             series: [{
                 name: "Monthly Cases Assigned",
                 data: totals,
                 point: {
                     events: {
                         click: clickSeries
                     }
                 }
             }]
         });



     }
 });