$(document).ready(function ($) {

	$(".btn-group > .dropdown-toggle").click(function () {
		window.location = $(this).attr('href') || '#no_link';
	});

	$("#navMenu").html( loadMenu() );

	function loadMenu() {
		var menu = [{
			label: "Resources",
			nid: 3758,
			submenu: [
			{
				label: "2015 Neighborhood Conference",
				nid: 3769
			},
			{
				label: "Community Calendar",
				nid: 3761
			},
			{
				label: "Disaster Prep.",
				nid: 3771
			},
			{
				label: "Neighborhood Awards",
				nid: 3772
			},
			{
				label: "Neighborhood Grants",
				nid: 3774
			},
			{
				label: "Neighborhood Listings",
				nid: 3775
			},
			{
				label: "Association Form",
				nid: 3780
			},
			{
				label: "Zoning Notification Registry",
				nid: 3781
			}
			]
		},
		{
			label: "Training",
			nid: 3759,
			submenu: [
			{
				label: "2015 Neighborhood Conference",
				nid: 3769
			},
			{
				label: "Disaster Prep.",
				nid: 3771
			},
			{
				label: "Government Leadership University (GLU)",
				nid: 3765
			}
			]
		},
		{
			label: "Community Calendar",
			nid: 3761,
			submenu: null
		},
		{
			label: "Spec. Taxing Districts",
			nid: 3762,
			submenu: null
		},
		{
			label: "Special Events",
			nid: 3763,
			submenu: [
			{
				label: "2015 Neighborhood Conference",
				nid: 3769
			},
			{
				label: "Government Leadership University (GLU)",
				nid: 3765
			}
			]
		}];

		var out = "";

		for (var i = 0; i < menu.length; i++) {
			if (menu[i].submenu) {
				out += "<div class=\"btn-group\">";
				out += "<a type=\"button\" class=\"btn btn-info dropdown-toggle\" data-toggle=\"dropdown\" href=\"/?nid="+menu[i].nid+"\">";
				out += menu[i].label+" <span class=\"caret\"></span></a><ul class=\"dropdown-menu\" role=\"menu\">";
				for (var si = 0; si < menu[i].submenu.length; si++) {
					out += "<li><a href=\""+menu[i].submenu[si].nid+"\">"+menu[i].submenu[si].label+"</a></li>";
				};
				out += "</ul></div>";
			} else {
				out += "<a href=\"/?nid="+menu[i].nid+"\" class=\"btn btn-info\" role=\"button\">"+menu[i].label+"</a>";
			}
		}
		return out;
	}

});