import express from "express";
import path from "path";

const app = express();
const PORT = 3001;

//app.use(express.static('build'))

app.get("/", (req, res) => {
  //res.send(req.url)
  res.sendFile('index_rendered.html', { root: '.' })
});

app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}/`);
});
