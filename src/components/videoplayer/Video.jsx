import React, { useEffect, useRef, useState, forwardRef } from "react";
import { RiFileList2Line } from "react-icons/ri";
import { FaPlay, FaPause } from "react-icons/fa";
import { MdFullscreen, MdFullscreenExit } from "react-icons/md";
import { IoMdVolumeHigh } from "react-icons/io";
import { RiDropdownList } from "react-icons/ri";

import { TbPlayerSkipForward, TbPlayerSkipBack  } from "react-icons/tb";
import "./Video.css";

const VideoPlayer = forwardRef(({ episodioSelecionado, setLoading, exiteseason, handleListEpisodes, playNextVideo, setEpisodioSelecionado, temporadaAtual, setCurrentEpisodeIndex, handleListTemp }, ref) => {
  const handleVideoLoadedMedata = () => {
    setLoading(false);
    exiteseason()
  };

  const handleVideoError = () => {
    setLoading(false);
    exiteseason()
  };

  const videoRef = useRef();
  const progressBarRef = useRef(null);
  const [pointerPosition, setPointerPosition] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [videoSrc, setVideoSrc] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isVolume, setIsVolume] = useState(false);
  const [volume, setVolume] = useState(30);
  const [isControl, setIsControl] = useState(true);
  const timeoutRef = useRef(null);
  const [videoTitle, setVideoTitle] = useState(null);
  const [cursorr, setCursor] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const progressContainerRef = useRef(null);

  useEffect(() => {
    if (episodioSelecionado) {
      setVideoSrc(episodioSelecionado.episodePath);
      setVideoTitle(episodioSelecionado.episodeTitle);
    }
  }, [episodioSelecionado]);

  function handleTimeUpdate() {
    const videoElement = videoRef.current;
    if (videoElement && progressBarRef.current) {
      const time = videoElement.currentTime;
      setCurrentTime(time);
      setDuration(videoElement.duration);
      const percent = (time / videoElement.duration) * 100;
      progressBarRef.current.style.width = `${percent}%`;
      setPointerPosition(percent);
    }
  }

  function play() {
    if (videoRef.current) {
      setIsPlaying(true);
      videoRef.current.play();
      setIsControl(true); // Mostra os controles
      clearTimeout(timeoutRef.current); // Cancela o setTimeout para esconder os controles
      timeoutRef.current = setTimeout(() => {
        setIsControl(false); // Esconde os controles após 5 segundos
      }, 5000);
    }
  }

  function pause() {
    if (videoRef.current) {
      setIsPlaying(false);
      setIsControl(true); // Mantém os controles visíveis ao pausar
      videoRef.current.pause();
      clearTimeout(timeoutRef.current); // Cancela o setTimeout para esconder os controles
    }
  }

  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  }

  const videoDuration = formatTime(duration);
  const videoCurrentTime = formatTime(currentTime);

  function toggleFullscreen() {
    const videoContainer = videoRef.current.parentElement;

    if (!document.fullscreenElement) {
      if (videoContainer.requestFullscreen) {
        videoContainer.requestFullscreen();
      } else if (videoContainer.mozRequestFullScreen) {
        // Firefox
        videoContainer.mozRequestFullScreen();
      } else if (videoContainer.webkitRequestFullscreen) {
        // Chrome, Safari and Opera
        videoContainer.webkitRequestFullscreen();
      } else if (videoContainer.msRequestFullscreen) {
        // IE/Edge
        videoContainer.msRequestFullscreen();
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        // Firefox
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        // Chrome, Safari and Opera
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        // IE/Edge
        document.msExitFullscreen();
      }
      setIsFullscreen(false);
    }
  }

  function handleMouseMove() {
    setIsControl(true);
    clearTimeout(timeoutRef.current);
    setCursor(true);

    if (isPlaying) {
      timeoutRef.current = setTimeout(() => {
        setIsControl(false);
        setCursor(false);
      }, 5000);
    }
  }

  const adjustVolume = (value) => {
    if (value >= 0 && value <= 100) {
      setVolume(value);
      if (videoRef.current) {
        videoRef.current.volume = value / 100;
      }
    }
  };

  const handleVideoLoaded = () => {
    handleTimeUpdate();
    handleVideoLoadedMedata()
    handleVideoError()
    setLoading(false)
    play()
  };

  function handleMouseDown(e) {
    setIsDragging(true);
    handleMouseOrTouchMove(e); // Atualiza a posição imediatamente ao clicar
  }

  function handleMouseOrTouchMove(e) {
    if (!isDragging) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const progressContainer = progressContainerRef.current;
    const rect = progressContainer.getBoundingClientRect();
    const offsetX = clientX - rect.left;
    const newTime = (offsetX / rect.width) * videoRef.current.duration;
    videoRef.current.currentTime = newTime;
    setPointerPosition((newTime / videoRef.current.duration) * 100);
    progressBarRef.current.style.width = `${(offsetX / rect.width) * 100}%`;
  }

  function handleMouseUpOrTouchEnd() {
    setIsDragging(false);
  }

  async function playNextVideo() {
    setCurrentEpisodeIndex(prevIndex => {
      const nextIndex = prevIndex +1;

      if (nextIndex >= temporadaAtual.data.arquivo.length) {
        console.log("No more episodes to play.");
        return prevIndex;
      }

      const nextEpisode = temporadaAtual.data.arquivo[nextIndex];
      console.log(nextIndex)

      setEpisodioSelecionado(nextEpisode);


      return nextIndex;
    });
  }

  async function playNextVideoLeft() {
    setCurrentEpisodeIndex(prevIndex => {
      const nextIndex = prevIndex - 1;
  
      if (nextIndex < 0) {
        console.log("No more previous episodes to play.");
        return prevIndex;
      }
  
      const nextEpisode = temporadaAtual.data.arquivo[nextIndex];
      setEpisodioSelecionado(nextEpisode);
  
      return nextIndex;
    });
  }

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseOrTouchMove);
      window.addEventListener('mouseup', handleMouseUpOrTouchEnd);
      window.addEventListener('touchmove', handleMouseOrTouchMove);
      window.addEventListener('touchend', handleMouseUpOrTouchEnd);
    } else {
      window.removeEventListener('mousemove', handleMouseOrTouchMove);
      window.removeEventListener('mouseup', handleMouseUpOrTouchEnd);
      window.removeEventListener('touchmove', handleMouseOrTouchMove);
      window.removeEventListener('touchend', handleMouseUpOrTouchEnd);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseOrTouchMove);
      window.removeEventListener('mouseup', handleMouseUpOrTouchEnd);
      window.removeEventListener('touchmove', handleMouseOrTouchMove);
      window.removeEventListener('touchend', handleMouseUpOrTouchEnd);
    };
  }, [isDragging]);

  return (
    <div className="container-video" ref={ref}>
      <div className="content-video">
        {videoSrc && (
          <>
            <video
              key={videoSrc}
              src={videoSrc}
              ref={videoRef}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleVideoLoaded}
              onEnded={playNextVideo}
            >

            </video>

            <div className="container-controls"
              onMouseMove={handleMouseMove}
              onTouchMove={handleMouseOrTouchMove}
              style={
                { cursor: `${cursorr ? "auto" : "none"}` }}>
              {isControl && (
                <div className={`content-controls ${isControl ? "show" : ""}`}>
                  <div className="title-video">
                    <h4>{videoTitle}</h4>
                  </div>

                  <div className="controls-buttons">
                    <div className="button-play" style={{ display: 'flex', gap: '5px' }}>
                      <button onClick={playNextVideoLeft}>
                        <TbPlayerSkipBack size={15} />
                      </button>
                      {isPlaying ? (
                        <button onClick={pause}>
                          <FaPause />
                        </button>
                      ) : (
                        <button onClick={play}>
                          <FaPlay />
                        </button>
                      )}
                      <button >
                        <TbPlayerSkipForward size={15}  onClick={playNextVideo}/>
                      </button>
                    </div>

                    <div className="current-time">
                      <div className="progress-bar"
                        ref={progressContainerRef}>
                        <div className="progress"
                          ref={progressBarRef}
                          style={{ width: `${pointerPosition}%` }}>
                          <div
                            className="duration-pointer"
                            style={{ left: `calc(${pointerPosition}% - 23px)` }}
                            onMouseDown={handleMouseDown}
                            onTouchStart={handleMouseDown}
                          >
                            <span>{videoCurrentTime}</span>
                            <p></p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="buttons-actions">
                      <span>{videoDuration}</span>

                      <button onClick={() => setIsVolume(!isVolume)}>
                        <IoMdVolumeHigh size={15} />
                      </button>

                      {isVolume && (
                        <div className="container-volume">
                          <div className="volume">
                            <input
                              type="range"
                              min="0"
                              max="100"
                              value={volume}
                              onChange={(e) => adjustVolume(e.target.value)}
                            />
                          </div>
                        </div>
                      )}

                      <button onClick={toggleFullscreen}>
                        {isFullscreen ? (
                          <MdFullscreenExit size={15} />
                        ) : (
                          <MdFullscreen size={15} />
                        )}
                      </button>

                      <button className="button-episodios-video" onClick={handleListEpisodes}><RiFileList2Line size={15} /></button>
                      <button className="button-list-temp" onClick={handleListTemp}><RiDropdownList size={15} /></button>

                    </div>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
})
export default VideoPlayer;