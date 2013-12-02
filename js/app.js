/**
 * Created by kennethmalley on 12/2/13.
 */

/** remember to add documentation to your code!
 *  visit https://code.google.com/p/jsdoc-toolkit/w/list
 *  for how to use @params, @return, etc.
 *  Also remember to create a .jshintrc file in the root directory
 */

var myApp = angular.module('myApp',[]);
myApp.factory('Data', function() {
	return {message:"I'm data from a service"};
})

myApp.filter('reverse', function() {
	return function(text) {
		return text.split("").reverse().join("");
	}
})

function FirstCtrl($scope, Data) {
	$scope.data = Data;
}

function SecondCtrl($scope, Data) {
	$scope.data = Data;
}