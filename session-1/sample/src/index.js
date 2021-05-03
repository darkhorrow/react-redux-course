import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import reportWebVitals from './reportWebVitals';
import Calculator from './components/calculator/calculator';
import Heroes from './components/heroes/heroes';
import Apod from './components/apod/apod';
import Beers from './components/beer/beer';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand>React Course Exercises</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link><NavLink exact to="/calculator" className="nav-link" activeClassName="active">Calculator</NavLink></Nav.Link>
              <Nav.Link><NavLink exact to="/heroes" className="nav-link" activeClassName="active">Heroes</NavLink></Nav.Link>
              <Nav.Link><NavLink exact to="/apod" className="nav-link" activeClassName="active">Apod</NavLink></Nav.Link>
              <Nav.Link><NavLink exact to="/" className="nav-link" activeClassName="active">Beers</NavLink></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route exact path="/calculator">
            <Calculator />
          </Route>
          <Route exact path="/heroes">
            <Heroes />
          </Route>
          <Route exact path="/apod">
            <Apod />
          </Route>
          <Route exact path="/">
            <Beers />
          </Route>
        </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
