---
---

$ ->

	vars = []
	hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&')
	i = 0
	while i < hashes.length
		hash = hashes[i].split('=')
		vars.push hash[0]
		vars[hash[0]] = hash[1]
		i++

	thumbs = [
		{
			nids: [3514]
			href: '#'
			icon: 'paw'
			caption: 'Questions about pet adoptions and licenses. Report Cruelty, neglect, lost or stray animals. '
		}
		{
			nids: [123]
			href: '#'
			icon: 'home'
			caption: 'the caption'
		}
	]

	renderThumb = (href, icon, caption) ->
		out = '<a href="'+href+'" class="thumbnail well text-center" style="color: #4bb1bf; text-decoration:none;">'
		out += '<i class="fa fa-fw fa-'+icon+' fa-5x"></i>'
		out += '<h4>24/7 At Your Service</h4>'
		out += '<small>'+caption+'</small>'
		out += '</a>'
		return out

	if vars['nid']
		i = 0
		while i < thumbs.length
			inArr = thumbs[i].nids.indexOf parseInt vars['nid']
			# console.log inArr >= 0
			if inArr >= 0
				$('.bs').append renderThumb(thumbs[i].href, thumbs[i].icon, thumbs[i].caption)
			i++

	return null