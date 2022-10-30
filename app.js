const http = require("http");

const port = 8000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  if (req.url === "/") {
    res.write(
      JSON.stringify({
        slackUsername: "denniman02",
        backend: true,
        age: 32,
        bio: "Hi, I Dennis, a javaScript engineer with passion for building solutions for the web.",
      })
    );
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Server running at ${port}/`);
});
