var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser= require( 'body-parser' );
var port = process.env.PORT || 8080;
var pg = require('pg');

// create new pool using conifg
var pool = new pg.Pool(config);
// static folder
app.use( express.static( 'public' ) );
app.use( bodyParser.urlencoded( {extended: true }));
// spin up server
app.listen( port, function(){
  console.log( 'server up on', port );
});


// base url
app.get( '/', function( req, res ){
  console.log( 'base url hit' );
  res.sendFile( path.resolve('public/index.html' ));
});
