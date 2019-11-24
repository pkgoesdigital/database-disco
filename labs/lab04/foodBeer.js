// Find all towns whose name contains an e and are famous for food or beer
// Include your query in foodBeer.js

db.towns.find({name : /^e/, famousFor : { $all : ['food', 'beer'] } },{ _id : 0, name:1, famousFor:1 })

//no results because there is no town that has the letter 'e' and is famous for food or beer