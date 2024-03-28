const ModalInput = ({ type, name, value, placeholder, change }) => {
    return (
        <div
            className="input-aug modal"
            data-augmented-ui>
            <input
                type={type}
                name={name}
                value={value}
                onChange={change}
                placeholder={placeholder}
            />
        </div>
    );
};

export default ModalInput;
