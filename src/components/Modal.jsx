import { useEffect, useState } from "react";
import useAddModalStore from "../store/addModalStore";

const Modal = ({ children }) => {
    const [class_, setClass] = useState("login-container-open");
    const destroy = useAddModalStore((s) => s.destroy);
    const upDestroy = useAddModalStore((s) => s.updateDestroy);
    const show = useAddModalStore((s) => s.updateShow);

    useEffect(() => {
        destroy && setClass("login-container-close");
        destroy &&
            setTimeout(() => {
                show(false);
                upDestroy(false);
            }, 700);
    }, [destroy]);

    return (
        <div className="center-container modal">
            <div
                className={class_ + " modal"}
                data-augmented-ui>
                {children}
            </div>
        </div>
    );
};

export default Modal;
