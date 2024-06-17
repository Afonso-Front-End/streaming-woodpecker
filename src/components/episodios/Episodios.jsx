import React, { forwardRef, useState } from "react";
import "./Episodios.css";
import { AiOutlineClose } from "react-icons/ai";
import img from '../../assets/react-js.png';
import { CiCalendarDate } from "react-icons/ci";

const Episodios = forwardRef(({ temporada, exiteseason, setEpisodioSelecionado, setLoading }, ref) => {
    if (!temporada) {
        return null;
    }

    function selectepisode(episode, data) {
        setEpisodioSelecionado(episode, data);
        setLoading(true)
    }


    return (

        <div className="container-episodios" ref={ref}>
            <div className="content-episodios">
                <div className="banner-temp" style={{ backgroundImage: `url(${temporada.data.imagem})` }}>
                    <div className="banner-gradient"></div>
                    <button id="exite-season" onClick={exiteseason}>
                        <AiOutlineClose size={30} />
                    </button>
                </div>

                <div className="banner-title">
                    <h1>{temporada.data.title}<span>L</span></h1>
                    <h4 >{temporada.data.database} </h4>
                    <span style={{ color: "#148C54", fontWeight: "500" }}>Autor {temporada.data.autor}</span>
                </div>

                <div className="list-episodes">
                    <div className="list-title">
                        <h5>Episódios {temporada.data.arquivo.length}</h5>
                        <span>L</span>
                    </div>
                    <ul>
                        {temporada && temporada.data.arquivo.map((item) => (
                            <li key={item.episodeNumber} onClick={() => selectepisode(item, item.data)}>
                                <div className="id-episode"><span>{item.episodeNumber}</span></div>
                                <div className="content-img-episode" >
                                    <div className="img-episode" style={{ backgroundImage: `url(${img})` }}></div>
                                </div>
                                <div className="info-episode">
                                    <h3>{item.episodeTitle} <span style={{ fontWeight: "700" }}><CiCalendarDate size={20} /> {item.episodeData}</span></h3>
                                    <h5>Sinopse: {item.episodeDescription}</h5>
                                    <p style={{ fontWeight: "500" }}>{item.nota}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
});

export default Episodios;

