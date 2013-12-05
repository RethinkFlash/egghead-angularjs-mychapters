var app = angular.module("zippyApp", []);

app.directive("zippy", function() {
	return {
		restrict: "E",
		scope: {
			title: "@",
			content: "&"
		},
		transclude: true,
		template:'<div>\n\t<h3 ng-click="toggleContent()">{{ title }}</h3>\n\t<div ng-transclude ng-show="isContentVisible">Hello World</div>\n</div>',
		link: function (scope) {
			scope.isContentVisible = false;
			scope.toggleContent = function() {
				scope.isContentVisible = !scope.isContentVisible;
			}
		}
	}
});