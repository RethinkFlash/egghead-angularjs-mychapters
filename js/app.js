var app = angular.module("PhoneApp", []);

app.controller("AppCtrl", function($scope) {

});

app.directive("buttontoolbar", function() {
	return {
		scope: {

		},
		restrict: "E",
		transclude: true,
		template: '<div ng-transclude class="btn-toolbar" role="toolbar"></div>'
	}
});

app.directive("buttongroup", function() {
	return {
		scope: {

		},
		restrict: "E",
		transclude: true,
		template: '<div ng-transclude class="btn-group"></div>'
	}
});