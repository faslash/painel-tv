import React from "react";
import Clock from "./clock";
import "./index.css";
import io from "socket.io-client";
import axios from "axios";
import UIfx from 'uifx';
import logo from "../../assets/logo.png";
import campainha from '../../assets/campainha.wav';
import { useEffect, useState } from "react";

let socket;
const CONNECTION_PORT = "192.168.0.190:3001/";


export default function Index() {
  const [senhaAtual, setSenhaAtual] = useState("-");
  const [localAtual, setLocalAtual] = useState("Guiche 1");
  const [visible, setVisible] = useState(false);

  const beep = new UIfx(
    campainha,
    {
      volume: 1, // number between 0.0 ~ 1.0
      throttleMs: 100
    }
  );
  
  const piscarSenha = () => {
    const piscar = visible !== false ? visible = false : visible = true;
    
    setVisible(piscar);
  }

  useEffect(() => {
    axios.get("http://localhost:3001/senhas").then((response) => {
      const arr = [];
      Object.keys(response.data).forEach((key) =>
        arr.push({ name: key, value: response.data[key] })
      );
    });

    socket = io(CONNECTION_PORT);
    socket.on("connect", function () {
      console.log("Conectado com o servidor!");
      socket.on("disconnect", function () {
        console.log("disconnected: ", socket);
      });
    });

    socket.on("chamarSenha", (data) => {
      setSenhaAtual(data["senha_atual"]);
      setLocalAtual(data["local"]);
      piscarSenha();
      beep.play()
    });
    
  }, []);


  return (
    <div className="senha">
      <div className="box-tv">
        <iframe
          title="tv"
          width="100%"
          height="100%"
          src="chrome-extension://ckblfoghkjhaclegefojbgllenffajdc/player.html#https://manifest.googlevideo.com/api/manifest/hls_variant/expire/1617650783/ei/_w9rYK7fA4HUwgTttKfYCQ/ip/187.2.46.181/id/j4sSELJVueo.1/source/yt_live_broadcast/requiressl/yes/hfr/1/playlist_duration/30/manifest_duration/30/maudio/1/gcr/br/vprv/1/go/1/nvgoi/1/keepalive/yes/fexp/24001373%2C24007246/beids/9466588/dover/11/itag/0/playlist_type/DVR/sparams/expire%2Cei%2Cip%2Cid%2Csource%2Crequiressl%2Chfr%2Cplaylist_duration%2Cmanifest_duration%2Cmaudio%2Cgcr%2Cvprv%2Cgo%2Citag%2Cplaylist_type/sig/AOq0QJ8wRQIhAJ5A0k4-s4QhzRuDSkKaIfuTDtuivIL4pYXGxdmAPT_UAiAXAehqi7Pdw5tYHQ_BN5ODmD7F4R-fyTh52PhmDFvNaQ%3D%3D/file/index.m3u8"
        ></iframe>
      </div>

      <div className="barra-lateral">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="senha-atual">
          <h2>Senha Atual</h2>
          <h1 className={visible ? 'blinking' : 'atual'}>{senhaAtual}</h1>
        </div>

        <div className="local">
          <h2>Local</h2>
          <h1>{localAtual}</h1>
        </div>

        <div className="relogio">
          <Clock clock="ClockData"></Clock>
        </div>
      </div>

      <div className="barra-inferior">
        <div className="senhas-anteriores">
          
          <div className="s1">
            <h1>S004</h1>
          </div>

          <div className="s2">
            <h1>S003</h1>
          </div>

          <div className="s3">
            <h1>S002</h1>
          </div>

          <div className="s4">
            <h1>S001</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
