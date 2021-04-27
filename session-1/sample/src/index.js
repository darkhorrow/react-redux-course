import React from 'react';
import ReactDOM from 'react-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import Calculator from './components/calculator';
import Heroes from './components/heroes';

ReactDOM.render(
  <React.StrictMode>
    <Tabs defaultActiveKey="heroes" id="uncontrolled-tab-example">
      <Tab eventKey="calculator" title="Calculator">
        <Calculator />
      </Tab>
      <Tab eventKey="heroes" title="Heroes">
        <Heroes />
      </Tab>
    </Tabs>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
