---
---

$ ->

	firstTier = []
	secondTier = []

	$("#navWrapper").on
		mouseover: ->
			$(this).siblings(".wrapper").find(".subCat").each ->
				secondTier.push $(this).text()
				console.log $(this).text()
				return
			return
	, "a.Cat"

	$("#navWrapper a.Cat").each ->
		firstTier.push $(this).text()
		$(this).trigger("mouseover")
		
		return

	console.log firstTier
	console.log secondTier