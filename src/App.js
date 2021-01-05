import './App.css';
import React, { Component } from 'react';
import { Home } from './components/home';
import { Contact } from './components/contact';
import { Booking } from './components/booking';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Edit } from './components/edit';

// navbar used to naviagte through the app and router and switch used to direct to each component
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Car Service</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/booking">Bookings</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar>

          <Switch>
            <Route path='/' component={Home} exact />
            <Route exact path='/contact' component={Contact} />
            <Route path='/booking' component={Booking} />
            <Route path='/edit/:id' component={Edit} />
          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;
