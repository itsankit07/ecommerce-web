import Header from "./Header"
import Footer from "./Footer"
import Login from "./Login"
import {Route , Routes} from 'react-router-dom'

const Body = () => {
  return (
    <div>
        <Header/>
        <Routes>
         <Route path = '/' element = {<Login/>}/>   
         <Route path = '/login' element = {<Login/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}

export default Body