import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import "./Temporada.css";

const urlbase = "https://api-node-streaming.vercel.app";

export default function Temporada({ setTemporadaSelecionada, setLoading, setTemporadaAtual, listTemp, handleListTempExite, selectSeason}) {
    const [seasonListState, setSeasonListState] = useState([]);

    const handleImageLoaded = () => {
        setLoading(false);
    };

    const handleImageError = () => {
        setLoading(false);
    };

    useEffect(() => {
        async function fetchSeasonList() {
            try {
                const response = await axios.get(`${urlbase}/api/videos`);
                if (response.status === 200) {
                    setSeasonListState(response.data);

                } else {
                    console.log("Algo aconteceu", response);
                }
            } catch (error) {
                console.log("Error", error);
            } finally {
                setLoading(true)
            }
        }

        fetchSeasonList();
    }, []);

    return (


        <div className={`container-temporada ${listTemp ? "container-temporada-active" : ""}`}>
            <div className="content-temporada">
                {listTemp && (
                    <div className="topo-list">
                        <button className="button-list-temp" onClick={handleListTempExite}><AiOutlineClose size={30} /></button>
                    </div>
                )}
                <div className="lista-temporada">
                    <ul className="ul-lista">
                        {seasonListState.map((item, index) => (
                            <li className="li-card" key={index} onClick={() => selectSeason(index, item)}>
                                <div className="li-card-img">
                                    <img
                                        src={item.imagem}
                                        alt="Season Thumbnail"
                                        onLoad={handleImageLoaded}
                                        onError={handleImageError} />
                                </div>
                                <div className="li-card-title">
                                    <p>{item.title}</p>
                                    <p>{item.database}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

    );
}
