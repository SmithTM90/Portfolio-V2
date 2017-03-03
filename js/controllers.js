portApp.controller('HomeCtrl', function($scope){
	$(document).ready(function(){

		var aboutFirst = $('#aboutFirst').text();
		var aboutSecond = $('#aboutSecond').text();

		$('#blurb1').mouseenter( function() {
			$(this).html('My Skills - Languages: Javascript, HTML5, CSS3, Ruby, SQL <br> Frameworks: Angular, React, Node, Express, Rails <br> Libraries: Bootstrap, jQuery, D3 <br> Databases: PostgreSQL, MongoDB, Active Record <br> Design: Animations, Web Fonts, Mobile First Design, Image Manipulation <br> Other: RESTful Routing, Authentication, Authorization, JSON, AJAX, JWT, Sessions, TDD, Agile');
		});

		$('#blurb1').mouseleave(function() {
			$(this).html(aboutFirst);
		});

		$('#blurb2').mouseenter( function() {
			$(this).html('My Skills - Languages: Javascript, HTML5, CSS3, Ruby, SQL <br> Frameworks: Angular, React, Node, Express, Rails <br> Libraries: Bootstrap, jQuery, D3 <br> Databases: PostgreSQL, MongoDB, Active Record <br> Design: Animations, Web Fonts, Mobile First Design, Image Manipulation <br> Other: RESTful Routing, Authentication, Authorization, JSON, AJAX, JWT, Sessions, TDD, Agile');
		});

		$('#blurb2').mouseleave(function() {
			$(this).html(aboutSecond);
		});

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
