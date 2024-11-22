import { PreviewModalWrapper } from "./../Style/MediaDetailsStyle"
const ModalWraper = ({ mediaCurrent, }) => {
    return (
        <PreviewModalWrapper
            style={{ backgroundImage: `url(${mediaCurrent.image})` }}>
        </PreviewModalWrapper>
    )
}
export default ModalWraper;