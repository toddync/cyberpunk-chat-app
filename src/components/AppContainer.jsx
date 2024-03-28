import Feed from "./Feed";
import SideBar from "./SideBar";

const AppContainer = () => {
    return (
        <div className="app-container">
            <SideBar />
            <Feed />
            <div className="app-b">
                <div className="pad">
                    <div className="pad__body">
                        <h4 className="text-heading3 undefined">
                            What's this?
                        </h4>
                        <br />
                        <p className="text-paragraph1 undefined">
                            Maybe an area for annotations
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppContainer;
