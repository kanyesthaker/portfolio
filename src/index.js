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

const Routing=() => (
  <Router>
    <NavBar/>
    <Switch>
      <Route path="/notes" component={NotesScreen}></Route>
      <Route path="/projects" component={ProjectsScreen}></Route>
      <Route path="/iris" component={IrisScreen}></Route>
      <Route path="/" component={App}></Route>
    </Switch>
  </Router>
);

ReactDOM.render(
  <React.StrictMode>
    <Routing/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
