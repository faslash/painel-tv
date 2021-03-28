import React from 'react';
import './index.css';

export default props => {
    return(
        <div className="senha">
            <div className="box-tv">
                <video width="100%" height="100%" src="https://manifest.googlevideo.com/api/manifest/hls_variant/expire/1614497597/ei/3fI6YJevNZS65gS87pYw/ip/138.121.63.19/id/skaCREeM5EA.1/source/yt_live_broadcast/requiressl/yes/tx/23722138/txs/23722138%2C23722139/hfr/1/playlist_duration/30/manifest_duration/30/maudio/1/vprv/1/go/1/nvgoi/1/keepalive/yes/dover/11/itag/0/playlist_type/DVR/sparams/expire%2Cei%2Cip%2Cid%2Csource%2Crequiressl%2Ctx%2Ctxs%2Chfr%2Cplaylist_duration%2Cmanifest_duration%2Cmaudio%2Cvprv%2Cgo%2Citag%2Cplaylist_type/sig/AOq0QJ8wRAIgR3uWbws6YPRDqizd5L9bfpxaIdoEN34z9Rc52W1xPHgCICu0Mn4nTChZwk485KzsRPr2cQ0shSSm8n7UYqSZaFXG/file/index.m3u8" controls autoplay></video>
            </div>

            <div className="barra-lateral">
                    <div className="senha-atual">
                    <h2>Senha Atual</h2>
                    <h1>S001</h1>
                </div>

            
            </div>
            
        </div>
    );
}