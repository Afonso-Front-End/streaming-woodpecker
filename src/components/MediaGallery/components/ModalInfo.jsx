import { PreviewModalDetailsMetaData, PreviewModalDetailsMetaDataLeft, PreviewModalDetailsMetaDataRight } from "../Style/MediaDetailsStyle"
const ModalInfo = ({ mediaCurrent,dataInfo }) => {
    return (
        <PreviewModalDetailsMetaData>
            <PreviewModalDetailsMetaDataLeft>
                <h1>{dataInfo.titulo}</h1>
                <p>{mediaCurrent.title}</p>
                <p>{mediaCurrent.database} </p>

            </PreviewModalDetailsMetaDataLeft>
            <PreviewModalDetailsMetaDataRight>
                <p>Genero{mediaCurrent.genero}</p>
                <h3>Autor {mediaCurrent.autor}</h3>
            </PreviewModalDetailsMetaDataRight>
        </PreviewModalDetailsMetaData>
    )
}

export default ModalInfo;