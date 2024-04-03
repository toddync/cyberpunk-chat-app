import pb from "../pb";
import { useCallback, useState } from "react";
import useAddModalStore from "../store/addModalStore";
import Modal from "./Modal";
import ModalButton from "./ModalButton";
import ModalInput from "./ModalInput";

const AddModal = () => {
    const { show, destroy } = useAddModalStore((s) => ({
        show: s.show,
        destroy: s.updateDestroy,
    }));

    const [email, setEmail] = useState("");

    const add = useCallback(async () => {
        let r = await pb
            .collection("users")
            .getFirstListItem(`email="${email}"`, {
                add: "true",
            });

        console.log(r);

        if (r) {
            await pb.collection("users").update(pb.authStore.model.id, {
                "conversations+": [r.id],
            });
            destroy(true);
        }
    }, [email]);

    if (!show) return <></>;

    return (
        <Modal>
            <ModalInput
                type="email"
                name="email"
                change={(e) => {
                    setEmail(e.target.value);
                }}
                value={email}
                placeholder="user e-mail"
            />
            <ModalButton
                prompt="add"
                click={add}
            />
        </Modal>
    );
};

export default AddModal;
