import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Motor de vistas
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

// Archivos estáticos (CSS, JS, IMG)
app.use(express.static(path.join(__dirname, "public")));

// Rutas
app.get("/", (req, res) => {
    res.render("index", { titulo: "mi titulo dinámico" });
});

app.get("/:page", (req, res) => {
    const page = req.params.page;
    res.render(page);
});

// Servidor
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});