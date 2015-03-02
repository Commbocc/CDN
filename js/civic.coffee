---
---

$ ->

	# load menu dynamically from civic's hidden sidebar
	loadMenu = (menuDiv) ->
		nav = []

		ignoreStr = if typeof menuDiv.data('ignore') != 'undefined' then String(menuDiv.data('ignore')) else ''
		ignoreNIDs = if ignoreStr.indexOf(',') >= 0 then ignoreStr.split(',') else [ignoreStr]

		for a of ignoreNIDs
			ignoreNIDs[a] = parseInt(ignoreNIDs[a])

		$("#navWrapper").on
			mouseover: (e) ->
				item = {}
				item.text = $(this).text()
				item.href = $(this).attr('href')
				item.target = $(this).attr('target')
				item.nid = parseInt($(this).closest('.navText').attr('id').replace(/\D/g,''))
				item.subItems = []

				$(this).siblings(".wrapper").find(".SubCat").each ->
					subItem = {}
					subItem.text = $(this).text()
					subItem.href = $(this).attr('href')
					subItem.target = $(this).attr('target')
					subItem.nid = parseInt($(this).closest('.navText').attr('id').replace(/\D/g,''))

					if $.inArray(parseInt(subItem.nid), ignoreNIDs) < 0
						item.subItems.push subItem
					return
					
				if $.inArray(item.nid, ignoreNIDs) < 0
					nav.push item
				return
		, "a.Cat"

		$("#navWrapper a.Cat").each -> 
			$(this).trigger("mouseover")
			# $(this).trigger("mouseout")
			return

		out = ''
		i = 0
		while i < nav.length
			target = unless nav[i].target == undefined then nav[i].target else '_self'
			unless nav[i].subItems.length == 0
				out += '<div class="btn-group hover">'
				out += '<a href="' + nav[i].href + '" target="' + target + '" type="button" class="btn btn-primary dropdown-toggle">'
				out += nav[i].text + ' <span class="caret"></span></a><ul class="dropdown-menu" role="menu">'
				si = 0
				while si < nav[i].subItems.length
					subItemTarget = unless nav[i].subItems[si].target == undefined then nav[i].subItems[si].target else '_self'
					out += '<li><a href="' + nav[i].subItems[si].href + '" target="' + subItemTarget + '">' + nav[i].subItems[si].text + '</a></li>'
					si++
				out += '</ul></div>'
			else
				out += '<a href="' + nav[i].href + '" target="' + target + '" class="btn btn-primary" role="button">' + nav[i].text + '</a>'
			i++
		out
	$('#navMenu').html loadMenu $('#navMenu')
	return