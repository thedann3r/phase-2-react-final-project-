import Fish from "./Fish"
function FishList({fish,setFish}){
    return(
       <div id="container">
          {fish.length >0? fish.map(fishy => (
            <Fish 
            name={fishy.name}
            image={fishy.image}
            location={fishy.location}
            fact={fishy.fact}
            key={fishy.id}
            fish={fish}
            setFish={setFish}
            />
          )):null}
       </div>
    )
}

export default FishList