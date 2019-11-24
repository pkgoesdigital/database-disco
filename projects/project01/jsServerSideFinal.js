// Generating Orders
db.system.js.save(
    {
        _id: "insertOrder",
        value: function insertOrder(order_no, user, orderTime, recipeOrdered) {
            db.orders.insert({
                order_no: order_no,
                user: user,
                orderTime: ISODate(orderTime),
                recipeOrdered: recipeOrdered
            });
        }
    }
);

//used for saving functions in database - SO CLOSE to working for the server-side function, made many revisions from previous pushes
db.system.js.save(
    {
        // functions as server side
        _id: "generateOrders",
        value: function generateOrders() {
            var i = 0;
            var order_no = 0;
            var name = ingredient.name;
            var inventory = db.inventory;
            var user = db.users.findOne({ _id: user });
            var recipe = db.recipes.findOne({ _id: recipe });
            var qty = ingredient.quantity;
            var amtAvailable = inventory.findOne({ name: name }).quantity;

            if (qty <= amtAvailable) {
                count++;
            } else {
                throw "insufficient ingredients for order, pick another pizza";
            }
            if (recipe == null || user == null) {
                throw "user or recipe DNE in BobsPizza";
            }

            //  creates orders with function outlined above
            while (i < count) {
                var orderTime = new Date().toISOString()
                insertOrder(order_no, user, orderTime, recipeOrdered)
                
                // reduces quantity of ingredients
                var reduce = amtAvailable - qty;
                inventory.update(
                    { name: name },
                    { $set: { quantity: reduce } }
                );
                ++i;
            }


        }
    }
);
//use for interacting and inserting data into mongoDB shell
db.loadServerScripts();
db.bobsPizza.insert({
    _id: generateOrders,
    name: "generateOrders"
});



