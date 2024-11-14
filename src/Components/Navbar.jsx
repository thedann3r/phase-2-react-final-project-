import { Link } from "react-router-dom" 

function Navbar(){
    return(
        <>
          <nav id="navigation">
             <Link className="link" to="./home">Home</Link>  
             <Link className="link" to="./app">App</Link>  
             <Link className="link" to="./about">About</Link>  
             <Link className="link" to="./contacts">Contacts</Link>  
          </nav>      
        </>
    )
}
export default Navbar