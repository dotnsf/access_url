//.  app.js
var express = require( 'express' ),
    app = express();

app.get( '/*', function( req, res ){
  res.contentType( 'text/plain; charset=utf-8' );
  var url = req.protocol + '://' + req.get( 'host' ) + req.originalUrl;
  res.write( url );
  res.end();
});

var port = process.env.PORT || 8080;
app.listen( port );
console.log( "server starting on " + port + " ..." );
