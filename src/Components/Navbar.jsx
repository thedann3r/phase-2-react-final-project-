import { Link } from "react-router-dom" 

function Navbar(){
    return(
        <>
          <nav id="navigation">
             <Link to="./home">Home</Link>  
             <Link to="./app">App</Link>  
             <Link to="./about">About</Link>  
             <Link to="./contacts">Contacts</Link>  
          </nav>      
        </>
    )
}
export default Navbar