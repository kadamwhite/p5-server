// var path = require( 'path' );
// var livereload = require( 'livereload' );

// var server = livereload.createServer();

// console.log( 'dir: ', path.join( __dirname, '../sketch.js' ) );
// server.watch( path.join( __dirname, '../sketch.js' ) );

var liveServer = require( 'live-server' );

var params = {
    port: 4444, // Set the server port. Defaults to 8080.
    host: '127.0.0.1', // Set the address to bind to. Defaults to 0.0.0.0.
    // root: '/', // Set root directory that's being server. Defaults to cwd.
    // open: false // When false, it won't load your browser by default.
};

liveServer.start( params );
