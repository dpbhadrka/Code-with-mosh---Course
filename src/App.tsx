import './App.css'
import Form from './Components/ListGroup/Form/Form';
import ListGroup from './Components/ListGroup/ListGroup'

function App() {
const fruits = ["Apple", "Banana", "Pineapple", "Grapes", "Guava", "Kiwi"];
  const names = ["A", "B", "C", "D", "E", "F"];
  const onclickHandler = (item:string) => {
    console.log("Clicked item: ", item);
  }
  return (
    <div className="App">
      {/* <ListGroup items={fruits} title="Fruits" handler={onclickHandler}>
        Here is the <strong>Description</strong>
        </ListGroup> */}
      {/* <ListGroup items={names} title="Name"/> */}
      <Form/>
    </div>
  )
}

export default App
