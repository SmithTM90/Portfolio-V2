portApp.controller('HomeCtrl', function($scope){
	$(document).ready(function(){

		var aboutFirst = $('#aboutFirst').text();
		var aboutSecond = $('#aboutSecond').text();

		$('.peerQuote').mouseenter( function() {
			$(this).html('My Skills - Languages: Javascript, HTML5, CSS3, Ruby, SQL <br> Frameworks: Angular, Node, Express, Rails <br> Libraries: Bootstrap, jQuery, D3 <br> Databases: PostgreSQL, MongoDB, Active Record <br> Design: Animations, Web Fonts, Mobile First Design, Image Manipulation <br> Other: RESTful Routing, Authentication, Authorization, JSON, AJAX, JWT, Sessions, TDD, Agile');
		});

		$('.peerQuote').mouseleave(function() {
			$(this).html(aboutFirst);
		})

	});
});

portApp.controller('PortfolioCtrl', function($scope, $route){
	$(document).ready(function(){
	});
});

portApp.controller('AboutCtrl', function(){
	$(document).ready(function(){
	});
});

portApp.controller('ContactCtrl', function(){
	$(document).ready(function(){
	});
});