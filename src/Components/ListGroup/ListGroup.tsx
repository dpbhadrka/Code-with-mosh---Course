import {MouseEvent} from 'react'

function ListGroup() {
    const fruits = ["Apple", "Banana", "Pineapple", "Grapes", "Guava", "Kiwi"];
    // const fruits:string[] = [];

    const handleClick = (event: MouseEvent) => console.log(event.target);
    return (
    <>
        <h1>List</h1>
            <ul className="list-group">
                {fruits.length === 0 && <li className="list-group-item">Not item found.</li>}
                
        {fruits.map(item => <li className="list-group-item active" onClick={(event) =>handleClick(event)} key={item}>{item}</li>)}
        </ul>
    </>
    )
}

export default ListGroup;