import { MouseEvent, useState } from 'react'
interface ListGroupProps {
    items: string[],
    title:string
}

function ListGroup({items,title}:ListGroupProps) {
    
    // const fruits:string[] = [];
    const [selectedIndex, setIndex] = useState(0);

    const handleClick = (event: MouseEvent) => console.log(event.target);
    return (
    <div className='m-auto w-50'>
            <h1>{title}</h1>
            <ul className="list-group">
                {items.length === 0 && <li className="list-group-item">Not item found.</li>}
                
        {items.map((item,index) => <li className={selectedIndex==index ? "list-group-item active" : "list-group-item"} onClick={()=> setIndex(index)} key={item}>{item}</li>)}
        </ul>
    </div>
    )
}

export default ListGroup;