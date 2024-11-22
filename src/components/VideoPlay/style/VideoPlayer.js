import styled from "styled-components";

export const ContainerPlay = styled.div`
    width: 100%;
    height: 100dvh;
    background-color: black;
    position: relative;
`

export const AreaControls = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 1.5rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const ContentPlay = styled.div`
    width: 100%;
    height: 100dvh;
    background-color: black;
    overflow: hidden;
    position: relative;
`
export const Video = styled.video`
    background-color: black;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
`

export const Source = styled.source`
    background-color: black;
    width: 100%;
    height: 100%;
`

export const ContainerControls = styled.div`
   width: 100%;
   height: 100dvh;
   position: absolute;
   top: 0;
`


export const ContainerButton = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 30px;
   height: 30px;
`

export const Button = styled.button`
   background-color: transparent !important;
   border: none;
   width: 100%;
   height: 100%;
   cursor: pointer;
`

export const PlayOpacity = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0 !important;
    
`
export const AreaControlsLeft = styled.div`

    display: flex;
    align-items: center;

`
export const AreaControlsRight = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`
// Lista de episodios da tela do play

export  const ContainerListaEpisodios = styled.div`
    display: flex;
`

export  const Dropdown = styled.div`
    /* width: 100%;
    max-width: 700px; */
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 0px;
    bottom: 80px;
`

export const DropdownList = styled.ul`
    background-color: #222222;
    height: 50vh;
    width: 500px;
    overflow: auto;
    list-style: none;
    &::-webkit-scrollbar{
        width: 6px;
    }
    &::-webkit-scrollbar-thumb{
        background-color: gray;
    }
    box-shadow: 0 0 10px #222222;
`
export const DropdownListItem = styled.li`
    color: #D9D9D9;
    font-size: 22px;
    font-weight: 500;
    padding: 1.45rem 0.5rem;
    &:hover{
        background-color: #D9D9D9;
        color: black;
        cursor: pointer;
    }
`

