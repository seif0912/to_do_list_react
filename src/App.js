import {Container, Todos, Input} from './components/Index'
import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <Input/>
        <Todos/>
      </Container>
    </div>
  );
}

export default App;
