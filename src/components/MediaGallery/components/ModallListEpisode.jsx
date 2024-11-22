import { useState } from "react";
import {
    EpisodeSelectorContainer,
    EpisodeSelectorCard,
    EpisodeSelectorCardWraper,
    CardWraper,
    CardId,
    EpisodeSelectorCardMetaDataDetails,
    EpisodeSelectorCardMetaDataDetailsTitle,
    EpisodeSelectorCardMetaDataDetailsSinope,
    EpisodeSelectorCardMetaDataDetailsNota
} from "../Style/MediaDetailsStyle";
import { CiCalendarDate } from "react-icons/ci";
import { Link } from "react-router-dom";

const ModallListEpisode = ({ mediaCurrent, temporadas }) => {
    
    return (
        <EpisodeSelectorContainer>
            {mediaCurrent && mediaCurrent.arquivo.map((item, index) => (
                <Link 
                    to={`/video/${item.id}/${encodeURIComponent(item.episodeTitle)}`}
                    key={index} 
                    state={{ item, temporadas , mediaCurrent}}
                
                >
                    <EpisodeSelectorCard>
                        <EpisodeSelectorCardWraper>
                            <CardWraper style={{ backgroundImage: `url(${mediaCurrent.imagem})` }} />
                            <CardId>{item.id}</CardId>
                        </EpisodeSelectorCardWraper>

                        <EpisodeSelectorCardMetaDataDetails>
                            <EpisodeSelectorCardMetaDataDetailsTitle>
                                <h1>{item.episodeTitle}</h1>
                                <CiCalendarDate size={20} />
                                <p>{item.episodeData}</p>
                            </EpisodeSelectorCardMetaDataDetailsTitle>

                            <EpisodeSelectorCardMetaDataDetailsSinope>
                                <p>Sinope: {item.episodeDescription}</p>
                            </EpisodeSelectorCardMetaDataDetailsSinope>

                            <EpisodeSelectorCardMetaDataDetailsNota></EpisodeSelectorCardMetaDataDetailsNota>
                        </EpisodeSelectorCardMetaDataDetails>
                    </EpisodeSelectorCard>
                </Link>
            ))}
        </EpisodeSelectorContainer>
    );
};

export default ModallListEpisode;
