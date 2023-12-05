import { useEffect, useRef, useState } from "react"

export default function GetApi() {

    const videoRef = useRef(null)
    const currentTimeRef = useRef(null)
    const progressBarRef = useRef(null);

    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [pointerPosition, setPointerPosition] = useState(0);
    const [isPlayng, setIsPlayng] = useState(true)

    const [DATA, SETDATA] = useState([])

    const [videoUrl, setVideoUrl] = useState(null)
    const [DATAEPISODIOS, SETDATAEPISODIOS] = useState([])
    const [tituloEpsiosio, setTituloEpisodio] = useState(null)
    const [EPISODIOSELECIONADO, SETEPISODIOSELECIONADO] = useState(0)

    const [MENU, SETMENU] = useState(false)
    const handleMenuMobile = () => {
        SETMENU(!MENU)
    }


    const DATA_BASE = "https://api-node-streaming.vercel.app"
    // const DATA_BASE = "http://localhost:8080"

    useEffect(() => {
        try {
            fetch(`${DATA_BASE}/api/videos`)
                .then((response) => response.json())
                .then((data) => {
                    SETDATA(data)
                    if (data.length > 0) {
                        SETDATAEPISODIOS(data[3].arquivo)
                        setVideoUrl(data[3].arquivo[0].episodePath)
                        setTituloEpisodio(data[3].arquivo[0].episodeTitle)
                    }
                })
        } catch (error) {
            console.log({ error: 'Erro ao recuperar dados da Api:' })
        }
    }, [])

    const handleTemporada = (index) => {
        SETDATAEPISODIOS(DATA[index].arquivo)
        SETEPISODIOSELECIONADO(null)
        setTimeout(() => {
            SETMENU(!MENU)
        }, 200)
    }

    const playVideo = () => {
        if (videoRef.current) {
            setIsPlayng(!isPlayng)
            videoRef.current.play()
        }
    }

    const pauseVideo = () => {
        if (videoRef.current) {
            setIsPlayng(!isPlayng)
            videoRef.current.pause()
        }
    }

    const handleEpisodio = (index) => {

        setVideoUrl(DATAEPISODIOS[index].episodePath)

        setTimeout(() => {
            setTituloEpisodio(DATAEPISODIOS[index].episodeTitle)
            playVideo()
            setIsPlayng(false)
            onTimeUpdate()
        }, 500)

    }

    const handleEnded = () => {
        if (currentTime >= duration - 2) {
            // O vídeo está perto do final, avance para o próximo episódio
            const nextEpisodeIndex = EPISODIOSELECIONADO + 1;
            if (nextEpisodeIndex < DATAEPISODIOS.length) {
                // Certifique-se de que há um próximo episódio
                SETEPISODIOSELECIONADO(nextEpisodeIndex);
                setVideoUrl(DATAEPISODIOS[nextEpisodeIndex].episodePath);
                setTituloEpisodio(DATAEPISODIOS[nextEpisodeIndex].episodeTitle);
                setTimeout(() => {  
                    playVideo()
                    setIsPlayng(false)
                }, 500);
            }
        }
    }
    
    const handleNext = () => {
        const proximoIndiceEpisodio = EPISODIOSELECIONADO + 1;
        if (proximoIndiceEpisodio < DATAEPISODIOS.length) {
            atualizarEstadoEpisodio(proximoIndiceEpisodio);
        }
    }
    
    const handlePrev = () => {
        const proximoIndiceEpisodio = EPISODIOSELECIONADO - 1;
        if (proximoIndiceEpisodio >= 0) {
            atualizarEstadoEpisodio(proximoIndiceEpisodio);
        }
    }
    
    const atualizarEstadoEpisodio = (indice) => {
        SETEPISODIOSELECIONADO(indice);
        setVideoUrl(DATAEPISODIOS[indice].episodePath);
        setTituloEpisodio(DATAEPISODIOS[indice].episodeTitle);
    
        setTimeout(() => {
            playVideo();
            setIsPlayng(false);
        }, 500);
    }
    

    const handlePointerMouseDown = (e) => {
        const progressBar = document.getElementById("progress-bar");
        const pointer = document.getElementById("pointer");

        const handleMouseMove = (e) => {
            const rect = progressBar.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const progress = (mouseX / rect.width) * 100;
            setPointerPosition(progress);

            pointer.style.left = `${progress}%`;

            const newTime = (progress / 100) * duration;
            videoRef.current.currentTime = newTime;
        };

        const handleMouseUp = () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
    };

    const handlePointerTouchStart = (e) => {
        const progressBar = document.getElementById("progress-bar");
        const pointer = document.getElementById("pointer");

        const handleTouchMove = (e) => {
            const rect = progressBar.getBoundingClientRect();
            const touchX = e.touches[0].clientX - rect.left;
            const progress = (touchX / rect.width) * 100;
            setPointerPosition(progress);

            pointer.style.left = `${progress}%`;

            const newTime = (progress / 100) * duration;
            videoRef.current.currentTime = newTime;
        };

        const handleTouchEnd = () => {
            window.removeEventListener("touchmove", handleTouchMove);
            window.removeEventListener("touchend", handleTouchEnd);
        };

        window.addEventListener("touchmove", handleTouchMove, { passive: false });
        window.addEventListener("touchend", handleTouchEnd, { passive: false });
    };

    const onTimeUpdate = () => {
        if (videoRef.current && videoUrl) {
            setDuration(videoRef.current.duration);
            const updateProgressBar = () => {
                if (videoRef.current && progressBarRef.current) {
                    const time = videoRef.current.currentTime;
                    const percent = (time / duration) * 100;
                    progressBarRef.current.style.width = `${percent}%`;
                    setPointerPosition(percent);
                    setCurrentTime(time);
                }
            };

            videoRef.current.addEventListener("timeupdate", updateProgressBar);

            return () => {
                if (videoRef.current) {
                    videoRef.current.removeEventListener("timeupdate", updateProgressBar);
                }
            };
        }
    }

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    const videoDuration = formatTime(duration);
    const videoCurrentTime = formatTime(currentTime);

    setTimeout(() => {
        onTimeUpdate()
    }, 500)

    window.addEventListener('resize', function() {
        if (window.innerWidth >= 1300) {
            SETMENU(false)
        }
    });
        
    return {
        videoUrl,
        videoRef,
        playVideo,
        pauseVideo,
        isPlayng,
        currentTimeRef,
        progressBarRef,
        currentTime,
        pointerPosition,
        videoDuration,
        videoCurrentTime,
        handlePointerMouseDown,
        handlePointerTouchStart,
        onTimeUpdate,
        DATA,
        handleTemporada,
        handleEpisodio,
        DATAEPISODIOS,
        tituloEpsiosio,
        EPISODIOSELECIONADO,
        SETEPISODIOSELECIONADO,
        handleMenuMobile,
        MENU,
        handleEnded,
        handleNext,
        handlePrev,
    }
}