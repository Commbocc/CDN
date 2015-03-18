---
---

$ ->

	# auto height
	resizeAutoHeights = ->
		currentTallest = 0
		$('.auto-height').each ->
			$(this).height 'auto'
			if $(this).height() > currentTallest
				currentTallest = $(this).height()
			return
		$('.auto-height').each ->
			$(this).height 'auto'
			$(this).outerHeight currentTallest
			return
	window.onload = resizeAutoHeights
	$(window).resize ->
		resizeAutoHeights()

	# gis-thumb background images
	$('.headshot').each ->
		bgimg = $(this).data('bgimg')
		$(this).css 'background-image', 'url(' + bgimg + ')'