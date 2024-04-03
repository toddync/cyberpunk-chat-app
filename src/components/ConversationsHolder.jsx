import pb from "../pb";
import { useEffect } from "react";
import useConversationsPaddingStore from "../store/conversationsPaddingStore";
import useConversationsStore from "../store/conversationsStore";
import Conversation from "./Conversation";
const ConversationsHolder = () => {
    const padding = useConversationsPaddingStore((s) => s.padding);
    const conversations = useConversationsStore((s) => s.conversations);
    const update = useConversationsStore((s) => s.update);

    useEffect(() => {
        pb.authStore.model &&
            pb
                .collection("users")
                .getFullList()
                .then((e) => update(e));
    }, []);

    return (
        <div
            className="nav-section"
            style={{
                height: `calc(100vh - ${padding * 0.75}px)`,
            }}>
            <div
                className="nav-section__body"
                style={{
                    top: `${padding * 0.6}px`,
                    maxHeight: `calc(100vh - ${padding * 2.25}px)`,
                }}>
                <ul className="nav">
                    {conversations.map((c) => (
                        <Conversation
                            key={c.id}
                            data={c}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ConversationsHolder;
