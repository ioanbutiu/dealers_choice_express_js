const express = require("express");
const morgan = require("morgan");
const postBank = require("./projectBank");

const app = express();
const port = 3000;

app.use(morgan("dev"));
// app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  const posts = postBank.list();

  const html = `<!DOCTYPE html>
  <html>
    <head>
      <title>Wizard News</title>
    </head>
    <body>
      <ul>
        ${posts.map((post) => `<li>${post.name}</li>`).join(" ")}
      </ul>
    </body>
  </html>`;

  res.send(html);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
