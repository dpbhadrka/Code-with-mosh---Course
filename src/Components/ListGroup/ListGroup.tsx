import { MouseEvent, ReactNode, useState } from 'react'
interface ListGroupProps {
    items: string[],
    title: string,
    children:ReactNode,
    handler: (item: string) => void;
}

function ListGroup({items,title,handler,children}:ListGroupProps) {
    
    // const fruits:string[] = [];
    const [selectedIndex, setIndex] = useState(0);

    const handleClick = (event: MouseEvent) => console.log(event.target);
    return (
    <div className='m-auto w-50'>
            <h1>{title}</h1>
            <div className='alert alert-primary'>{children}</div>
            <ul className="list-group">
                {items.length === 0 && <li className="list-group-item">Not item found.</li>}
                
                {items.map((item, index) =>
                    <li className={selectedIndex == index ? "list-group-item active" : "list-group-item"} onClick={() => { setIndex(index); handler(item) }}
                    key={item}>
                        {item}
                    </li>
                )}
        </ul>
    </div>
    )
}

export default ListGroup;