import './App.css';
import React, { Component } from 'react';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Content } from './components/content';
import { Create } from './components/create';
import { Read } from './components/read';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Edit } from './components/edit';


class App extends Component {
  render() {
  return (
    <Router>
    <div className="App">
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Car Service</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/read">Read</Nav.Link>
        <Nav.Link href="/create">Create</Nav.Link>
      </Nav>
    </Navbar>

    <Switch>
      <Route path='/' component={Content} exact />
      <Route exact path='/create' component={Create} />
      <Route path='/read' component={Read} />
      <Route path='/edit/:id' component={Edit} />
    </Switch>
    </div>
    </Router>
  );
  }
  }
  

export default App;
