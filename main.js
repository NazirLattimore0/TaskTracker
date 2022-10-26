// // <--- connecting to a json file ---->
// const http = require("http");
// const port = process.env.port || 5000;

// // here we will use our .createServer method to accept our request and response
// // here we created a server for our computer without express
// http
//   .createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/html" });

//     // ADD ROUTES
//     const url = req.url;

//     if (url === "/profile") {
//       res.write("<h1>Welcome to your profile</h1>");
//       res.write("<p>Im an appretice for R2H</p>");
//       res.write("<p>I love coffee</p>");
//       res.end();
//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.write(JSON.stringify(work));
//       res.end();
//     } else {
//       res.write("<h1>HELLO WORLD</h1>");
//       res.end();
//     }
//   })

//   .listen(port, () => {
//     // here is where the server is running on our port 5000
//     console.log(`Server listening on port ${port}`);
//   });
