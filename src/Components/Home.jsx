import { useNavigate } from "react-router-dom"

function Home(){
const navigate = useNavigate()
    return(
         <div id="home">
          <h1>Home</h1> 
          <button onClick={() => navigate("/app")}>Next</button>  
         </div>
    )
}
export default Home