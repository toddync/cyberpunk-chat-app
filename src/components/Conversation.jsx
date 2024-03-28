import useConversationsStore from "../store/conversationsStore";

const Conversation = ({ data }) => {
    const updateCurrent = useConversationsStore((s) => s.updateCurrent);
    return (
        <li
            className="nav__item"
            onClick={() => updateCurrent(data)}>
            <a
                className="nav__link nav__link --active"
                href="#">
                <span className="channel-link">
                    <span
                        className="channel-link__icon"
                        style={data.active ? { color: "limegreen" } : {}}>
                        #
                    </span>
                    <span className="channel-link__element">
                        {data.username}
                    </span>
                </span>
            </a>
        </li>
    );
};

export default Conversation;
