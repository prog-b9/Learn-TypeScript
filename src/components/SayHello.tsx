
///////////////// Var Propsand Use Optainal////////////////////////
type PropsPerson = {
    name: string;
    age?: number;

}

const SayHello = (props: PropsPerson) => {
    return (
        <>
            <h1>Hello : ( Name: {props.name} / Age : {props.age} )</h1>
        </>
    )
}

export default SayHello

/////////////////Object Props////////////////////////
// type Props = {
//     objData: {
//         firstName: string;
//         lastName: string;
//     }
// }

// const SayHello = ({ objData }: Props) => {
//     return (
//         <>
//             <h1>Hello : {objData.firstName}_{objData.lastName}</h1>
//         </>
//     )
// }

// export default SayHello


// type Props = {
//     firstName: string;
//     lastName: string;
// }
/////////////////Array Props (number - string)/////////////////////////
// type Props = {
//     arrData: (number | string)[];
// }
// const SayHello = ({ arrData }: Props) => {
//     return (
//         <div>
//             {/* {arrData[1]} */}
//             {arrData.map((item) => (
//                 <li>{item}</li>
//             ))}
//         </div>
//     )
// }

// export default SayHello


/////////////////Array Of Object Props//////////////
// type Props = {
//     arrData: {
//         firstName: string;
//         lastName: string
//     }[]
// }

// const SayHello = ({ arrData }: Props) => {
//     return (
//         <>
//             <ul>
//                 {arrData.map((item, i) => (
//                     <li key={i}>{item.firstName}__{item.lastName}</li>
//                 ))}
//             </ul>
//         </>
//     )
// }

// export default SayHello



