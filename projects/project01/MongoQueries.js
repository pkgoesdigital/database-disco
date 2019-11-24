
// to enforce organization in mongo, I used references to reference the information in the inventory document for the
// orders server side query


// verify insertion of data by functions:
db.orders.count()
db.users.count()
db.recipes.count()
db.inventory.count()

// query for all orders of recipe #9
db.orders.find({ 'recipeOrdered': '9' }, { _id: 1, user: 1, orderTime: 1}).explain("executionStats").executionStats

// information returned by db: <- I am not sure why nothing is getting returned, as there is data in the DB that fits this.
// {
// 	"executionSuccess" : true,
// 	"nReturned" : 0,
// 	"executionTimeMillis" : 29,
// 	"totalKeysExamined" : 0,
// 	"totalDocsExamined" : 50000,
// 	"executionStages" : {
// 		"stage" : "PROJECTION",
// 		"nReturned" : 0,
// 		"executionTimeMillisEstimate" : 0,
// 		"works" : 50002,
// 		"advanced" : 0,
// 		"needTime" : 50001,
// 		"needYield" : 0,
// 		"saveState" : 390,
// 		"restoreState" : 390,
// 		"isEOF" : 1,
// 		"invalidates" : 0,
// 		"transformBy" : {
// 			"_id" : 1,
// 			"user" : 1,
// 			"orderTime" : 1
// 		},
// 		"inputStage" : {
// 			"stage" : "COLLSCAN",
// 			"filter" : {
// 				"recipeOrdered" : {
// 					"$eq" : "9"
// 				}
// 			},
// 			"nReturned" : 0,
// 			"executionTimeMillisEstimate" : 0,
// 			"works" : 50002,
// 			"advanced" : 0,
// 			"needTime" : 50001,
// 			"needYield" : 0,
// 			"saveState" : 390,
// 			"restoreState" : 390,
// 			"isEOF" : 1,
// 			"invalidates" : 0,
// 			"direction" : "forward",
// 			"docsExamined" : 50000
// 		}
// 	}
// }

// find all orders with recipe 3 and user number 3
db.orders.aggregate([
    {
      $match: {
        'recipeOrdered': {
          $eq: '3'
        }
      }
    },
    {
      $match: {
          'user': {
            $eq: '3'
        }
      }
    }
  ])


  db.orders.find({ 'recipeOrdered': '14' }, { _id: 1, user: 1, orderTime: 1}).explain("executionStats").executionStats