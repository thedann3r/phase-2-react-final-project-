function Fish({name,image,location,fact}){
    return(
        <div id="content">
            <h2>{name}</h2>
            <img id="image" src={image} alt={name} title={name}/>
            <h3>Location: {location}</h3>
              <div id="fact">
                <h4>Did you know...😑</h4>
                <p><strong>{fact}</strong></p>
              </div>
        </div>
    )
}

export default Fish