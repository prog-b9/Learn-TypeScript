
type PropsStatus = {
    status: string
}
const Status = (props: PropsStatus) => {

    let message;
    if (props.status === "loading") {
        message = "loading..."

    } else if (props.status === "success") {
        message = "Data Successfuly"
    } else if (props.status === "error") {
        message = "Error Data"

    } else {
        message = "no Data"
    }

    return (
        <div>
            <h1>Status : {message}</h1>
        </div>
    )
}

export default Status