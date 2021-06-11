const express = require("express");
const app = express();
const cors = require("cors");
const server = require('http').createServer(app);
const io = require('socket.io')(server, { cors: { origin: "*" }});
const dotenv = require('dotenv')

dotenv.config({ path: "./.env" });

app.use(express.json());
app.use(cors());

// Rotas
const senhaRouter = require("./routes/Senha");
app.use("/senhas", senhaRouter);

// WebSocket
server.listen(process.env.PORT, process.env.HOST, () => {
  console.log("Servidor rodando na porta " + process.env.PORT);
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

  socket.on("visualizando", (data) => {

    console.log('Visualizando' + data);
    
    socket.broadcast.emit("atualizarVisualizacao", data);
  });

  socket.on("descartar", (data) => {
    socket.broadcast.emit("descartarSenha", data);
  });

  socket.on("exames", (data) => {
    console.log(data);

    socket.broadcast.emit("novos-exames", data);
  });

  socket.on("exame-andamento", (data) => {
    socket.broadcast.emit("atualiza-exame", data);
  });

  socket.on("finaliza-exame", (data) => {
    socket.broadcast.emit("finalizar-exame", data);
  });
});
