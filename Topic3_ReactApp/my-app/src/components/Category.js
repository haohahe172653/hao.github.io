function CategoryList({data=[]}){
    return (
        <ul>
            {
                data.map(({id, name})=>(
                    <li key={id} style={{display:'inline-block', marginRight:'10px'}}>
                        <a href={`/cat-id=${id}`}>
                            {name}
                        </a>
                    </li>
                ))
            }
        </ul>
    )
}

export default CategoryList