import React, { useState } from "react";
import { ContainerControls, AreaControls, PlayOpacity, ContainerButton, AreaControlsLeft, AreaControlsRight } from "../style/VideoPlayer";
import PlayButton from "./PlayButton";
import PauseButton from "./PauseButton";

import ModallListTemp from "../../MediaGallery/components/ModallListTemp";
import FullscreenButton from "./FullScreenButton";
import ListEpisodios from "./ListEpisodios";


const VideoControls = ({ onPlay, onPause, onNext, onPrev, isPlaying, onToggleFullscreen, mediaCurrent, temporadas, setCurrentEpisode, currentEpisode }) => {

    return (
        <ContainerControls>
            <PlayOpacity >
                {isPlaying ? (
                    <PauseButton onPause={onPause} />
                ) : (
                    <PlayButton onPlay={onPlay} />
                )}
            </PlayOpacity>
            <AreaControls>
                <AreaControlsLeft>
                    {isPlaying ? (
                        <ContainerButton>
                            <PauseButton onPause={onPause} />
                        </ContainerButton>
                    ) : (
                        <ContainerButton>
                            <PlayButton onPlay={onPlay} />
                        </ContainerButton>
                    )}
                </AreaControlsLeft>
                <AreaControlsRight>

                    <ListEpisodios
                        currentEpisode={currentEpisode}
                        setCurrentEpisode={setCurrentEpisode}
                        mediaCurrent={mediaCurrent}
                        >
                    </ListEpisodios>

                    <FullscreenButton onToggleFullscreen={onToggleFullscreen} />
                </AreaControlsRight>
            </AreaControls>
        </ContainerControls>
    );
};

export default VideoControls;
