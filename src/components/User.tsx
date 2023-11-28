import { useState } from "react"
import { PropsTypeUser } from "../types/type"




function User() {
    const [user, setUser] = useState<null | PropsTypeUser>(null)
    return (
        <div>
            <button onClick={() => setUser({ name: "basil", email: "basil@gmail.com" })}>login</button>
            <button onClick={() => setUser(null)}>login</button>

            <h2>user name is : {user?.name}</h2>
            <h2>user email is : {user?.email}</h2>
        </div>
    )
}

export default User