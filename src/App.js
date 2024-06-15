import './App.css';
import Header from './components/Header'
import Todoitem from './components/Todoitem';
import Button from './components/Button';
function App() {
  return (
    <div className="main">
      <h1 id='heading'>Todo App</h1>
      <div className='container'>
      <Header/>
      <Todoitem text="Eat"/>
      <Todoitem text="Code"/>
      <Todoitem text="Play"/>
      <Todoitem text="Study"/>
      <Todoitem text="Sleep Again!"/>
      <Button/>
    </div>
    </div>
  )
}


export default App;
