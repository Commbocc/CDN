---
---

$ ->

	$.getJSON 'http://localhost:3000/child_fatalities.json', (records) ->
		# oneyears = $.grep records, (record,i) ->
		# 	return record.age == 4
		# console.log oneyears

		ages = []
		$.map records, (record,i) ->
			ages[record.age] = ''

		console.log ages

		return