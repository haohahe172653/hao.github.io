// Sử dụng function để định nghĩa 1 component
function Product({id, name}){
    return (
        <div className="item" key={id}>
            <div className="img"></div>
            <h3>{name}</h3>
            <div className="price"></div>
        </div>
    )
}

function ProductList({data=[]}){
    return (
        <div className="container">
            <h2>List of products</h2>
            {
                data.map(({id, name})=>(
                    <Product id={id} name={name}/>
                ))
            }
        </div>
    )
}

// Xuất bản component này (export module)
export default ProductList