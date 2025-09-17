const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Rota teste
app.get("/", (req, res) => {
  res.send("API do Orça+ funcionando 🚀");
});

app.listen(5000, () => {
  console.log("Servidor rodando na porta 5000");
});
