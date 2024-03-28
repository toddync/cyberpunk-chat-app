import "./css/LogIn_SignUp.css";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./components/Modal";
import ModalInput from "./components/ModalInput";
import ModalButton from "./components/ModalButton";

const SignUp = () => {
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        username: "",
        email: "",
        password: "",
        passwordConfirm: "",
        emailVisibility: true,
    });

    const change = useCallback((e) =>
        setCredentials((s) => ({ ...s, [e.target.name]: e.target.value }))
    );

    const sign = useCallback(() => {}, [credentials]);

    return (
        <Modal>
            <ModalInput
                type="email"
                name="email"
                value={credentials.email}
                change={change}
                placeholder="e-mail"
            />
            <ModalInput
                type="text"
                name="username"
                value={credentials.username}
                change={change}
                placeholder="username"
            />
            <ModalInput
                type="password"
                name="password"
                value={credentials.password}
                change={change}
                placeholder="password"
            />
            <ModalInput
                type="password"
                name="passwordConfirm"
                change={change}
                value={credentials.passwordConfirm}
                placeholder="confirm password"
            />
            <ModalButton prompt="Sign up" />
            <ModalButton
                prompt="Log in"
                click={() => navigate("/LogIn", { replace: true })}
                alt
            />
        </Modal>
    );
};

export default SignUp;
