import styled from "styled-components";

export const ContainerEmphasis = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const VideoEmphasis = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    
    &::after {
        content: "";
        display: block;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgb(0, 0, 0));
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }

    video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: relative;
        z-index: -1;
    }
`;
