
type Props = {
    value: string;
    onchange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function Input(props: Props) {
    return (
        <input type="text" value={props.value} onChange={(e) => props.onchange(e)} />
    )
}

export default Input