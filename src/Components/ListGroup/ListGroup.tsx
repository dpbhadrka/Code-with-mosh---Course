import {MouseEvent, useState} from 'react'

function ListGroup() {
    const fruits = ["Apple", "Banana", "Pineapple", "Grapes", "Guava", "Kiwi"];
    // const fruits:string[] = [];
    const [selectedIndex, setIndex] = useState(0);

    const handleClick = (event: MouseEvent) => console.log(event.target);
    return (
    <div className='m-auto w-50'>
        <h1>List</h1>
            <ul className="list-group">
                {fruits.length === 0 && <li className="list-group-item">Not item found.</li>}
                
        {fruits.map((item,index) => <li className={selectedIndex==index ? "list-group-item active" : "list-group-item"} onClick={()=> setIndex(index)} key={item}>{item}</li>)}
        </ul>
    </div>
    )
}

export default ListGroup;