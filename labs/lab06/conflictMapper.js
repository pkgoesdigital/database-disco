// Documents with conflicting revisions have a _conflicts property. 
// Create a view that emits conflicting revisions and maps them to the doc _id.
// Include the mapper function in conflictMapper.js

function(doc) {
    if ('name' in doc && 'albums' in doc) {
      doc.albums.forEach(function(album){
        var
          key = album.title || album.name,
          value = { by: doc.name, album: album };
        emit(key, value);
      });
    }
  }
