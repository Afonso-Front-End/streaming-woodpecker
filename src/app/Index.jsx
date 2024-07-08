import { useState, useRef } from "react";
import Temporada from "../components/temporada/Temporada";
import Episodios from "../components/episodios/Episodios";
import VideoPlayer from "../components/videoplayer/Video";
import { CSSTransition } from "react-transition-group";

export default function Index() {
    const [temporadaSelecionada, setTemporadaSelecionada] = useState(null);
    const [episodioSelecionado, setEpisodioSelecionado] = useState(null);
    const [temporadaAtual, setTemporadaAtual] = useState(null)
    const [loading, setLoading] = useState(false)
    const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
    const [episodeActive, setEpisodeActive] = useState(null)
    const [listTemp, setListTemp] = useState(null)


    const nodeRef = useRef(null);

    

    function handleListEpisodes() {
        setTemporadaSelecionada(temporadaAtual)
    }

    function handleListTemp() {
        setListTemp(true)
    }

    function handleListTempExite() {
        setListTemp(null)
    }

    function selectSeason(index, data) {
        setTemporadaSelecionada({ index, data });
        setTemporadaAtual({ index, data })
    }
    function exiteseason() {
        setTemporadaSelecionada(null)
        setLoading(false)
    }

    return (
        <div className="container">
            <div className="content">
                {loading && (
                    <div className="container-loading">
                        <div className="loading">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                )}

                <div className="left">

                    <Temporada

                        setTemporadaSelecionada={setTemporadaSelecionada}
                        setLoading={setLoading}
                        setTemporadaAtual={setTemporadaAtual}
                        listTemp={listTemp}
                        handleListTempExite={handleListTempExite}
                        temporadaAtual={temporadaAtual}
                        temporadaSelecionada={temporadaSelecionada}
                        selectSeason={selectSeason}
                    />

                </div>

                <div className={`right ${episodioSelecionado ? 'right-show' : ''}`}>
                    <CSSTransition
                        in={!!episodioSelecionado}
                        timeout={300}
                        classNames="episodios"
                        unmountOnExit
                        nodeRef={nodeRef}

                    >
                        <VideoPlayer ref={nodeRef}
                            episodioSelecionado={episodioSelecionado}
                            exiteseason={exiteseason}
                            setLoading={setLoading}
                            setTemporadaSelecionada={setTemporadaSelecionada}
                            temporadaSelecionada={temporadaSelecionada}
                            temporadaAtual={temporadaAtual}
                            handleListEpisodes={handleListEpisodes}
                            setEpisodioSelecionado={setEpisodioSelecionado}
                            setCurrentEpisodeIndex={setCurrentEpisodeIndex}
                            handleListTemp={handleListTemp}
                            setEpisodeActive={setEpisodeActive}
                        />
                    </CSSTransition>
                </div>


                <CSSTransition
                    in={!!temporadaSelecionada}
                    timeout={300}
                    classNames="episodios"
                    unmountOnExit
                    nodeRef={nodeRef}
                >
                    <Episodios
                        ref={nodeRef}
                        temporada={temporadaSelecionada}
                        setEpisodioSelecionado={setEpisodioSelecionado}
                        exiteseason={exiteseason}
                        setLoading={setLoading}
                        setEpisodeActive={setEpisodeActive}
                        episodeActive={episodeActive}
                        episodioSelecionado={episodioSelecionado}
                        setListTemp={setListTemp}
                    />

                </CSSTransition>

            </div>
        </div>
    );
}
