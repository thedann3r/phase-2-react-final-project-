import { useNavigate } from "react-router-dom"

function Home(){
const navigate = useNavigate()
    return(
         <div id="home">
            <section id="homeS">
                <h1>Home</h1> 
                <p id="opener"><strong>Fish is an aquatic animals, they are mostly found in the sea, rivers, lakes, and oceans. Nowadays, people hunt fish for their daily
                    bread, making business from it. There are various kinds of fish, be they small or large sizes and different shapes. Some people keep
                    them at home as a sign of fortune. Fishes are the queen of water, they can’t live without it. In the present scenario, we all know 
                    fishes are on the verge of extinction due to an increase in the hunting of fish for business purposes in the market, which is a disappointing
                    phase. In this app you will be able to see different fish species and in addition you will be given the luxury of adding other fish you see
                    fit in the app, thank you and enjoy!</strong></p>
            </section>
          <button onClick={() => navigate("/app")}>Next</button>  
         </div>
    )
}
export default Home