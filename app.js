import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.port || 3000;

app.use(express.static(path.join(__dirname + "/public")));
app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");


app.get("/", (req, res) => {
    res.render("index");
});

app.listen(port, () => {console.log(`Server is running on http://localhost:${port}`)});