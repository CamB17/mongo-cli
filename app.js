var mongo = require("mongodb").MongoClient;
var prompt = require("prompt-sync")();
var url = "mongodb://localhost:27017/restaurant_db";

mongo.connect(url, function(err, db){
  var collection = db.collection('restaurants');
  
  	  //Task1 Done
  	  //For loop to search for the exact rest you want
  //var searchRestaurant = prompt("Search Restaurants:");
  	//collection.find({name: searchRestaurant}).forEach(function(doc) {
  		//console.log(doc);
  
  	  //Task 2 Done
  	  //Give User prompts to create and add their own restaurant
  var name = prompt("Restaurant name");
  var street = prompt("Enter address");
  var zipcode = prompt("Enter zip");
  var yelp = prompt("Yelp Url");
	collection.insert({"name": name, "street": street, "zipcode": zipcode, "yelp": yelp}, function(doc) {
		console.log(doc);
	});
});
 

	

	//Task 3
	//Edit
	//collection.insert([
		//{
    //"name": "name",
    //"address": {
    //  "street" : "streetW",
    //  "zipcode" : "zipcode"
    //},
    //"yelp": "url"}
    //])










   //});
  	
  
  
  
  



//});