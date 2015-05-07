(function () {
	 $(function () {

		if (!Array.prototype.indexOf) {
	 Array.prototype.indexOf = function(obj, start) {
			for (var i = (start || 0), j = this.length; i < j; i++) {
				 if (this[i] === obj) { return i; }
			}
			return -1;
	 }
}

		  var googleSheetKey = "1eDdkXaIT7ik77UAb_U2jCne53ah54qxkXOm5yRS23kk";
		  var googleSheetIndex = $('#scheduledEvents').data('gsheet') || 1;

		  var addDateBlock = function (group, time, dateStr, quarterly) {

				panelClass = time + 86400000 < new Date() ? 'default' : 'info';

				qAwards = quarterly ? ' (Quarterly Awards)' : '';

				// panelClass = time+86400000 < new Date() ? 'default' : 'info';
				past = time + 86400000 < new Date() ? 'past' : null;

				dateGroupPanel = $('<div class="panel panel-' + panelClass + '">').append(
				$('<div/>', {
					 'class': 'panel-heading'
				}).append(
				$('<h4/>', {
					 'class': 'panel-title'
				}).append(
				$('<a/>', {
					 'data-toggle': 'collapse',
					 text: dateStr + qAwards,
					 href: '#group' + time
				})))).append($('<div id="group' + time + '" class="panel-collapse collapse in ' + past + '"></div>'));

				for (var i = 0; i < group.length; i++) {

					 appendage = group[i].excerpt ? addScheduleEvent(group[i]) : $('<div/>', {
						  'class': 'panel-body'
					 }).text('Available');

					 dateGroupPanel.find('.panel-collapse').append(appendage);
				}

				$('#scheduledEvents').append(dateGroupPanel).trigger('toggle-past-panels');
		  }

		  var addScheduleEvent = function (row) {

				content = $('<ul>').append('<li>Type: ' + row.eventType + '</li>');

				if (row.commissioner) {
					 content.append('<li>Commissioner: ' + row.commissioner + '</li>');
				}

				if (row.pending) {
					 content.prepend('<li><em>Pending submission of COIN request.</em></li>');
				}

				scheduledEvent = $('<div class="list-group-item">').text(row.excerpt).append(content);
				return scheduledEvent;
		  }

		  Highcharts.data({
				googleSpreadsheetKey: googleSheetKey,
				googleSpreadsheetWorksheet: parseInt(googleSheetIndex),
				parsed: function (columns) {

					 var dateGroups = [],
					 quarterlyDays = [],
					 dateModified = columns[6][0];

					 $('#dateModified').text(dateModified);

					 for (var i = 1; i < columns[0].length; i++) {
						  var date = columns[0][i];
						  row = {
								date: new Date(date + 86400000),
								eventType: columns[1][i],
								excerpt: columns[2][i],
								commissioner: columns[3][i],
								pending: columns[4][i],
								quarterly: columns[5][i]
						  };
						  dateGroups[date] = dateGroups[date] || [];
						  dateGroups[date].push(row);

						  if (row.quarterly) {
								if (quarterlyDays.indexOf(date) < 0) {
									 quarterlyDays.push(date);
								}
						  }
					 }

					 // dateGroups.sort();

					 for (date in dateGroups) {
						  groupDate = new Date(parseInt(date) + 86400000);
						  quarterly = (quarterlyDays.indexOf(parseInt(date)) > -1) ? true : false;
						  addDateBlock(dateGroups[date], parseInt(date), groupDate.toDateString(), quarterly);
					 }

				}
		  });

		  $('body').on('toggle-past-panels', '#scheduledEvents', function (event) {
				$('.past').each(function () {
					 $(this).collapse('hide');
				});
		  });

	 });
}).call(this);