import { ContainerMediaGallery, SliderWrapper, Genero, Title, Slider, SliderContent, Card, ImgCard, Paragrafo } from "./Style/MediaGalleryStyle";
import { CSSTransition } from "react-transition-group";

import FetchMediaGallery from "./Hooks/FetchMediaGallery";
import Loading from "../Loading/Loading";
import MediaDetails from "./MediaDetails";
import { useRef, useState } from "react";

const MediaGallery = () => {    
    const nodeRef = useRef(null);
    const { data, removeLoading } = FetchMediaGallery();
    const [isMediaDetailsVisibleModal, setMediaDetailsVisibleModal] = useState(false);
    const [mediaCurrent, setMediaCurret] = useState([]);

    const viewDetails = (item) => {
        setMediaCurret(item);
        setMediaDetailsVisibleModal(true);
    };


    return (
        <ContainerMediaGallery>
            {data.length > 0 &&
                data.map((item, index) => (
                    <SliderWrapper key={index}>
                        <Genero>
                            <Paragrafo>{item.genero}</Paragrafo>
                        </Genero>

                        <SliderContent>
                            <Title>Series</Title>
                            <Slider>
                                {item.series.length > 0 ? (
                                    item.series.map((media, mediaIndex) => (
                                        <Card key={mediaIndex} onClick={() => viewDetails(media)}>
                                            <ImgCard src={media.image} alt="" />
                                        </Card>
                                    ))
                                ) : (
                                    <Paragrafo>Nada a exibir.</Paragrafo>
                                )}
                            </Slider>
                        </SliderContent>

                        <SliderContent>
                            <Title>Filmes</Title>
                            <Slider>
                                {item.filmes.length > 0 ? (
                                    item.filmes.map((filme, filmeIndex) => (
                                        <Card key={filmeIndex} onClick={() => viewDetails(filme)}>
                                            <ImgCard src={filme.image} alt="" />
                                        </Card>
                                    ))
                                ) : (
                                    <Paragrafo>Nada a exibir.</Paragrafo>
                                )}
                            </Slider>
                        </SliderContent>
                    </SliderWrapper>
                ))}
            {!removeLoading && <Loading />}

            <CSSTransition
                in={isMediaDetailsVisibleModal}
                timeout={300}
                classNames="episodios"
                unmountOnExit
                nodeRef={nodeRef}
            >
                <MediaDetails
                    setMediaDetailsVisibleModal={setMediaDetailsVisibleModal}
                    setMediaCurret={setMediaCurret}
                    mediaCurrent={mediaCurrent}
                    ref={nodeRef}
                    data={data}
                />
            </CSSTransition>
        </ContainerMediaGallery>
    );
};

export default MediaGallery;
