var app = angular.module("PhoneApp", []);

app.controller("AppCtrl", function($scope) {
	$scope.callHome = function(msg) {
		alert(msg);
	}
});

app.directive("phone", function() {
	return {
		scope: {
			dial: "&"
		},
		template: '<input type="text" ng-model="value"/>' +
			'<button type="button" class="btn btn-success" ng-click="dial({message:value})">Call Home!</button>'
	}
});