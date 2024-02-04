import  "./itemlistcontainer.css"

function itemListContainer(prods){

    return  <div className="banner">
                <div >
                    <h1><span>Moxi Store</span></h1>
                    <p>{prods.titulo} </p>
                    <h2><span>Mira nuestros productos!</span></h2>
                </div>
            </div>
}

export default itemListContainer;