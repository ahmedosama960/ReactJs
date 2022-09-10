function NavBar(){

    const printFunction = (e,Name) =>{
        console.log(e.target)
            console.log("printed " + Name)
    }


    return(
        <div>
            <h2 style={
                {
                    
                }
            }>Hello from navbar</h2>
            <button className="btn btn-primary" onClick={ (e) => { printFunction(e,'Ahmed') } }>
                Click ME
            </button>
        </div>

    );

}


export default NavBar