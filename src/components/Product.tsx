import { PropsTypeProducts } from "../types/type"
import ContainerCard from "./ContainerCard"

type Props = {
    myDataProduct: PropsTypeProducts[]
}


function Product(props: Props) {
    return (
        props.myDataProduct.map((item, i) => (
            <ContainerCard key={i} styles={{ margin: 10 }}>
                <li>{item.id}</li>
                <li>{item.title}</li>
                <li>{item.desc}</li>
                <li>{item.price}</li>
                {item.size == null ?
                    null : <li> {item.size}</li>
                }
            </ContainerCard >
        ))
    )
}

export default Product