---
---

$ ->

	url = '/RSSFeed.aspx?ModID=63&CID=Emergency-Alerts-1'
	$.ajax
		type: 'GET'
		url: url
		dataType: 'json'
		error: ->
			alert 'Unable to load feed, Incorrect path or invalid feed'
			return
		success: (xml) ->
			values = xml.responseData.feed.entries
			console.log values
			return
	return