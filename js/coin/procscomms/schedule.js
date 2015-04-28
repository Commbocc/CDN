var googleSheetKey = "1eDdkXaIT7ik77UAb_U2jCne53ah54qxkXOm5yRS23kk";

var addDateBlock = function(group, time, dateStr) {

	panelClass = time+86400000 < new Date() ? 'default' : 'info';
	past = time+86400000 < new Date() ? 'past' : null;

	dateGroupPanel = $('<div class="panel panel-'+panelClass+'">').append(
		$('<div/>', {'class': 'panel-heading'}).append(
			$('<h4/>', {'class': 'panel-title'}).append(
				$('<a/>', {'data-toggle': 'collapse', text: dateStr, href: '#group'+time})
				)
			)
		).append( $('<div id="group'+time+'" class="panel-collapse collapse in '+past+'"></div>') );

	for (var i = 0; i < group.length; i++) {
		dateGroupPanel.find('.panel-collapse').append( addScheduleEvent(group[i]) );
	}

	$('#scheduledEvents').append(dateGroupPanel).trigger('toggle-past-panels');
}

var addScheduleEvent = function(row) {

	content = $('<ul>').append('<li>Type: '+row.eventType+'</li><li>Commissioner: '+row.commissioner+'</li>');
	if (row.pending) {
		content.prepend('<li>PENDING</li>');
	}

	scheduledEvent = $('<div class="list-group-item">').text(row.excerpt).append(content);
	return scheduledEvent;
}

Highcharts.data({
	googleSpreadsheetKey: googleSheetKey,
	googleSpreadsheetWorksheet: 1,
	parsed: function(columns) {

		var dateGroups = {},
		dateModified = columns[5][0];

		$('#dateModified').text(dateModified);

		for (var i = 1; i < columns[0].length; i++) {
			var date = columns[0][i];
			row = {
				date: new Date(date+86400000),
				eventType: columns[1][i],
				excerpt: columns[2][i],
				commissioner: columns[3][i],
				pending: columns[4][i]
			};
			dateGroups[date] = dateGroups[date] || [];
			dateGroups[date].push(row);
		}

		// dateGroups.sort();

		for (date in dateGroups) {
			groupDate = new Date(parseInt(date)+86400000);
			addDateBlock(dateGroups[date], parseInt(date), groupDate.toDateString());
		}

	}
});

$('body').on('toggle-past-panels', '#scheduledEvents', function (event) {
	$('.past').each(function(){
		$(this).collapse('hide');
	});
});