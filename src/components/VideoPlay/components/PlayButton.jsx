import React from "react";
import { IoMdPlay } from "react-icons/io";
import { Button } from "../style/VideoPlayer";
const PlayButton = ({ onPlay }) => {
    return (
        <Button onClick={onPlay} aria-label="Play">
            <IoMdPlay size={40} />
        </Button>
    );
};

export default PlayButton;
