---
---

$ ->

	firstTier = []
	secondTier = []

	$("#navWrapper").on
		mouseover: ->
			$(this).siblings(".wrapper").find(".SubCat").each ->
				secondTier.push $(this).text()
				return
			return
	, "a.Cat"

	$("#navWrapper a.Cat").each ->
		firstTier.push $(this).text()
		$(this).trigger("mouseover")
		
		return

	console.log firstTier
	console.log secondTier