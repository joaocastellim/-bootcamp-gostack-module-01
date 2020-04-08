import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header'
import api from './services/api';

function App() {

  const [projects, setProjects] = useState([]);


  useEffect( () => {
    api.get('/projects').then(response => {
      setProjects(response.data);
    });
  }, []);

  async function handleProject() {
    const response = await api.post('/projects', {
      title: `New Project ${Date.now()}`,
      owner: 'Diego Fernandes'
    });

    setProjects([...projects, response.data]);
  }

  return (
    <>
      <Header title="Projects"/>
      <ul>
        {projects.map(project => <li key={project.id}>{project.title }  {project.owner}</li>)}
      </ul>

      <button type="button" onClick={handleProject}>Add Project</button>
    </>
  )
}

export default App;