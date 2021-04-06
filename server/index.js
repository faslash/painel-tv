const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

// Rotas
const senhaRouter = require("./routes/Senhas");
app.use("/chamarSenha", senhaRouter);

app.listen(3001, () => {
    console.log("Servidor rodando na porta 3001");
})

