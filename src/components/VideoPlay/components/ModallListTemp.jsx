import { useState } from "react";
import { ModallTemporada, ListaTemporada, SelectTemporada, SelectButtonTemporada, Dropdown, DropdownButtonItem } from "../Style/MediaDetailsStyle"
const ModallListTemp = ({ mediaCurrent, onTemporadaSelect, newMediaCurrent }) => {
    const [isVisibleList, setVisibleLista] = useState(false)

    const activeMedia = mediaCurrent || newMediaCurrent;

    const AbrirListaTemporada = () => {
        if (!isVisibleList) {
            setVisibleLista(true)
        } else {
            setVisibleLista(false)
        }
    }

    const SelecionarTemporada = (temporada) => {
        setVisibleLista(false)
        onTemporadaSelect(temporada);
    }

    console.log(activeMedia)

    return (
        <ModallTemporada>
            <ListaTemporada>
                {/* <h5>Episódios</h5> */}
                <SelectTemporada>
                    <SelectButtonTemporada onClick={AbrirListaTemporada}>Selecionar Temporada</SelectButtonTemporada>
                    {isVisibleList && (
                        <Dropdown>
                            {/* Verifica se activeMedia não está vazio antes de renderizar as temporadas */}
                            {activeMedia && activeMedia.temporadas.map((item, index) => (
                                <DropdownButtonItem key={index} onClick={() => SelecionarTemporada(item)}>
                                    {item.title}
                                </DropdownButtonItem>
                            ))}
                        </Dropdown>
                    )}
                </SelectTemporada>
            </ListaTemporada>
        </ModallTemporada>
    )
}
export default ModallListTemp;