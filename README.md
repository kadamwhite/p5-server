# Getting Started with p5.js

This project is a lightweight local server designed for exploring [p5.js](http://p5js.org). Some of the add-ons to p5, including `p5.sound`, require that you run the code from a server&mdash;p5-server is a simple way to get a local server set up so that you don't need to worry about deploying your sketch to the internet.

## Installation

1. Download this project to your machine
2. Navigate to the project's directory on the command line
3. Once you are in the project directory, run `npm install` from your command line
4. After installation completes, run `npm start`

`npm start` will load a local development server and open your p5 sketch in your default web browser.

## Editing your sketch

Once your sketch is loaded in the web browser (it will be a white screen to begin with), you can begin writing p5 code in the `sketch.js` file included in this project.

Every time you save `sketch.js`, the server will auto-detect the updated file and reload the sketch for you.
