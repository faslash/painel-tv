import React from 'react';
import Clock from './clock';
import './index.css';

export default () => {
    return(
        <div className="senha">
            <div className="box-tv">
                <iframe title="tv" width="100%" height="100%" src="chrome-extension://ckblfoghkjhaclegefojbgllenffajdc/player.html#https://manifest.googlevideo.com/api/manifest/hls_variant/expire/1617425969/ei/0aFnYL3AJ5qa1sQP-qewiAU/ip/131.72.203.195/id/CVGjhpUxRzg.1/source/yt_live_broadcast/requiressl/yes/hfr/1/playlist_duration/30/manifest_duration/30/maxh/2160/maudio/1/vprv/1/go/1/nvgoi/1/keepalive/yes/fexp/24001373%2C24007246/dover/11/itag/0/playlist_type/DVR/sparams/expire%2Cei%2Cip%2Cid%2Csource%2Crequiressl%2Chfr%2Cplaylist_duration%2Cmanifest_duration%2Cmaxh%2Cmaudio%2Cvprv%2Cgo%2Citag%2Cplaylist_type/sig/AOq0QJ8wRAIgOz3Pv5v6QMBJb3W4bs7txJl9yt-oBFWwyiwnbScGiZQCIDyAxo3kVmcwzXHUDX7xabgIYDM261Xg4DQ4aCMVj3Ty/file/index.m3u8"></iframe>
            </div>

            <div className="barra-lateral">
                <div className="senha-atual">
                    <h2>Senha Atual</h2>
                    <h1>S005</h1>
                </div>

                <Clock clock="ClockData"></Clock>
            
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