import { useEffect, useState } from "react";

const Modal = ({ children, destroy, show }) => {
    const [class_, setClass] = useState("login-container-open");

    useEffect(() => {
        destroy && setClass("login-container-close");
        destroy &&
            setTimeout(() => {
                show(false);
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
