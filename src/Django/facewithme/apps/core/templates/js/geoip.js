function geoip_country_code() { return '{{object.country_code}}'; }
function geoip_country_name() { return '{{object.country_name}}'; }
function geoip_city()         { return '{{object.city}}'; }
function geoip_region()       { return '{{object.region_name}}'; }
function geoip_region_name()  { return ''; }
function geoip_latitude()     {	
	return {% if object.latitude %}{{ object.latitude|floatformat:8 }}{% else %}''{%endif%};
}
function geoip_longitude()    {
	return {% if object.longitude %}{{ object.longitude|floatformat:8 }}{% else %}''{%endif%};
}
function geoip_postal_code()  { return ''; }
function geoip_area_code()    { return ''; }
function geoip_metro_code()   { return ''; }