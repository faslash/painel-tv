import React from 'react';
import axios from 'axios';
import Clock from './clock';
import './index.css';
import logo from '../../assets/logo.png';
import { useEffect } from 'react';

export default function Index() {

    useEffect(() => {
        axios.get("http://localhost:3001/chamarSenha").then((response) => {
            console.log(response.data);
        })
    }, []);

    return(
        <div className="senha">
            <div className="box-tv">
                <iframe title="tv" width="100%" height="100%" src="chrome-extension://ckblfoghkjhaclegefojbgllenffajdc/player.html#https://manifest.googlevideo.com/api/manifest/hls_variant/expire/1617650783/ei/_w9rYK7fA4HUwgTttKfYCQ/ip/187.2.46.181/id/j4sSELJVueo.1/source/yt_live_broadcast/requiressl/yes/hfr/1/playlist_duration/30/manifest_duration/30/maudio/1/gcr/br/vprv/1/go/1/nvgoi/1/keepalive/yes/fexp/24001373%2C24007246/beids/9466588/dover/11/itag/0/playlist_type/DVR/sparams/expire%2Cei%2Cip%2Cid%2Csource%2Crequiressl%2Chfr%2Cplaylist_duration%2Cmanifest_duration%2Cmaudio%2Cgcr%2Cvprv%2Cgo%2Citag%2Cplaylist_type/sig/AOq0QJ8wRQIhAJ5A0k4-s4QhzRuDSkKaIfuTDtuivIL4pYXGxdmAPT_UAiAXAehqi7Pdw5tYHQ_BN5ODmD7F4R-fyTh52PhmDFvNaQ%3D%3D/file/index.m3u8"></iframe>
            </div>

            <div className="barra-lateral">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="senha-atual">
                    <h2>Senha Atual</h2>
                    <h1>S005</h1>
                </div>

                <div className="local">
                    <h2>Local</h2>
                    <h1>Guiche 1</h1>
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