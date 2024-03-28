const Message = ({ data }) => {
    return (
        <div className="message">
            <div className="message__body">
                <div>{data.content}</div>
            </div>
            <div className="message__footer">
                <span className="message__authoring">
                    {data.expand.owner.username}
                </span>{" "}
                -{` ${new Date(data.created).toLocaleTimeString()}`}
            </div>
        </div>
    );
};

export default Message;
