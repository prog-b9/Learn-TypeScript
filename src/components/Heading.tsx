
type Props = {
    children: React.ReactNode
}

function Heading(props: Props) {
    return (<>
        <h1>This Is A Heading</h1>
        {props.children}

    </>)
}

export default Heading