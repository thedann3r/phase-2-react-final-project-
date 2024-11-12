import { useState } from "react"

function NewFish({fish,setFish}){
    const [newFish,setNewFish] = useState({
        name:"",
        image:"",
        location:"",
        fact:"",
        id:0
    })
    function handleChange(e){
        e.preventDefault()
        let name = e.target.name
        let value = e.target.value

        setNewFish({
            ...newFish,
            [name]:value
        })
    }
    function handleSubmit(e){
       e.preventDefault()
       fetch("http://localhost:3000/fish", {
        method:"POST",
        headers:{
            "Content-type":"appliction/json"
        },
        body:JSON.stringify(newFish)
       })
       .then(resp => resp.json())
       .then(poisson => {setFish([...fish,poisson])
        setNewFish({
            name:"",
            image:"",
            location:"",
            fact:"",
            id:0
        })
       })
       .catch(error => console.log(error))
    }
    return(
        <div id="newness">
          <h2>Ajouter un nouveau poisson</h2>
            <form id="new" onSubmit={handleSubmit}>
                <input className="input" type="text" name="name" placeholder="Name" value={newFish.name} required onChange={handleChange}/>
                <input className="input" type="url" name="image" placeholder="Image" value={newFish.image} required onChange={handleChange}/>
                <input className="input" type="text" name="location" placeholder="Location" value={newFish.location} required onChange={handleChange}/>
                <input className="input" type="text" name="fact" placeholder="Fun fact..." value={newFish.fact} required onChange={handleChange}/>
                <input className="input" type="number" name="id" placeholder="Id" value={newFish.id} required onChange={handleChange}/>
                <button id="add" type="submit">ADD!</button>
            </form>
        </div>
    )
}

export default NewFish