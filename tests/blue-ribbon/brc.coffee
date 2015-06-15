---
---

$ ->

	$table = $("table#brcMembers tbody")

	{% for member in site.data.blue_ribbon_members %}

	name = "{{member.name}}"
	email = "{{member.email}}".toLowerCase()
	title = "{{member.title}}"
	bio = "{{member.bio}}"
	pic = "{{member.pic}}"

	if pic == ''
		picture = '<i class="fa fa-fw fa-5x fa-user"></i>'
	else
		picture = '<img src="'+pic+'">'

	if bio == ''
		biography = bio
	else
		biography = '<a href="#" class="btn btn-xs btn-info">Bio <i class="fa fa-fw fa-info-circle"></i></a>'

	$row = $('<tr>')
	$row.append $('<td>').html( picture )
	$row.append $('<td>').text( name )
	$row.append $('<td>').html( '<a href="mailto:'+email+'">'+email+'</a>' )
	$row.append $('<td>').text( title )
	$row.append $('<td>').html( biography )

	$table.append $row

	{% endfor %}