function ActionButton({ lable, type = '', styled }) {
    return (
        <button type={type} className={styled}>
            <span>{lable}</span>
        </button>
    );
}

export default ActionButton;