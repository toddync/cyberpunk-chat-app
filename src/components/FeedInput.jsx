import { useCallback, useEffect, useRef, useState } from "react";
import useFooterPaddingStore from "../store/footerPaddingStore";
import pb from "../pb";
import useConversationsStore from "../store/conversationsStore";

const FeedInput = () => {
    const sizeRef = useRef();
    const update = useFooterPaddingStore((s) => s.update);
    useEffect(() => update(sizeRef.current.clientHeight));

    const current = useConversationsStore((s) => s.current);
    const [messageContent, setMessageContent] = useState("");
    const handleSubmit = useCallback((e) => {
        e.preventDefault();

        current &&
            pb
                .collection("messages")
                .create({
                    owner: pb.authStore.model.id,
                    receiver: current.id,
                    content: messageContent,
                })
                .then(() => setMessageContent(""));
    });

    return (
        <div
            className="channel-feed__footer"
            ref={sizeRef}>
            <form
                className="channel-message-form"
                onSubmit={handleSubmit}>
                <div className="form-group">
                    <label
                        className="form-label"
                        htmlFor="message">
                        Message
                    </label>
                    <div className="form-control">
                        <textarea
                            value={messageContent}
                            onChange={(e) => setMessageContent(e.target.value)}
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="form-footer">
                    <button
                        className="button button--primary button--size-xl"
                        type="submit">
                        <span className="button__content">Send</span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FeedInput;
