import React, { useEffect, useState } from "react";
import './App.css'
import Headers from "./Headers";
import NewFish from "./NewFish";
import FishList from "./FishList";
import Search from "./Search";
import Footer from "./Footer";

function App(){
  const [fish,setFish] = useState([])
  const [searchFish,setSearchFish] = useState("")
  useEffect(() => {
    fetch("https://json-server-backend-36ql.onrender.com/fish")
    .then(res => res.json())
    .then(data => {
      setFish(data)
    })
    .catch(err => console.log(err))
  },[])

  const displayFish = fish.filter((fishery) => `${fishery.name}`.toLowerCase().includes(searchFish.toLowerCase()))

  return(
    <>
     <Headers />
     <NewFish fish={fish} setFish={setFish}/>
     <Search onSearch={setSearchFish}/>
     <FishList fish={displayFish} setFish={setFish}/>
     <Footer />
    </>
  )
}

export default App