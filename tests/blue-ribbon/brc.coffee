---
---

$ ->

	# ajax bio content
	get_bio_content = (bio) ->
		tmp = null
		$.ajax
			'url': '/tests/blue-ribbon/bios/'+bio+'.html'
			'async': false
			'global': false
			'dataType': 'html'
			'success': (data) ->
				tmp = data
				return
			tmp
		return tmp

	# create table
	$table = $("table#brcMembers tbody")

	{% for member in site.data.blue_ribbon_members %}

	name = "{{member.name}}"
	email = "{{member.email}}".toLowerCase()
	title = "{{member.title}}"
	pic = "{{member.pic}}"
	bio = "{{member.bio}}"
	bio_link = "{{member.bio_link}}"

	if pic == ''
		picture = '<i class="fa fa-fw fa-5x fa-user"></i>'
	else
		picture = '<img src="https://commbocc.github.io/CDN/images/blue-ribbon/'+pic+'">'

	if bio_link != ''
		biography = '<a href="'+bio_link+'" target="_blank" class="btn btn-xs btn-info">Bio <i class="fa fa-fw fa-info-circle"></i></a>'
	else if bio == ''
		biography = '<a href="#" class="btn btn-xs btn-info disabled">Bio <i class="fa fa-fw fa-info-circle"></i></a>'
	else
		biography = '<button type="button" class="btn btn-xs btn-info" data-toggle="popover" title="'+name+'" data-bio="'+bio+'">Bio <i class="fa fa-fw fa-info-circle"></i></button>'

	$row = $('<tr>')
	$row.append $('<td class="text-center">').html( picture )
	$row.append $('<td>').text( name )
	$row.append $('<td>').html( '<a href="mailto:'+email+'">'+email+'</a>' )
	$row.append $('<td>').text( title )
	$row.append $('<td>').html( biography )

	$table.append $row

	{% endfor %}

	# instatiate popovers
	$('[data-toggle="popover"]').popover
		html: true
		placement: 'left'
		container: 'div.bs'
		content: ->
			get_bio_content( $(this).data('bio') )
			
