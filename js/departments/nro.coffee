---
---

$ ->

	firstTier = []
	secondTier = []

	$("#navWrapper a.Cat").each ->
		firstTier.push $(this).text()

		parentDiv = $(this).closest(".navtext")

		parentDiv.on 'mouseover', ->
			$(this).find(".subCat").each ->
				secondTier.push $(this).text()
				return

		parentDiv.trigger("mouseover")
		
		return

	console.log firstTier
	console.log secondTier