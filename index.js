/* use require keyword to include http module
this module allows node to transefer data over the HTTP used by the internet
*/
const http = require("http");
/*define the location and port of the server*/
const hostname = "127.0.0.1";
const port = 3000;

const secretLink =
  '<img src="https://i.redd.it/9iq1u3w1j7h21.jpg" />';

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write('<h1 style="color:red">Hello World!</h1>');
    res.write("<p>I wonder what else we can send..</p>");
    res.end();
  } else if (req.url === "/cats") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>Look, the cats are hugging each other!</h1>");
    res.write(
      '<a href="/secret-link"><img src ="https://images.ctfassets.net/ub3bwfd53mwy/5zi8myLobtihb1cWl3tj8L/45a40e66765f26beddf7eeee29f74723/6_Image.jpg?w=750"></a>'
    );
    res.end();
  } else if (req.url === "/secret-link") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write(
      "<h1>You found the secret link!! Here is an image of a majestic tiger</h1>"
    );
    res.write(secretLink);
    res.end();
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    res.write("Page not found");
    res.end();
  }
});

server.listen(port, hostname, () =>
  console.log(`Server running at http://${hostname}:${port}/`)
);
