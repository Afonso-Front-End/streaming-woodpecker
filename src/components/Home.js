import { useState } from 'react';
import imgEps from '../assets/img/Woody_Woodpecker_logo.webp';
import ConfigVideo from '../JS/configVideo';

export default function Home() {
    const [SELECTTEMPORADA, SETSELECTTEMPORADA] = useState(3)

    const {
        videoRef,
        playVideo,
        pauseVideo,
        progressBarRef,
        pointerPosition,
        videoDuration,
        videoCurrentTime,
        isPlayng,
        handlePointerMouseDown,
        handlePointerTouchStart,
        onTimeUpdate,
        DATA,
        handleTemporada,
        DATAEPISODIOS,
        handleEpisodio,
        videoUrl,
        tituloEpsiosio,
        EPISODIOSELECIONADO,
        SETEPISODIOSELECIONADO,
        handleMenuMobile,
        MENU,
        handleEnded,
        handleNext,
        handlePrev,
        handleNext5s,
        handlePrev5s
    } = ConfigVideo();


    return (
        <div id='container'>
            <div id='content'>
                <div className={`container-AreaTemp ${MENU ? 'active-container-AreaTemp' : ''}`}>
                    <div className={`content-AreaTemp ${MENU ? 'active-content-AreaTemp' : ''}`}>
                        <div className="woodPecker">
                            <span>WoodPecker</span>
                            <div className={`menu ${MENU ? 'active-menu' : ''}`} onClick={handleMenuMobile}>
                                <span className="material-symbols-outlined">
                                    stat_1
                                </span>
                            </div>
                        </div>
                        <div className='content-lista-temp'>
                            <ul className="lista-AreaTemp">
                                {DATA && DATA.map((TEMPORADA, index) => (
                                    <li className={index === SELECTTEMPORADA ? 'active-card' : 'card'} key={index} onClick={() => { handleTemporada(index); SETSELECTTEMPORADA(index) }}>
                                        <div className='card-img'>
                                            <img src={`${TEMPORADA.imagem}`} alt="Imagem da temporada"></img>
                                            {/* Revomver o link http://localhost:8080 pelos links reais, quando os arquivos forem hospedados 
                                        http://localhost:8080 */}
                                        </div>
                                        <div className='card-title'>
                                            <p>{TEMPORADA.title}</p>
                                        </div>
                                    </li>
                                ))}

                            </ul>
                        </div>
                        <div className='desenvolvedor'>
                            <span>Area do desenvolvedor</span>
                            <p>Este projeto ainda esta em desenvolvimento.</p>
                            <p>Banda larga limitada de ate 5GB</p>
                        </div>
                    </div>
                </div>
                <div className="container-AreaVideo">
                    <div className="container-episodios">
                        <div className="container-lista-episodios">
                            <ul className="lista-episodios">
                                {DATAEPISODIOS && DATAEPISODIOS.map((EPISODIO, index) => (
                                    <li className={index === EPISODIOSELECIONADO ? 'active-episodio' : 'episodio'} key={index} onClick={() => { handleEpisodio(index); SETEPISODIOSELECIONADO(index) }}>
                                        <div className="img-episodio">
                                            <img src={imgEps} alt='Imagem episodio' />
                                            <span></span>
                                        </div>
                                        <div className="titulo-episodio">
                                            <span>{EPISODIO.episodeTitle}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="content-AreaVideo">
                        <div className="container-video">
                            <div className="content-video">
                                <video id='video' key={videoUrl} ref={videoRef} onEnded={handleEnded} onTimeUpdate={onTimeUpdate}>
                                    <source src={`${videoUrl}`} />
                                    {/* Revomver o link http://localhost:8080 pelos links reais, quando os arquivos forem hospedados */}
                                </video>

                                <div className='controls'>
                                    <div className='name-episodio'>
                                        <span>{tituloEpsiosio}</span>
                                    </div>
                                    <div className='controls-play'>
                                        <div className='i' onClick={handlePrev5s}>
                                            <button id='voltar' onClick={handlePrev}>
                                                <span className="material-symbols-outlined">
                                                    skip_previous
                                                </span>
                                            </button>
                                        </div>
                                        <div>
                                            {isPlayng && (
                                                <button onClick={playVideo}>
                                                    <span className="material-symbols-outlined">
                                                        play_arrow
                                                    </span>
                                                </button>
                                            )}
                                            {!isPlayng && (
                                                <button onClick={pauseVideo}>
                                                    <span className="material-symbols-outlined">
                                                        pause
                                                    </span>
                                                </button>
                                            )}
                                        </div>
                                        <div className="i" onClick={handleNext5s}>
                                            <button id='proximo' onClick={handleNext}>
                                                <span className="material-symbols-outlined">
                                                    skip_next
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                    <div id='current-time'>
                                        <div className='duration'>
                                            <span>{videoCurrentTime}</span>
                                            /
                                            <span>{videoDuration}</span>
                                        </div>

                                        <div id="progress-bar" >
                                            <div id='progress' ref={progressBarRef} >
                                                <div id="pointer"
                                                    style={{ left: `${pointerPosition}%` }}
                                                    onMouseDown={handlePointerMouseDown} onTouchStart={handlePointerTouchStart}>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
