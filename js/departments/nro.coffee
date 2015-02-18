---
---

$ ->

	firstTier = []
	secondTier = []

	$('#navWrapper a.Cat').each ->
		firstTier.push $(this).text()
		return

	console.log firstTier