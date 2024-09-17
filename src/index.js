import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotesScreen from './screens/NotesScreen';
import ProjectsScreen from './screens/ProjectsScreen';
import IrisScreen from './screens/projects/IrisScreen';
import { NavBar } from './components/NavBar';
import DatumScreen from './screens/projects/DatumScreen';
import CloseScreen from './screens/projects/CloseScreen';
import DropScreen from './screens/projects/DropScreen';
import WaveScreen from './screens/projects/WaveScreen';
import PostsScreen from './screens/PostsScreen';
import FerretScreen from './screens/projects/FerretScreen';
import EecsScreen from './screens/posts/EecsScreen';
import ReflectionScreen2021 from './screens/posts/ReflectionScreen2021';
import ReflectionScreen2022 from './screens/posts/ReflectionScreen2022';
import LearningScreen from './screens/posts/LearningScreen';

const Routing=() => (
  <Router>
    <NavBar/>
    <Routes>
      <Route path="/notes" element={<NotesScreen />}></Route>
      <Route path="/projects" element={<ProjectsScreen/>}></Route>
      <Route path="/posts" element={<PostsScreen/>}></Route>
      <Route path="/iris" element={<IrisScreen/>}></Route>
      <Route path="/datum" element={<DatumScreen/>}></Route>
      <Route path="/close" element={<CloseScreen/>}></Route>
      <Route path="/dropthefax" element={<DropScreen/>}></Route>
      <Route path="/wave" element={<WaveScreen/>}></Route>
      <Route path="/ferret" element={<FerretScreen/>}></Route>
      <Route path="/eecs" element={<EecsScreen/>}></Route>
      <Route path="/reflection21" element={<ReflectionScreen2021/>}></Route>
      <Route path="/reflection22" element={<ReflectionScreen2022/>}></Route>
      <Route path="/study" element={<LearningScreen/>}></Route>
      <Route path="/" element={<App/>}></Route>
    </Routes>
  </Router>
);


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
      <Routing />
  </React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
