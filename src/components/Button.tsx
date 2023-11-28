
type Props = {
    title: string;
    onclick: (e: React.MouseEvent<HTMLButtonElement>,) => void;
}
// How TO Handel Button IN TypeScript
function Button(props: Props) {
    return (
        <button onClick={(e) => props.onclick(e)}>{props.title}</button>
    )
}

export default Button