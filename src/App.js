import {Todos, Input} from './components/Index'
import './App.css';
import {useState, useEffect} from 'react'


function App() {
  let [list, setList] = useState([])
  function getTasks() {
      let tasksL;
      if (localStorage.getItem('tasksL') === null) {
          tasksL = [];
      } else {
          tasksL = JSON.parse(localStorage.getItem('tasksL'));
      }
      tasksL.forEach(function(task) {
        setList(prev => [...prev, task])
      });
  }
  useEffect(getTasks,[])

  return (
    <div className="App">
        <div className="title">
          <h1>to do list - react</h1>
          <h3>stored Locally</h3>
        </div>
        <Input list={list} setList={setList}/>
        <Todos list={list} setList={setList}/>
    </div>
  );
}

export default App;
