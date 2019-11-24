// The import script import_from_jamendo.rb assigned a random number to each artist by 
// adding a property called random. Create a mapper function that will emit key-value pairs where the key 
// is the random number and the value is the band’s name. Save this in a new design document named 
// _design/random with the index name artist.
// Include the mapper function definition in randomMapper.js

function mapper(doc) {
    if ('artist' in doc)
        emit(doc.top, doc.artist) //doc.top references random number of artist last added to stack
}