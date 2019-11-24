// Create a new database named blogger with a collection named articles
// Insert a new article with an author name and email, creation date, and text
// Include all commands you used to create the database, collection, and data in createBlogger.js

//create a new database named blogger
mongo --host nosql-mongodb blogger 

// database isn't technically created until articles collection is added...

db.articles.insert({
    authorName: "Tina Fey",
    email: "tinaFeySaturdayNightLive@gmail.com",
    creationDate: ISODate("2016-07-01"),
    text: ["thing1","thing2","thing3"], })
     