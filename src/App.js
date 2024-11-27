
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTask from './components/AddTask';
import { Header } from './components/Header';
import './App.css';
import ShowTask from './components/ShowTask';

function App() {

  const [tasklist, setTasklist] = useState([]);
  const [task, setTask] = useState({});
/*   useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(tasklist))
  }, [tasklist])
 */
  return (
    <div>
      <Header />
      <AddTask
        tasklist={tasklist}
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}
      />
      <ShowTask tasklist={tasklist} setTasklist={setTasklist} task={task}
        setTask={setTask} />

    </div>
  );
}

export default App;
