var mongo = require("mongodb").MongoClient;
var prompt = require("prompt-sync")();
var url = "mongodb://localhost:27017/restaurant_db";

mongo.connect(url, function(err, db){
  var collection = db.collection('restaurants');
   // var allChoice = prompt("Type 'all' and press enter to display all restaurants' names: ");

  //Task1 Search
  //For loop to search for the exact rest you want
//   var searchRestaurant = prompt("Search Restaurants:");
//   	collection.find({name: searchRestaurant}).forEach(function(doc) {
//   		console.log(doc);
// });
  
  //Task 2 Create/Add
  //Give User prompts to create and add their own restaurant
    var addRestName = prompt("Add Restaurant name: ");
    var addRestStreet = prompt("Enter new address: ");
    var addRestZipcode = prompt("Enter new zip: ");
    var addRestYelp = prompt("Add Yelp Url: ");
	   
     collection.insert({
       name: addRestName,
       address: {
       street: addRestStreet,
       zipcode: addRestZipcode,
       },
       yelp: addRestYelp
    
});
 

	

	//Task 3 Edit
	  var editRestName = prompt("Update Restaurant name: ");
    var editRestStreet = prompt("Update address: ");
    var editRestZipcode = prompt("Update zip: ");
    var editRestYelp = prompt("Update Yelp Url: ");
      //create new edit collection
      collection.update(
        { name: editRestaurant },
      {
        name: editRestName,
        address: {
        street: editRestStreet,
        zipcode: editRestZipcode,
        },
        yelp: editRestYelp
      }
  );
      console.log(editRestaurant);


  //Task 4 Delete
  var deleteRestaurant = prompt('Enter name of restaurant you would like to remove: ');
  //create collection to remove
  collection.remove(
    { name: deleteRestaurant},
    {
      justOne: true
    }
  );
});












