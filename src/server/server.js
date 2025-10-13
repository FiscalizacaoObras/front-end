import express from "express";
import cors from "cors";
import fs from "fs/promises";
import path from "path";

const app = express();
const PORT = 3000;
const DATA_FILE = path.resolve("data.json");

app.use(cors());
app.use(express.json());

// Funções utilitárias para ler/escrever o JSON
async function readData() {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(raw);
}

async function writeData(data) {
    await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
}

// GET /template → retorna todos os itens
app.get("/template", async (req, res) => {
    const data = await readData();
    res.json(data.template);
});

// POST /template → adiciona um novo template
app.post("/template", async (req, res) => {
    const { name, description, x, y, width, height } = req.body;

    // validação básica
    if (name === undefined || description === undefined) {
        return res.status(400).json({ error: "Campos obrigatórios: name e description" });
    }

    const data = await readData();
    const novoItem = {
        name,
        description,
        x: Number(x) || 0,
        y: Number(y) || 0,
        width: Number(width) || 0,
        height: Number(height) || 0
    };

    data.template.push(novoItem);
    await writeData(data);

    res.status(201).json(novoItem);
});

// PUT /template/:index → atualiza o item pelo índice
app.put("/template/:index", async (req, res) => {
    const { index } = req.params;
    const { name, description, x, y, width, height } = req.body;

    const data = await readData();
    const i = parseInt(index);

    if (i < 0 || i >= data.template.length) {
        return res.status(404).json({ error: "Template não encontrado" });
    }

    data.template[i] = {
        name: name ?? data.template[i].name,
        description: description ?? data.template[i].description,
        x: x ?? data.template[i].x,
        y: y ?? data.template[i].y,
        width: width ?? data.template[i].width,
        height: height ?? data.template[i].height
    };

    await writeData(data);
    res.json(data.template[i]);
});

// DELETE /template/:index → remove um template
app.delete("/template/:index", async (req, res) => {
    const { index } = req.params;
    const data = await readData();
    const i = parseInt(index);

    if (i < 0 || i >= data.template.length) {
        return res.status(404).json({ error: "Template não encontrado" });
    }

    const removido = data.template.splice(i, 1);
    await writeData(data);
    res.json({ message: "Removido com sucesso", removido });
});

// Inicializa o servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
