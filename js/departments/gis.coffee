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
	$('.gis-thumb').each ->
		bgimg = $(this).data('bgimg') or 'http://images.fineartamerica.com/images-medium-large-5/3-london-england-street-map-michael-tompsett.jpg'
		$(this).css 'background-image', 'url(' + bgimg + ')'

	$('.gis-media').each ->
		bgimg = $(this).find('.media-object').attr('src') or 'http://images.fineartamerica.com/images-medium-large-5/3-london-england-street-map-michael-tompsett.jpg'
		$(this).find('a').css 'background-image', 'url(' + bgimg + ')'