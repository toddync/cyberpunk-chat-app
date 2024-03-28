import useAddModalStore from "../store/addModalStore";

const AddModal = () => {
    const show = useAddModalStore((s) => s.show);
    if (!show) return <></>;

    return (
        <Modal
        // destroy={destroy}
        // show={setShowModal}
        >
            <ModalInput
                type="email"
                name="email"
                placeholder="user e-mail"
            />
            <ModalButton prompt="add" />
        </Modal>
    );
};

export default AddModal;
