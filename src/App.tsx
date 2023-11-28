import './App.css'
import Heading from './components/Heading'
import SubHeading from './components/SubHeading'
// import Status from './components/Status'
import SayHello from './components/SayHello'
import Button from './components/Button'
import Input from './components/Input'
import ContainerCard from './components/ContainerCard'
import Product from './components/Product'
import User from './components/User'

function App() {
  // Object
  // const objData = {
  //   firstName: "Basil",
  //   lastName: "Mohammed"
  // }

  // Array
  // const arrData = [
  //   1, 2, 3, 4, "Saad", 6
  // ]

  const myDataProduct = [
    {
      id: 1,
      title: "Apple",
      price: 100,
      desc: "Description Apple",
    },
    {
      id: 2,
      title: "Hawawy",
      price: 200,
      desc: "Description Hawawy",
      size: 4124
    },
  ]


  return (
    <>
      {/*------- Handel With Object */}
      {/* <SayHello arrData={arrData} /> */}
      <SayHello name={"Basil"} />
      {/*------- Handel With Status (0-1-2) */}
      {/* <Status status="success" /> */}
      {/*------- handel With Components */}
      <Heading>
        <SubHeading>
          This Is A SubHeading
        </SubHeading>
      </Heading>
      {/*------- How TO Handel Button With TypeScript */}
      <Button title='Click Me' onclick={() => console.log("Click Me Button")} />
      {/*------- How TO Handel Input With TypeScript */}
      <Input value='saad' onchange={(e) => console.log(e.target.value)} />
      {/*------- How TO Handel Styles With TypeScript */}
      <ContainerCard styles={{ padding: 100, width: 50, margin: "auto", marginTop: 30 }} />
      {/*------- How TO Handel Types exports With TypeScript */}
      <Product myDataProduct={myDataProduct} />
      {/*------- How TO Handel hooks useState With TypeScript */}
      <User />



    </>
  )
}

export default App
