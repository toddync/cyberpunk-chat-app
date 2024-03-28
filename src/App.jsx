import "./css/App.css";
import { useEffect } from "react";
import Header from "./components/Header";
import AppContainer from "./components/AppContainer";
import { useNavigate } from "react-router-dom";
import useUserStore from "./store/userStore";
import Modal from "./components/Modal";
import ModalInput from "./components/ModalInput";
import ModalButton from "./components/ModalButton";
import AddModal from "./components/AddModal";

const App = () => {
    const navigate = useNavigate();
    const user = useUserStore((s) => s.user);

    useEffect(() => {
        user == null && navigate("/Login", { replace: true });
    }, []);

    return (
        <>
            <div className="app-skeleton">
                <Header />
                <AppContainer />
            </div>
            <AddModal />
        </>
    );
};
export default App;

// import { invoke } from "@tauri-apps/api/tauri";
// const [greetMsg, setGreetMsg] = useState("");
// const [name, setName] = useState("");
// async function greet() {
//     // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
//     setGreetMsg(await invoke("greet", { name }));
// }
