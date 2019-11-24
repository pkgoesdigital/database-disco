// Let's count the number of cities that share the same degree of longitude
// Using the cities collection we populated in class:
// Write a map function that emits messages based on the whole degree of longitude for each city (truncate decimal places)
// This will be similar to how we counted the unique digits for phone numbers
// Write a reduce function that receives the emitted messages and counts the number of cities per degree of longitude
// Write a mapreduce query against cities that uses the two functions you created above!
// Include the map function, reduce function, and mapreduce query in mapreduce.js

db.system.js.save({
    _id: "map",
    value: function () {
        var longitude = truncateDecimals(db.cities.count({'components.longitude': { $all: [longitude]} }));
        emit({
            longitude: longitude,
            name: this.components.name
        },
            {
                count: 1
            });
    }
})

db.system.js.save({
    _id: "truncateDecimals",
    value: function (number) {
        return Math[number < 0 ? 'ceil' : 'floor'](number);
    }
})


db.system.js.save({
    _id: "reduce",
    value: function (key, values) {
        var total = 0;
        for (var i = 0; i < values.length; i++) {
            var data = values[i];
            if('total' in data) {
                total += data.total;
              } else {
                total += data.count;
              }
        }
        return { count: total };
    }
})

results = db.runCommand({
    mapReduce: 'cities',
    map: map,
    reduce: reduce,
    out: 'cities.report'
})