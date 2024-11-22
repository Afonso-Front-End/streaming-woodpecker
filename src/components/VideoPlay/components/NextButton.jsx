import React from "react";

const NextButton = ({ onNext }) => {
    return (
        <button onClick={onNext} aria-label="Next">
            Next
        </button>
    );
};

export default NextButton;
