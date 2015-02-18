---
---

$ ->

	$('#navMenu').on 'click', ->
		window.location = $(this).attr('href') or '#no_link'
		return
	, '.btn-group > .dropdown-toggle'