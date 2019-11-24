// users, inventory, recipes, orders
db.system.js.save(
    {
        _id: "insertUsers",
        value: function insertUsers(user, emailAddress, firstName, lastName, phoneNumber, addressLine1, addressLine2, city, state, zip) {
            db.users.insert({
                user: user,
                emailAddress: emailAddress,
                firstName: firstName,
                lastName: lastName,
                phoneNumber: phoneNumber,
                addressLine1: addressLine1,
                addressLine2: addressLine2,
                city: city,
                state: state,
                zip: zip
            });
        }
    }
);
db.system.js.save(
    {
        _id: "generateUsers",
        value: function generateUsers() {
            i = 0;
            user = 001;
            count = 1001;
            nameCount = 9
            var firstNames = ['Jane', 'Jill', 'Jack', 'Jeremiah', 'Jenny', 'Jennifer', 'Julie', 'Jules', 'Ginny', 'Sarah'];
            var lastNames = ['Doe', 'Smith', 'Jolie', 'Provencal', 'Le', 'Somilene', 'Vossen', 'Senftner', 'Klimas', 'Chan'];
            phoneNumber = '123-456-7890';
            addressLine1 = '1125 Washington St.';
            addressLine2 = 'Unit 495';
            city = 'Denver';
            state = 'CO';
            zip = '80909';
            while (i < count) {
                if (nameCount == 10) {
                    nameCount = 0;
                }
                var emailAddress = 'user' + i + '@gmail.com';
                var firstName = firstNames[nameCount];
                var lastName = lastNames[nameCount];
                insertUsers(user, emailAddress, firstName, lastName, phoneNumber, addressLine1, addressLine2, city, state, zip)
                ++nameCount;
                ++i;
                ++user;
            }
        }
    }
);
db.loadServerScripts();
db.bobsPizza.insert({
    _id: generateUsers,
    name: "generateUsers"
});
// The start of any good pizza is quality ingredients! At a minimum we need to track the following fields per ingredient:
// Name
// Description
// Quantity
// I realize that in real life "1 cheese" doesn't make sense, but for the sake of the project let's just assume that if a pizza needs cheese, it takes a whole number quantity of "cheese" ingredients that can be decremented from the quantity value
// Feel free to make this section more complex, however!
db.system.js.save(
    {
        _id: "insertInventory",
        value: function insertInventory(name, description, quantity) {
            db.inventory.insert({
                name: name,
                description: description,
                quantity: quantity,
            });
        }
    }
);
db.system.js.save(
    {
        _id: "generateInventory",
        value: function generateInventory() {
            description = "ingredients for pizza";
            pizzaIngredients = ['Olives', 'Onions', 'Garlic', 'Spinach', 'Pineapple', 'Ham', 'Sausage', 'Anchovies', 'Pickles',
                'Mozzarella', 'Basil', 'Pizza Crust', 'Red Sauce', 'White Sauce', 'Tomato', 'Bell Peppers', 'Mashed Potatoes', 'Cheese'];
            quantity = 30000;
            count = 18;
            i = 0;
            while (i < count) {
                name = pizzaIngredients[i];
                insertInventory(name, description, quantity)
                ++i;
            }
        }
    }
);
db.loadServerScripts();
db.bobsPizza.insert({
    _id: generateInventory,
    name: "generateInventory"
});


db.system.js.save(
    {
        _id: "insertRecipe",
        value: function insertRecipe(recipeOrdered, name, description, ingredients, instructions) {
            db.recipes.insert({
                recipeOrdered: recipeOrdered,
                name: name,
                description: description,
                ingredients: ingredients,
                instructions: instructions,
            });
        }
    }
);
// 25 different pizza recipes
// generates recipes for 25 different pizzas
// as far as recipes go for mongo, the intermediate table is no longer necessary because you can store the list 
// of ingredients directly in the recipe. you can then loop over the array and decrement the amounts in the inventory table 
db.system.js.save(
    {
        _id: "generateRecipes",
        value: function generateRecipes() {
            i = 0;
            count = 25;
            recipeOrdered = 0;
            description = "YUM";
            var ingredientList = ['Pizza Crust', 'Red Sauce', 'Mozzarella', 'White Sauce', 'Pineapple', 'Ham', 'Sausage', 'Anchovies', 'Pickles',
                'Garlic', 'Basil', 'Olives', 'Onions', 'Spinach', 'Tomato', 'Bell Peppers', 'Mashed Potatoes'];
            instructions = "Put all the toppings on the pizza and bake for 35 min at 400 degrees F";
            while (i < count) {
                var pizzaNames = ['The New York', 'Cheese', 'Double Cheese', 'Triple Cheese', 'Italian', 'Mushroom', 'Mexican Pizza',
                    'Pepperoni', 'Sausage', 'Hawaiian', 'Garden Veggie', 'Veggie', 'Pickled Pizza', 'Mashed Potato Pizza', 'Three Meat', 'Margherita',
                    'BBQ Chicken', 'Ranch Style', 'Mystery Pizza', 'Alfredo Pizza', 'Tuscan Pizza', 'Anchovie', 'Gluten Free Pizza', 'Vegan Pizza', 'Olive Medley'];
                name = pizzaNames[recipeOrdered];
                if (recipeOrdered % 2 == 0) {
                    var ingredients = [ingredientList[0], ingredientList[1], ingredientList[2]];
                }
                else
                    var ingredients = [ingredientList[0], ingredientList[4], ingredientList[2]];
                insertRecipe(recipeOrdered, name, description, ingredients, instructions)
                if (recipeOrdered == 25) {
                    recipeOrdered = -1;
                }
                ++recipeOrdered;
                ++i;
            }
        }
    }
);
db.loadServerScripts();
db.bobsPizza.insert({
    _id: generateRecipes,
    name: "generateRecipes"
});



