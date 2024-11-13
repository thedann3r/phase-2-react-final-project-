function Fish({name,image,location,fact,id,fish,setFish}){
  function handleDelete(){
    fetch(`http://localhost:3000/fish/${id}`, {
      method:"DELETE",
      headers:{
        "Content-Type":"application/json"
      }
    })
    .then(res => res.json())
    .then(() => {
      let remainder = fish.filter(fins => fins.id !== id)
      setFish(remainder)
      alert(`${name} has been deleted!`)
    })
    .catch(err => console.log(err))
  }
    return(
        <div id="content">
            <h2>{name}</h2>
            <img id="image" src={image} alt={name} title={name}/>
            <h3>Location: {location}</h3>
              <div id="fact">
                <h4>Did you know...😑</h4>
                <p><strong>{fact}</strong></p>
              </div>
              <p>{id}</p>
              <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default Fish