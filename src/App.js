import logo from './logo.svg';
import './App.css';
import TaskList from './components/TaskList.jsx';

function App() {
  return(
    <div className='app-container'>

      <div className='task-list-container'>

        <div className='task-title-container'>
          <h1>To Do List</h1>
        </div>

        <TaskList />
      
      </div>
    
    </div>
  );
}

export default App;
