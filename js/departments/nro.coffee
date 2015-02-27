---
---

# clicked hoverable menu items follow links
$('#navMenu').on 'click', '.btn-group.hover > a.dropdown-toggle', ->
	window.location = $(this).attr('href') or '#no_link'
	return