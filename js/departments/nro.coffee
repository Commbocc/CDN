---
---

$ ->

	firstTier = []
	secondTier = []

	$("#navWrapper").on
		mouseover: ->
			$(this).find(".subCat").each ->
				secondTier.push $(this).text()
				console.log $(this).text()
				return
	, ".navtext"

	$("#navWrapper a.Cat").each ->
		firstTier.push $(this).text()
		$(this).closest(".navtext").trigger("mouseover")
		
		return

	console.log firstTier
	console.log secondTier