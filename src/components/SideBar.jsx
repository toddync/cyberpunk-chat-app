import { useEffect, useRef, useState } from "react";
import useConversationsPaddingStore from "../store/conversationsPaddingStore";
import useFirstRender from "../hooks/firstRender";
import ConversationsHolder from "./ConversationsHolder";
import useConversationsStore from "../store/conversationsStore";

const SideBar = () => {
    const topRef = useRef();
    const formRef = useRef();
    const { padding, update } = useConversationsPaddingStore();
    const firstRender = useFirstRender();

    const updateCurrent = useConversationsStore((s) => s.updateCurrent);

    useEffect(() => {
        firstRender &&
            update(
                padding +
                    topRef.current.clientHeight +
                    formRef.current.clientHeight
            );
    }, []);

    return (
        <>
            <div className="app-a">
                <div
                    className="segment-topbar"
                    ref={topRef}>
                    <div className="segment-topbar__header">
                        <h3 className="text-heading3 segment-topbar__title">
                            Conversations
                        </h3>
                    </div>
                    <div
                        className="segment-topbar__aside plus"
                        onClick={() => {
                            updateCurrent({});
                        }}>
                        <div className="button-toolbar">
                            <a className="button button--primary button--size-lg">
                                <svg
                                    className="button__icon"
                                    viewBox="0 0 24 24">
                                    <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <form
                    className="form-search"
                    ref={formRef}>
                    <div className="form-group">
                        <div className="form-control form-control--with-addon">
                            <input
                                name="query"
                                placeholder="Search..."
                                type="text"
                            />
                            <div className="form-control__addon form-control__addon--prefix">
                                <svg viewBox="0 0 24 24">
                                    <path d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </form>
                <ConversationsHolder />
            </div>
        </>
    );
};

export default SideBar;
