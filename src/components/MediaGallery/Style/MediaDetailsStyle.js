import styled from "styled-components";
// container modall
export const PreviewModalPlayerContainer = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    background:
        linear-gradient(80deg,
            rgba(0, 0, 0, 0.781),
            rgba(0, 0, 0, 0.74));
    overflow: auto;
    z-index: 999999;

    &::-webkit-scrollbar{
        display: none !important;
    }
`;
// content modall
export const PreviewModalPlayerContent = styled.div`
    width: 909.1px;
    max-width: 100%;
    min-height: 100%;
    background-color: #181818;
    margin: 0 auto;
    box-shadow: rgba(0, 0, 0, 0.301) 0px 3px 10px;
    margin-top: 30px;
    border-top-left-radius: 9px;
    border-top-right-radius: 9px;
    position: relative;
    overflow: hidden;
`;

// button closed modall
export const PreviewModalClosebtn = styled.button`
    display: flex;
    justify-content: center;
    cursor: pointer;
    background-color: #181818;
    border: none;
    padding: 0.3rem;
    transition: 300ms;
    border-radius: 3px;
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 9999;
    &:hover {
        background-color: #303030;
    }
`;

// previewModal wrapper
export const PreviewModalWrapper = styled.div`
    width: 100%;
    height: 46vh;
    position: relative;
    overflow: hidden;
    background-position: center;
    background-size: cover;
    object-fit: cover;
    
    &::after{
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        background: linear-gradient(0deg, #181818, transparent 100%);
        position: absolute;
        z-index: 1000;
        top: 0;
    }
`;


// info modall
export const PreviewModalInfo = styled.div`
    padding: 2rem 2rem;
`;

export const PreviewModalDetailsMetaData = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0rem 2rem;

    p {
        font-size: 14px;
        font-weight: 300;
        color: #C7C7C7;
        padding: 0.7rem 0;
    }
`;

export const PreviewModalDetailsMetaDataLeft = styled.div``;
export const PreviewModalDetailsMetaDataRight = styled.div``;

// Modall Temporada
export const ModallTemporada = styled.div`
    /* padding: 1.5rem 0rem 0.5rem 2rem; */
`;

export const ListaTemporada = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const SelectTemporada = styled.div`
    width: 200px;
    max-width: 100%;
    position: relative;
`;

export const SelectButtonTemporada = styled.button`
    width: 100%;
    padding: 10px;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    cursor: pointer;
    text-align: center;
    color: #000;
    font-family: "Poppins";
    font-weight: 500;
    
    &::after{
        content: '';
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
    }
`;

export const Dropdown = styled.div`
    position: absolute;
    width: 100%;
    top: 100%;
    left: 0;
    background-color: #fff;
    border: 1px solid #ccc;
    z-index: 10;

`;
    

export const DropdownButtonItem = styled.button`
    padding: 10px;
    width: 100%;
    text-align: center;
    border: none;
    background-color: white;
    cursor: pointer;
    border-bottom: 1px solid #f0f0f0;
    color: #000;
    font-family: "Poppins";
    &:hover{
        background-color: #f0f0f0;
    }
`;

// lista de episodios
export const EpisodeSelectorContainer = styled.ul`
    height: 100%;
    display: flex;
    flex-direction: column;
    /* overflow: auto; */
`;

export const EpisodeSelectorCard = styled.li`
    width: 100%;
    padding: 2rem 2rem;
    gap: 10px;
    border-radius: 4px;
    cursor: pointer !important;
    margin: 5px;
    display: flex;
    position: relative;
    overflow: hidden;
`;

export const EpisodeSelectorCardWraper = styled.div`
   position: relative;
`;

export const CardWraper = styled.div`
    width: 140px;
    height: 85px;
    background-position: center;
    background-size: cover;
    object-fit: cover;
`;

export const CardId = styled.span`
    position: absolute;
    top: 0;
    padding: 0rem 0.5rem;
`;

export const EpisodeSelectorCardMetaDataDetails = styled.div` `;

export const EpisodeSelectorCardMetaDataDetailsTitle = styled.div`
    display: flex;
    align-items: center;
    
    h1 {
        font-weight: 500;
        font-size: 15px;
    }
    
    p {
        font-size: 15px;
        font-weight: 300;
        color: #C7C7C7;
    }
    `;

export const EpisodeSelectorCardMetaDataDetailsSinope = styled.div` 
    p {
        font-size: 14px;
        font-weight: 300;
        color: #C7C7C7;
        padding: 0.5rem 0;
    }
`;

export const EpisodeSelectorCardMetaDataDetailsNota = styled.div` 
    p {
        font-size: 14px;
        font-weight: 200;
        color: #C7C7C7;
        padding: 0.7rem 0;
    }
`;



