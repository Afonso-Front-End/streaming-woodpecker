
import useVideoPlayer from "./Hooks/useVideoPlayer";
import { ContainerEmphasis, VideoEmphasis } from "./Style/EmphasisStyled";

const Emphasis = () => {
    const { videoRef } = useVideoPlayer();
    return (
        <ContainerEmphasis>
            <VideoEmphasis>
                <video
                    ref={videoRef}
                    muted >
                    <source
                        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                        type="video/mp4" />
                </video>
            </VideoEmphasis>
        </ContainerEmphasis>
    );
};

export default Emphasis;
