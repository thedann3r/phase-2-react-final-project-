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
              <form id="new" onSubmit={handleUpdate}>
                <input className="input" type="text" name="name" placeholder="Name" value={newFish.name} required onChange={handleChange}/>
                <input className="input" type="url" name="image" placeholder="Image" value={newFish.image} required onChange={handleChange}/>
                <input className="input" type="text" name="location" placeholder="Location" value={newFish.location} required onChange={handleChange}/>
                <input className="input" type="text" name="fact" placeholder="Fun fact..." value={newFish.fact} required onChange={handleChange}/>
                <input className="input" type="number" name="id" placeholder="Id" value={newFish.id} required onChange={handleChange}/>
                <button id="add" type="submit">ADD!</button>
            </form>
              <button id="delete" onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default Fish