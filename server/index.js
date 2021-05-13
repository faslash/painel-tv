const express = require("express");
const app = express();
const cors = require("cors");
const server = require('http').createServer(app);
const io = require('socket.io')(server, { cors: { origin: "*" }});

app.use(express.json());
app.use(cors());

// Rotas
const senhaRouter = require("./routes/Senha");
app.use("/senhas", senhaRouter);

// WebSocket
server.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});

io.on('connection', (socket) => {
  console.log("Usuário Conectado:" + socket.id);

  socket.on("triagem", (data) => {
    socket.broadcast.emit('novaSenha', data);
  });

  socket.on("senha", (data) => {
    console.log(data);

    socket.broadcast.emit("chamarSenha", data);
  });

  socket.on("exames", (data) => {
    console.log(data);
  });

  socket.on("exame-andamento", (data) => {

  });
});
