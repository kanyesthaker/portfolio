import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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

const Routing=() => (
  <Router>
    <NavBar/>
    <Switch>
      <Route path="/notes" component={NotesScreen}></Route>
      <Route path="/projects" component={ProjectsScreen}></Route>
      <Route path="/posts" component={PostsScreen}></Route>
      <Route path="/iris" component={IrisScreen}></Route>
      <Route path="/datum" component={DatumScreen}></Route>
      <Route path="/close" component={CloseScreen}></Route>
      <Route path="/drop" component={DropScreen}></Route>
      <Route path="/wave" component={WaveScreen}></Route>
      <Route path="/ferret" component={FerretScreen}></Route>
      <Route path="/eecs" component={EecsScreen}></Route>
      <Route path="/reflection21" component={ReflectionScreen2021}></Route>
      <Route path="/" component={App}></Route>
    </Switch>
  </Router>
);

ReactDOM.render(
  <React.StrictMode>
    <link rel="shortcut icon" href="../public.png"></link>
    <Routing/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
