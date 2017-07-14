angular.module('GeoIPLocator', [])
    .controller('GeoIPLocatorController', function($http) {
        var geo_ip_locator = this;

        ip_address = ""
        geo_ip_locator.get_location = function() {

            if(geo_ip_locator.heading != undefined){
                ip_address = geo_ip_locator.heading
            }
            $http.get("https://freegeoip.net/json/"+ip_address).then(function (response) {

            geo_ip_locator.country_name = response.data.country_name
            geo_ip_locator.country_code = response.data.country_code
            geo_ip_locator.region_code = response.data.region_code
            geo_ip_locator.region_name = response.data.region_name
            geo_ip_locator.city = response.data.city
            geo_ip_locator.zip_code = response.data.zip_code
            geo_ip_locator.time_zone = response.data.time_zone
            geo_ip_locator.latitude = response.data.latitude
            geo_ip_locator.longitude = response.data.longitude
            geo_ip_locator.ip = response.data.ip
            })

        };
        geo_ip_locator.get_location();
    });
