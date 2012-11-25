
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'HTML5 Hacks' });
};

exports.example1 = function(req, res){
 res.render('example1', { title: 'Example1' })
};

exports.example2 = function(req, res){
 res.render('example2', { title: 'Example2' })
};

exports.example3 = function(req, res){
 res.render('example3', {
 	"title": "HTML5 Hacks",
	"name": "Yogurt Shop Daily Data",
	"toppings":
		[
            { "id": "5001", "type": "Walnuts" },
            { "id": "5002", "type": "Jelly Beans" },
            { "id": "5005", "type": "Cherries" },
            { "id": "5007", "type": "Powdered Sugar" },
            { "id": "5006", "type": "Chocolate Sprinkles" },
            { "id": "5003", "type": "Chocolate Syrup" },
            { "id": "5004", "type": "Cocunut" }
		], 
	"yogurts":
		[
			{ "id": "5001", "type": "Tart", "flavors": 
				[
					{ "id": "5001", "type": "Green Tea" },
					{ "id": "5002", "type": "Euro" },
					{ "id": "5005", "type": "Orange" }
				] 
			},
			{ "id": "5002", "type": "Sweet", "flavors": 
				[
					{ "id": "5001", "type": "Vanilla" },
					{ "id": "5002", "type": "Chocolate" },
					{ "id": "5005", "type": "Mexican Bean" }
				] 
			},
			{ "id": "5005", "type": "Cake", "flavors": 
				[
					{ "id": "5001", "type": "Cherry Cheesecake" },
					{ "id": "5002", "type": "Apple Fritter" },
					{ "id": "5005", "type": "Carrot Cake" }
				]
			}
		] 
	})
};

