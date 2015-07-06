$(function () {


	var navigation = '';

	navigation += '<p>';
	navigation += '<a href="#brchome" data-toggle="tab">';
	navigation += '<img src="http://www.hillsboroughcounty.org/images/pages/N3904/BRCCS-Banner.png" class="img-responsive center-block" alt="Blue Ribbon Committee Banner">';
	navigation += '</a>';
	navigation += '</p>';

	navigation += '<ul class="nav nav-pills nav-justified">';
	navigation += '<li class="active"><a href="http://www.hillsboroughcounty.org/index.aspx?nid=3939">Model of Services</a></li>';
	navigation += '<li><a href="http://www.hillsboroughcounty.org/index.aspx?nid=3939">Resources</a></li>';
	navigation += '<li><a href="http://www.hillsboroughcdms.org/blue-ribbon/child-fatalities">Facts &amp; Figures</a></li>';
	navigation += '<li><a href="http://www.hillsboroughcdms.org/blue-ribbon/partners">Community Partners</a></li>';
	navigation += '<li><a href="http://www.hillsboroughcdms.org/blue-ribbon/members">Members</a></li>';
	navigation += '</ul>';

	$('#blueRibbonNav').html(navigation);

});