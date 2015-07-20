angular.module('app', ['ngRoute', 'ngSanitize', 'ngAnimate'])
.config(function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
 
	$routeProvider
	.when('/', {
		templateUrl: myLocalized.partials + 'main.html',
		controller: 'Main'
	})
	.when('/:slug', {
		templateUrl: myLocalized.partials + 'article.html',
		controller: 'Content'
	});
})
.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
})
.directive('loaded', function () {       
    return {
        link: function(scope, element, attrs) {   
            element.bind("load" , function(event){ 
            	indexHeight();
				magicLineHeight();
				smartLine();
            });
        }
    }
})
.controller('Main', function($scope, $rootScope, $http, $routeParams, $timeout) {
	document.querySelector('title').innerHTML = 'Julie & Benoit | Vacances 2015';
	var drawHeights = function(){
		indexHeight();
		magicLineHeight();
		smartLine();
	}
	$rootScope.loading = true;
	$scope.off = "off";
	$http.get('wp-json/pages/?filter[ID]=2')
	.success(function(res){
		$scope.root = myLocalized.root;
		$scope.page = res[0];
		document.querySelector('title').innerHTML = 'Julie & Benoit | Vacances 2015';
		drawHeights();
	})
	.finally(function(){
		$rootScope.loading = false;
		$scope.off = "on"
	});
	// Get data on the three categories
		$http.get('wp-json/posts/?filter[cat]=2').success(function(res2){
			$scope.nantes = res2;
			drawHeights();
		});
		$http.get('wp-json/posts/?filter[cat]=3').success(function(res3){
			$scope.london = res3;
			drawHeights();
		});
		$http.get('wp-json/posts/?filter[cat]=4').success(function(res4){
			$scope.bruxelles = res4;
			drawHeights();
		});
})
.controller('Content', function($scope, $rootScope, $http, $routeParams, $timeout) {
	$rootScope.loading = true;
	$http.get('wp-json/posts/?filter[name]=' + $routeParams.slug)
	.success(function(res){
		$scope.post = res[0];
		$scope.state = "on";
		document.querySelector('title').innerHTML = $scope.post.title + ' | Vacances 2015';
		indexHeight();
		magicLineHeight();
		smartLine();
		// Set theme color
			$scope.color= "";
			$scope.category= false;
			switch ($scope.post.terms.category[0].slug){
				case 'nantes':
					$scope.color = 'blue';
				break;

				case 'london':
					$scope.color = 'red';
					$scope.category=  true;
				break;

				case 'bruxelles':
					$scope.color = 'yellow';
					$scope.category=  true;
				break;
			}
	})
	.finally(function(){
		$rootScope.loading = false;
	});
});
