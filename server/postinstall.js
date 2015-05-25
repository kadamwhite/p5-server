var chalk = require( 'chalk' );

var messages = [
  'Thank you for installing p5 server!',
  '',
  'Run `npm start` and open http://127.0.0.1:3030 in a web browser to begin.',
  '',
  ''
];

console.log( chalk.cyan( messages.join( '\n' ) ) );
