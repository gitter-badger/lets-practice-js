var array = [1,1,1,5,5,6,7,9,9, 20, 21, 21, 47, 78, 101, 101, 105];
removeDup(array);

  function removeDup(array) {
    var red = [];
    for ( var i = 0; i <= array.length -1; i++ ) {
      if ( red.indexOf( array[i] ) < 0 ) {
        red.push( array[i] );
      }
    }
    console.dir(red);
  }
