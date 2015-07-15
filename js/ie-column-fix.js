$(function () {

	function IsIE8Browser() {
		var rv = -1;
		var ua = navigator.userAgent;
		var re = new RegExp("Trident\/([0-9]{1,}[\.0-9]{0,})");
		if (re.exec(ua) != null) {
			rv = parseFloat(RegExp.$1);
		}
		return (rv == 4);
	}

	if (IsIE8Browser()) {
		for (var i = 1; i <= 12; i++) {
			$('.col-sm-'+i+', .col-md-'+i+', .col-lg-'+i).addClass('col-xs-'+i);
			$('.col-sm-offset-'+i+', .col-md-offset-'+i+', .col-lg-offset-'+i).addClass('col-xs-offset-'+i);
		}
	}

});