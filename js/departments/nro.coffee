---
---

$ ->

	firstTier = []
	secondTier = []

	$("#navWrapper a.Cat").each ->
		firstTier.push $(this).text()
		$(this).closest(".navtext").trigger("mouseover")
		# $("#navWrapper").on()
		$(this).find(".subCat").each ->
			secondTier.push $(this).text()
			return
		return

	console.log firstTier
	console.log secondTier