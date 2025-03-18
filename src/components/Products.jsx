import "./Products.css"
export default function Products(){

    const products=[
        {id:1,name:"Product 1",price:30},
        {id:2,name:"Product 2",price:40},
        {id:3,name:"Product 3",price:45},
        {id:2,name:"Product 4",price:95},
        {id:2,name:"Product 5",price:70},
        {id:2,name:"Product 6",price:20}
    ]
    return(
    <div>
        <h2>Product List</h2>
        <div className="App-Products-Row">
            {
                products.map((value,index)=>(

                    <div className="App-Products-Box" key={index}>
                        <h3>{value.name}</h3>
                        <h4>{value.price}</h4>
                        <button>Add To Cart</button>
                        </div>
                ))}
        </div>
    </div>
    );

}