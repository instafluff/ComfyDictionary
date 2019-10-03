var fs = require( "fs" );
var wordFull = fs.readFileSync( "words_full.json" );
// console.log( wordFull.toString() );
var wordDictionary = JSON.parse( wordFull.toString() );
var wordList = Object.keys( wordDictionary );
wordList.forEach( w => {
  if( !w.startsWith( "-" ) && !w.endsWith( "-" ) ) {
    fs.writeFileSync( "web/" + w.replace( / /g, "" ).replace( /-/g, "" ) + ".json", JSON.stringify(
      {
        word: w,
        definition: wordDictionary[ w ]
      }
    ) );
  }
});
