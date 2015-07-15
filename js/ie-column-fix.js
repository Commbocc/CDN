$(function () {

	for (var i = 1; i <= 12; i++) {
		$('.col-sm-'+i+', .col-md-'+i+', .col-lg-'+i).addClass('col-xs-'+i);
		$('.col-sm-offset-'+i+', .col-md-offset-'+i+', .col-lg-offset-'+i).addClass('col-xs-offset-'+i);
	}

});