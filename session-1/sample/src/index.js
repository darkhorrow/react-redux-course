import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import reportWebVitals from './reportWebVitals';
import Calculator from './components/calculator';
import Heroes from './components/heroes';
import Apod from './components/apod/apod';
import Beers from './components/beer/beer';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
              <Nav.Link><Link to="/calculator" className="nav-link">Calculator</Link></Nav.Link>
              <Nav.Link><Link to="/heroes" className="nav-link">Heroes</Link></Nav.Link>
              <Nav.Link><Link to="/apod" className="nav-link">Apod</Link></Nav.Link>
              <Nav.Link><Link to="/" className="nav-link">Beers</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route path="/calculator">
            <Calculator />
          </Route>
          <Route path="/heroes">
            <Heroes />
          </Route>
          <Route path="/apod">
            <Apod />
          </Route>
          <Route path="/">
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
