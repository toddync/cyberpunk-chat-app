const ModalButton = ({ prompt, click, alt }) => {
    return (
        <button
            className={"button-aug modal " + (alt && "alt")}
            data-augmented-ui
            onClick={click}>
            {prompt}
        </button>
    );
};

export default ModalButton;
