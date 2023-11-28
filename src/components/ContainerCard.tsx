type PropsStyles = {
    styles?: React.CSSProperties;
    children?: React.ReactNode
}

function ContainerCard(props: PropsStyles) {
    return <div style={{ border: "2px solid red", ...props.styles }}>{props.children}</div>
}

export default ContainerCard