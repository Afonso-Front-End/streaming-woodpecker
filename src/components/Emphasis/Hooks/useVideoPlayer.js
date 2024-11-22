// useVideoPlayer.js
import { useRef, useEffect } from "react";

const useVideoPlayer = () => {
    const videoRef = useRef(null);
    const savedTime = useRef(0);

    useEffect(() => {
        const video = videoRef.current;

        const handleEnded = () => {
            savedTime.current = 0;
        };

        if (video) {
            const playVideo = async () => {
                try {
                    await video.play();
                }catch(error){
                    console.log("deu erro aque oooooo, na reproducao do video emphasis cath " ,error)
                }
            };
            video.currentTime = savedTime.current;
            video.addEventListener('ended', handleEnded);
            playVideo()
        }

        return () => {
            if (video) {
                savedTime.current = video.currentTime;
                video.pause();
                video.removeEventListener('ended', handleEnded);
            }
        };
    }, []);

    return { videoRef };
};

export default useVideoPlayer;
