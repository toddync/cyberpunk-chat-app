import { useCallback, useEffect, useState } from "react";
import pb from "../pb";
import FeedHeader from "./FeedHeader";
import Message from "./Message";
import FeedInput from "./FeedInput";
import useFooterPaddingStore from "../store/footerPaddingStore";
import useConversationsStore from "../store/conversationsStore";

const Feed = () => {
    const padding = useFooterPaddingStore((s) => s.padding);
    const current = useConversationsStore((s) => s.current);
    const [messages, setMessages] = useState([]);

    const fetch = useCallback(() => {
        current &&
            pb
                .collection("messages")
                .getFullList({
                    filter: `
                        (owner.id = "${current.id}" && receiver.id = "${pb.authStore.model.id}")
                            ||
                        (receiver.id = "${current.id}" && owner.id = "${pb.authStore.model.id}")
                    `,
                    sort: "created",
                    expand: "receiver, owner",
                })
                .then((e) => {
                    // console.log(e);
                    setMessages(e);
                });
    }, [current]);

    useEffect(() => {
        pb.collection("messages").subscribe("*", ({ action, record }) => {
            if (action == "create") {
                fetch();
            }
        });

        return pb.collection("messages").unsubscribe;
    }, []);

    useEffect(fetch, [current]);
    useEffect(() => {
        !current && pb.collection("messages").unsubscribe();
    }, [current]);

    useEffect(() => {
        document.querySelector(".channel-feed__body").scrollTop =
            document.querySelector(".channel-feed__body").scrollHeight;
    }, [messages]);

    return (
        <div className="app-main">
            <div className="channel-feed">
                <FeedHeader />
                <div
                    className="channel-feed__body"
                    style={{
                        bottom: padding,
                        top: padding,
                    }}>
                    {messages.map((m) => (
                        <Message
                            key={m.id}
                            data={m}
                        />
                    ))}
                </div>
                <FeedInput />
            </div>
        </div>
    );
};

export default Feed;
