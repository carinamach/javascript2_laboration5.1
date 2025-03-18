import { Home } from "./Home"
import { Products } from "./Products"



function Main(props) {

  return (
    <>

      {props.activePage == 'Home' && <Home></Home>}
      {props.activePage == 'Products' && <Products></Products>}


    </>
  )
}

export default Main