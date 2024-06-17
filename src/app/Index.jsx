import { useState, useRef } from "react";
import Temporada from "../components/temporada/Temporada";
import Episodios from "../components/episodios/Episodios";
import VideoPlayer from "../components/videoplayer/Video";
import { CSSTransition } from "react-transition-group";

export default function Index() {
    const [temporadaSelecionada, setTemporadaSelecionada] = useState(null);
    const [episodioSelecionado, setEpisodioSelecionado] = useState(null);
    const [temporadaAtual, setTemporadaAtual] = useState(null)
    const [loading, setLoading] = useState(true)

    const nodeRef = useRef(null);

    function exiteseason() {
        setTemporadaSelecionada(null)
        setLoading(false)
    }
    function list() {
        setTemporadaSelecionada(temporadaAtual)
        setEpisodioSelecionado(null)
        console.log(temporadaAtual)
    }
    // console.log("temp select",temporadaSelecionada)

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
                    <Temporada setTemporadaSelecionada={setTemporadaSelecionada} setLoading={setLoading} setTemporadaAtual={setTemporadaAtual} />
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
                            list={list}
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
                    />

                </CSSTransition>

            </div>
        </div>
    );
}
