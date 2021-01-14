/* challenge
Implement a small command line node app called fetcher.js which should take a URL as a command-line argument
 as well as a local file path and download the resource to the specified path.
 Upon completion, it should print out a message like "Downloaded and saved 1235 bytes to ./index.html".
-Use the request library to make the HTTP request
-Use Node's fs module to write the file
-Use the callback based approach we've been learning so far
-Do not use the pipe function
-Do not use synchronous functions (see warning below)
 */
const request = require('request');
const fs = require('fs');
const site = process.argv[2];
const directory = process.argv[3];

const fetcher = function () {
  request(site, (error, response, body) => {
    //console.log("error:", error);
    //console.log('status:', response && response.statusCode);
    fs.writeFile(directory, body, (error) => {
      if (error) throw error
      console.log(`Downloaded and saved '${body.length} bytes to ${directory}`)
    });
  });
};

fetcher();




// const fetcher = function(site, directory) {
//   request(site, (error, body) => {
//     //console.log("error:", error);
//     //console.log('status:', response && response.statusCode);
//     if (error) {
//       console.log('error')
//       return
//     } 
//     fs.writeFile(body, directory, (error) => {
//       if (error) console.log("error") ; else console.log('success');
//     });
//   });
// };

// if (!site || !directory) {
//   console.log("you need to provide a correct site or directory path");
// } else {
//   fetcher(site, directory);
// }