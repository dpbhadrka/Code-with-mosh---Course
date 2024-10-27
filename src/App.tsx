import './App.css'
import ListGroup from './Components/ListGroup/ListGroup'

function App() {
const fruits = ["Apple", "Banana", "Pineapple", "Grapes", "Guava", "Kiwi"];
const names = ["A", "B", "C", "D", "E", "F"];
  return (
    <div className="App">
      <ListGroup items={fruits} title="Fruits"/>
      <ListGroup items={names} title="Name"/>
    </div>
  )
}

export default App
