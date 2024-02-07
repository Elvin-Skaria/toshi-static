
import { Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody } from "@chakra-ui/react";

interface VideoModalProps {
    videoSrc: string;
    openModal: boolean;
    closeModal: () => void;
}

const VideoModal = (props: VideoModalProps) => {
    const { videoSrc, openModal, closeModal } = props;

    return (
        <Modal isOpen={openModal} onClose={closeModal} size={'5xl'}>
            <ModalOverlay />
            <ModalContent>
                <ModalCloseButton color={'white'} />
                <ModalBody>
                    <iframe
                        width="980"
                        height="600"
                        src="https://www.youtube.com/embed/k001JX-D-dA?si=F72nPMWR8hv1waB6&amp;controls=0"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    ></iframe>
                </ModalBody>
            </ModalContent>
        </Modal >
    );
};

export default VideoModal;
