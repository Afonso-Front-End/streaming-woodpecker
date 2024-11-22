import styled from "styled-components";

export const ContainerMediaGallery = styled.div`
    width: 100%;
    background:
        linear-gradient(to bottom,
            rgba(0, 0, 0, 0),
            rgb(0, 0, 0));
    overflow: hidden;
    position: absolute;
    top: 58vh;
`;

export const SliderWrapper = styled.div`
    padding: 2vw;
`;


export const Genero = styled.div`
    font-size: 15px;

`;

export const Slider = styled.div`
    display: flex;
    transition: transform 0.3s ease-in-out;
    position: relative;
    gap: 15px;
`;

export const SliderContent = styled.div`
    
`;

export const Card = styled.div`
    min-width: 275px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background-color: rgb(0, 0, 0);
    border-radius: 4px;
    color: #fdfdfdab;
    cursor: pointer;
`;

export const ImgCard = styled.img`
    width: 100%;
    height: 180px;
    img {
        width: 100%;
    }
`;

export const Title = styled.h3`
    font-size: 15px;
    padding: 0.5rem 0;
`;

export const Paragrafo = styled.p`
   font-size: 15px;
   padding: 0.7rem 0;
`;