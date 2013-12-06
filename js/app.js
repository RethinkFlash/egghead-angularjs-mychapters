var app = angular.module("zippyApp", []);

app.directive("zippy", function() {
	return {
		restrict: "E",
		scope: {
			title: "@",
			content: "&"
		},
		transclude: true,
		templateUrl:'zippy.html',
		link: function (scope) {
			scope.isContentVisible = false;
			scope.toggleContent = function() {
				scope.isContentVisible = !scope.isContentVisible;
			}
		}
	}
});