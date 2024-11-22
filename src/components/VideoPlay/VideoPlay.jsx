import { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ContainerPlay, ContentPlay, Video, Source } from "./style/VideoPlayer";

import VideoControls from "../VideoPlay/components/VideoControls";
import useVideoPlay from "../VideoPlay/hook/useVideoPlayer";
const VideoPlay = () => {
    const { videoRef, setCurrentEpisode, currentEpisode, isPlaying, handlePlay, handlePause, handleToggleFullscreen, temporadas, mediaCurrent, } = useVideoPlay()
    return (
        <ContainerPlay>
            <ContentPlay>
                <Video ref={videoRef}>
                    <Source src={currentEpisode} />
                </Video>
                <VideoControls
                    onPlay={handlePlay}
                    onPause={handlePause}
                    // onNext={handleNext}
                    // onPrev={handlePrev}
                    onToggleFullscreen={handleToggleFullscreen}
                    isPlaying={isPlaying}
                    temporadas={temporadas}
                    mediaCurrent={mediaCurrent}
                    currentEpisode={currentEpisode}
                    setCurrentEpisode={setCurrentEpisode}
                />

            </ContentPlay>
        </ContainerPlay>
    )
}
export default VideoPlay;