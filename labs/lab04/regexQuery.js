// Find a town by name in a case-insenstive regular expression containing the word new
// Include the query in regexQuery.js

db.towns.find( { name: { $regex: /^NEW/i } } )

{ "_id" : ObjectId("5d252490a9d62be18bed886c"), "name" : "New York", "population" : 22200000, "lastCensus" : ISODate("2016-07-01T00:00:00Z"), "famousFor" : [ "the MOMA", "food", "Derek Jeter" ], "mayor" : { "name" : "Bill de Blasio", "party" : "D" } }
{ "_id" : ObjectId("5d25282c83859672fdc56927"), "name" : "New York", "population" : 22200000, "lastCensus" : ISODate("2016-07-01T00:00:00Z"), "famousFor" : [ "the MOMA", "food", "Derek Jeter" ], "mayor" : { "name" : "Bill de Blasio", "party" : "D" } }