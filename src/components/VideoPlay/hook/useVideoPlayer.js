import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const useVideoPlay = () => {
    const videoRef = useRef(null)
    const location = useLocation();
    const { item, temporadas, mediaCurrent } = location.state || {};
    const video = item?.episodePath
    const [currentEpisode, setCurrentEpisode] = useState(video);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        var playPromise = videoRef.current.play();

        if (playPromise !== undefined) {
            playPromise.then(_ => {
                videoRef.current.src = currentEpisode;
                setIsPlaying(true);
                videoRef.current.play();
            })
                .catch(error => {
                    console.log(error)
                });
        }
    }, [currentEpisode]);

    const handlePlay = () => {
        videoRef.current.play();
        setIsPlaying(true);
    };

    const handlePause = () => {
        videoRef.current.pause();
        setIsPlaying(false);
    };

    const handleToggleFullscreen = () => {

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
            //   setIsFullscreen(true);
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
            //   setIsFullscreen(false);
        }
    };

    return {
        videoRef,
        currentEpisode,
        setCurrentEpisode,
        handlePlay,
        isPlaying,
        handlePause,
        handleToggleFullscreen,
        temporadas,
        mediaCurrent,
    }
}

export default useVideoPlay;