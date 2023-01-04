import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu';
import ArticleList from './components/content/ArticleList';
import User from './components/User';
import Migration from './components/Migration';
import {Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import {Container} from 'react-bootstrap';
import React from 'react';
import Login from './components/login/login';

function App() {

  if (!sessionStorage.getItem('token')) {
    return <Login/>;
  }

  return (<>
    <Container className="p-3">
      <Menu/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/content" element={<ArticleList/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/migracion" element={<Migration/>}/>
      </Routes>
    </Container>
  </>);
}

export default App;
