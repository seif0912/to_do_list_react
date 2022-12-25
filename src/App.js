import {Container, Todos, Input} from './components/Index'
import './App.css';
import {useState} from 'react'


function App() {
  let [list, setList] = useState([])

  return (
    <div className="App">
      <Container>
        <Input list={list} setList={setList}/>
        <Todos list={list} setList={setList}/>
      </Container>
    </div>
  );
}

export default App;
