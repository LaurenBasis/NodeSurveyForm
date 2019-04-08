// read in http library
const http = require('http');
// gets environment variable
const port = process.env.PORT || 3000;

function hello_world(request, response) {
  // return status code 200: success
  response.statusCode = 200;
  // tell browser what type of data is being sent - stored in header
  response.setHeader('Content-Type', 'text/plain');
  // print message
  response.end('Hello Github Deploy!\n');
}

// create server using hello_world function
const server = http.createServer(hello_world);

// server function
// prints message in console
server.listen(port, function() {
  console.log(`Server running on http://localhost:${port}/`);
});
