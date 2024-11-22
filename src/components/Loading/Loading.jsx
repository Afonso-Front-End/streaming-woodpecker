import FetchMediaGallery from "../MediaGallery/Hooks/FetchMediaGallery";
import { ContainerLoadind } from "./style/Loading";

const Loading = () => {
    const { error, removeLoading } = FetchMediaGallery();

    return (
        <ContainerLoadind>
            {error ? (
                <p>{error}</p> 
            ) : (
                !removeLoading && <p>Carregando...</p> 
            )}
        </ContainerLoadind>
    );
};

export default Loading;
