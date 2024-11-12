import React from "react"
function Search({onSearch}){
    function handleChange(e){
       onSearch(e.target.value)
    }
    return(
        <div>
             <label htmlFor="search" >Search Fish</label>
                <input id="search" 
                type="text" 
                placeholder="Search..." 
                onChange={handleChange}
                />
        </div>
    )
}

export default Search