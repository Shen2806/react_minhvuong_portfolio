interface IPrpos {
    btnText?: string;
    btnIcons?: React.ReactNode;
    btnStyle?: React.CSSProperties;
    onClick?: () => void;
}
const ResizeButton = (props: IPrpos) => {
    const { btnText, btnIcons, btnStyle, onClick } = props;

    return (
        <button className="resize-button" style={btnStyle}
            onClick={onClick}

        >
            <span style={{ textTransform: "uppercase" }}>{btnText}</span>
            <>{btnIcons}</>
        </button>
    )
}

export default ResizeButton;