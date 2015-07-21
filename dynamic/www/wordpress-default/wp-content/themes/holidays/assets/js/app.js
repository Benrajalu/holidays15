angular.module('app', ['ngSanitize', 'ngAnimate', 'ui.router'])
.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  //
  // For any unmatched url, redirect to /state1
  //$locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('default', {
      url: "/",
      templateUrl: myLocalized.partials + 'main.html', 
      controller: 'Main'
    })
    .state('detail', {
      url: "/{slug}",
      templateUrl: myLocalized.partials + 'detail.html', 
      controller: 'Content'
    });
})
.directive('loaded', function () {       
    return {
    	restrict: 'A',
        link: function(scope, element, attrs) {   
            element.bind("load" , function(event){ 
            	indexHeight();
				magicLineHeight();
				smartLine();
            });
        }
    }
})
.directive('article', function () {       
    return {
        restrict: 'A',
    	templateUrl: myLocalized.partials + 'content.html'
    };
})
.controller('Main', function($scope, $rootScope, $http, $stateParams, $timeout) {
	document.querySelector('title').innerHTML = 'Julie & Benoit | Vacances 2015';
	var drawHeights = function(){
		indexHeight();
		magicLineHeight();
		smartLine();
	}
	$rootScope.loading = true;
	$scope.off = "off";
	$http.get('/wp-json/pages/?filter[ID]=2')
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
		$http.get('/wp-json/posts/?filter[cat]=2').success(function(res2){
			$scope.nantes = res2;
			drawHeights();
		});
		$http.get('/wp-json/posts/?filter[cat]=3').success(function(res3){
			$scope.london = res3;
			drawHeights();
		});
		$http.get('/wp-json/posts/?filter[cat]=4').success(function(res4){
			$scope.bruxelles = res4;
			drawHeights();
		});
})
.controller('Content', function($scope, $rootScope, $http, $stateParams, $timeout) {
	$('html,body').animate({
	  scrollTop: 0
	}, 300);
	$rootScope.loading = true;
	$rootScope.slugtest = $stateParams;
	$http.get('/wp-json/posts/?filter[name]=' + $stateParams.slug)
	.success(function(res){
		$scope.post = res[0];
		$scope.state = "on";
		document.querySelector('title').innerHTML = $scope.post.title + ' | Vacances 2015';
		indexHeight();
		magicLineHeight();
		smartLine();
		// Start gallery
		$scope.$watch("images", function (newValue, oldValue) {
		  $timeout(function() {
		  	$('.foogallery-container').justifiedGallery({
		    	rowHeight : 150,
		    	captions: false,
		    	selector: '> a',
    			margins : 1,
    			border:0,
    			refreshTime: 500
		    });

		    $('.foogallery-container').each(function() {
			    $(this).magnificPopup({
			        delegate: 'a',
			        type:'image',
			        mainClass: 'mfp-fade',
			        gallery: {
			         	enabled: true
			        }
		     	});
		    });
		  });
		});
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
