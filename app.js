import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;


// -------------------- FILE & SESSION SETUP --------------------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


// Home
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "html", "index.html"));
});


app.get("/index", (req, res) => {
  res.render("index.ejs");
});


// -------------------- START SERVER --------------------
app.listen(port, () => console.log(`Server running at http://localhost:${port}`));