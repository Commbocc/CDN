$(function () {
	var contacts = [
	{
		name: 'Adrienne Frucci',
		email: 'FrucciA@hillsboroughcounty.org',
		officePhone: '813-635-5469',
		mobilePhone: '813-334-2055',
		vcardURL: 'http://www.hillsboroughcounty.org/DocumentCenter/View/11798',
		photoURL: 'http://hillsboroughcounty.org/images/pages/N3649/Adrienne%20Frucci%2001%20.jpg',
		departments: [
		"Regional Parks and Environmental Lands Management",
		"Recreation, Athletics, and Neighborhood Parks",
		"Medical Examiner",
		"Operations & Legislative Affairs"
		]
	},{
		name: 'Aleshia Jones',
		email: 'JonesAS@hillsboroughcounty.org',
		officePhone: '813-274-6787',
		mobilePhone: '813-415-9074',
		vcardURL: 'http://www.hillsboroughcounty.org/DocumentCenter/View/11799',
		photoURL: 'http://hillsboroughcounty.org/images/pages/N272/AleshiaWilliamsTH.jpg',
		departments: [
		"Human Resources",
		"Consumer & Veterans' Affairs",
		"Strategic Planning & Grants Management",
		"Real Estate & Facilities Services",
		"Citizen & Communications Support",
		"Fleet Management",
		"Management & Budget"
		]
	},{
		name: 'Andrea Roshaven',
		email: 'RoshavenA@hillsboroughcounty.org',
		officePhone: '813-307-8380',
		mobilePhone: '813-426-2494',
		vcardURL: 'http://www.hillsboroughcounty.org/DocumentCenter/View/11800',
		photoURL: 'http://hillsboroughcounty.org/images/pages/N3649/AndreaRoshaven%2002.jpg',
		departments: [
		"Public Works",
		"Information & Technology Services",
		"Enterprise Solutions & Quality Assurance"
		]
	},{
		name: 'Crystal Pruitt',
		email: 'PruittC@hillsboroughcounty.org',
		officePhone: '813-307-8381',
		mobilePhone: '813-352-3435',
		vcardURL: 'http://www.hillsboroughcounty.org/DocumentCenter/View/11802',
		photoURL: 'http://hillsboroughcounty.org/images/pages/N3649/Crystal%20Pruitt%2001.jpg',
		departments: [
		"Economic Development",
		"Extension Service",
		"Affordable Housing",
		"9-1-1 Agency",
		"Procurement Services"
		]
	},{
		name: 'Julie Watkinson',
		email: 'WatkinsonJ@hillsboroughcounty.org',
		officePhone: '813-276-2677',
		mobilePhone: '813-728-1447',
		vcardURL: 'http://www.hillsboroughcounty.org/DocumentCenter/View/11804',
		photoURL: 'http://hillsboroughcounty.org/images/pages/N3649/Julie%20Watkinson%201.jpg',
		departments: [
		"Aging Services",
		"Health Care Services",
		"Children & Youth Services",
		"Social Services",
		"Homeless Services",
		"Sunshine Line",
		"Trauma Agency"
		]
	},{
		name: 'Marti Ryan',
		email: 'RyanM@hillsboroughcounty.org',
		officePhone: '813-272-6699',
		mobilePhone: '813-356-9711',
		vcardURL: 'http://www.hillsboroughcounty.org/DocumentCenter/View/11806',
		photoURL: 'http://hillsboroughcounty.org/images/pages/N3649/Ryan%20Marti%2001.jpg',
		departments: [
		"Pet Resources"
		]
	},{
		name: 'Michelle VanDyke',
		email: 'VanDykeM@hillsboroughcounty.org',
		officePhone: '813-272-5305',
		mobilePhone: '813-352-2962',
		vcardURL: 'http://www.hillsboroughcounty.org/DocumentCenter/View/11807',
		photoURL: 'http://hillsboroughcounty.org/images/pages/N3649/vandyke01.jpg',
		departments: [
		"Fire Rescue",
		"Library Services",
		"Law Library"
		]
	},{
		name: 'Tom Iovino',
		email: 'IovinoT@HillsboroughCounty.org',
		officePhone: '813-274-2409',
		mobilePhone: '813-373-1023',
		vcardURL: null,
		photoURL: null,
		departments: [
		"Code Enforcement",
		"Development Services",
		"Public Utilities"
		]
	},{
		name: 'Leah Saunders',
		email: 'SaundersL@HillsboroughCounty.org',
		officePhone: '813-274-6947',
		mobilePhone: '813-373-0687',
		vcardURL: null,
		photoURL: 'http://hillsboroughcounty.org/images/pages/N3649/LeahSaunders1.jpg',
		position: 'PR & Marketing Manager'
	},{
		name: 'Jennifer Rothenberg',
		email: 'RothenbergJ@hillsboroughcounty.org',
		officePhone: '813-276-2681',
		mobilePhone: '813-546-2086',
		vcardURL: null,
		photoURL: 'http://hillsboroughcounty.org/images/pages/N3649/JenniferRothenberg01.jpg',
		position: 'Division Director, Public Relations & Marketing'
	},{
		name: 'Annette Spina',
		email: 'SpinaA@hillsboroughcounty.org',
		officePhone: '813-301-7239',
		mobilePhone: '813-382-5453',
		vcardURL: null,
		photoURL: null,
		position: 'Director, Communications & Digital Media'
	}
	];

	var tbody = function() {

		out = '';

		for (var i = 0; i < contacts.length; i++) {
			out += '<tr>';

			out += '<td>';
			out += contacts[i].name;
			out += '</td>';

			if (contacts[i].position) {
				out += '<td>';
				out += contacts[i].position;
				out += '</td>';
			} else if (contacts[i].departments) {
				out += '<td>';
				out += '<ul>';
				for (var di = 0; di < contacts[i].departments.length; di++) {
					out += '<li>'+contacts[i].departments[di]+'</li>';
				};
				out += '</ul>';
				out += '</td>';
			} else {
				out += '<td></td>';
			}

			out += '<td>';
			out += '<ul class="list-unstyled">';
			if (contacts[i].email) { out += '<li><i class="fa fa-fw fa-envelope"></i> <a href="mailto:'+contacts[i].email+'">Email</a></li>'; }
			if (contacts[i].officePhone) { out += '<li><i class="fa fa-fw fa-phone"></i> <a href="tel:'+contacts[i].officePhone+'">'+contacts[i].officePhone+'</a></li>'; }
			if (contacts[i].mobilePhone) { out += '<li><i class="fa fa-fw fa-mobile"></i> <a href="tel:'+contacts[i].mobilePhone+'">'+contacts[i].mobilePhone+'</a></li>'; }
			if (contacts[i].vcardURL) { out += '<li><i class="fa fa-fw fa-user"></i> <a href="'+contacts[i].vcardURL+'" target="_blank">vCard</a></li>'; }
			out += '</ul>';
			out += '</td>';

			out += '<td>';
			if (contacts[i].photoURL) {	out += '<img width="96" src="'+contacts[i].photoURL+'">'; }
			out += '</td>';

			out += '</tr>';
		}

		return out;
	};

	$('#media-contacts').find('tbody').html( tbody() );

});