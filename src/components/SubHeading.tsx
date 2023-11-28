
type Props = {
    children: string
}

function SubHeading(props: Props) {
    return (
        <>
            <h2>{props.children}</h2>
        </>

    )
}

export default SubHeading