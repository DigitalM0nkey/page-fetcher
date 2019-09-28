const args = process.argv.slice(2);
const fs = require('fs');
const request = require('request');
// get the webpage from user input
request(args[0], (error, response, body) => {
  // Get user defind path.
  const path = args[1];
  //  Download to the file path.
  fs.writeFile(path, body, (err) => {
    if (err) {
      throw err;
    }
    // Calc the bytes of the saved file.
    // Output a message with all the info.
    console.log(`Downloaded and saved ${fs.statSync(path).size} bytes to ${path}`);
  });
});
