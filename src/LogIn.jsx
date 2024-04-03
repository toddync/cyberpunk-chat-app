import "./css/LogIn_SignUp.css";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import pb from "./pb";
import useUserStore from "./store/userStore";

const LogIn = () => {
    const { user, update } = useUserStore();
    pb.authStore.onChange(() => update(pb.authStore.model));

    const [credentials, setCredentials] = useState({
        identity: "",
        password: "",
    });
    const change = useCallback((e) =>
        setCredentials((s) => ({ ...s, [e.target.name]: e.target.value }))
    );

    const log = useCallback(async () => {
        if (credentials.identity == "" || credentials.password == "") return;
        try {
            await pb
                .collection("users")
                .authWithPassword(credentials.identity, credentials.password);
        } catch (error) {
            console.log(error.message);
        }
    });

    const navigate = useNavigate();
    user && navigate("/");

    return (
        <div className="center-container">
            <div
                className="login-container-open"
                data-augmented-ui>
                <div
                    className="input-aug"
                    data-augmented-ui>
                    <input
                        type="text"
                        name="identity"
                        value={credentials.identity}
                        onChange={change}
                        placeholder="username or e-mail"
                    />
                </div>
                <div
                    className="input-aug"
                    data-augmented-ui>
                    <input
                        type="password"
                        name="password"
                        value={credentials.password}
                        onChange={change}
                        placeholder="password"
                    />
                </div>
                <button
                    className="button-aug"
                    data-augmented-ui
                    onClick={log}>
                    Log in
                </button>
                <button
                    className="button-aug alt"
                    data-augmented-ui
                    onClick={() => navigate("/SignUp", { replace: true })}>
                    Sign up
                </button>
            </div>
        </div>
    );
};

export default LogIn;
