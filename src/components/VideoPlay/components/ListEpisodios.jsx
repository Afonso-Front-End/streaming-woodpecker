import { ContainerListaEpisodios, Dropdown, DropdownList, DropdownListItem, Button } from "../style/VideoPlayer"
import { BsCollectionPlay } from "react-icons/bs";
import { FaThList } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";


const ListEpisodios = ({ mediaCurrent, setCurrentEpisode }) => {
    const [isOpenLista, setIsOpenLista] = useState(false)
    const dropdownRef = useRef(null);


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpenLista && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpenLista(false);
            }
        };

        // Adiciona o evento de clique na janela
        window.addEventListener('mousedown', handleClickOutside);

        // Remove o evento ao desmontar o componente
        return () => {
            window.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpenLista]);

    const handleSelectEpisodeo = (item) => {
        console.log(item)
        setCurrentEpisode(item)
    }
    
    const handleListaEpisodios = () => {
        setIsOpenLista(!isOpenLista);
    }

    return (
        <ContainerListaEpisodios>
            <Button>
                <FaThList size={32} onClick={handleListaEpisodios} />
            </Button>
            <Dropdown ref={dropdownRef} >
                {isOpenLista && (
                    <DropdownList>
                        {mediaCurrent && mediaCurrent.arquivo.map((item, index) => (
                            <DropdownListItem key={index} onClick={() => handleSelectEpisodeo(item.episodePath)}>
                                <p>{item.id} {item.episodeTitle}</p>
                            </DropdownListItem>
                        ))}
                    </DropdownList>
                )}
            </Dropdown>
        </ContainerListaEpisodios>
    )
}
export default ListEpisodios;