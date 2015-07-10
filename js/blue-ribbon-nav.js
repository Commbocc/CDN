$(function () {


	var navigation = '';

	navigation += '<p>';
	navigation += '<a href="http://www.hillsboroughcounty.org/index.aspx?nid=3904">';
	navigation += '<img src="http://www.hillsboroughcounty.org/images/pages/N3904/BRCCS-Banner.png" class="img-responsive center-block" alt="Blue Ribbon Committee Banner">';
	navigation += '</a>';
	navigation += '</p>';

	navigation += '<div class="btn-group btn-group-justified">'
	navigation += '<a href="http://www.hillsboroughcounty.org/index.aspx?nid=3937" class="btn btn-primary">Model of Services</a>';
	navigation += '<a href="http://www.hillsboroughcounty.org/index.aspx?nid=3939" class="btn btn-primary">Resources</a>';
	navigation += '<a href="http://www.hillsboroughcdms.org/blue-ribbon/child-fatalities" class="btn btn-primary">Facts &amp; Figures</a>';
	navigation += '<a href="http://www.hillsboroughcdms.org/blue-ribbon/partners" class="btn btn-primary">Community Partners</a>';
	navigation += '<a href="http://www.hillsboroughcdms.org/blue-ribbon/members" class="btn btn-primary">Members</a>';
	navigation += '</div>'

	$('#blueRibbonNav').html(navigation);

});