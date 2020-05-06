import React from 'react';
import {Route, Link} from 'react-router-dom'
import './App.css';
import {AgGridReact } from "ag-grid-react"
import "ag-grid-community/dist/styles/ag-grid.css"
import "ag-grid-community/dist/styles/ag-theme-balham.css"
import Appp from "./tableWithApi"

import TableAPI from "./Component/TableByStockNIndustry"

import Home from "./Component/Home"
import {Container, Row, Col} from 'reactstrap'



const Homee = () => (
  <div>
    <h2> Home </h2>
  </div>
);

const Airport = () => (
  <div>
     <ul>
      <li>Jomo Kenyatta</li>
      <li>Tambo</li>
      <li>Murtala Mohammed</li>
    </ul>
  </div>
);

const City = () => (
  <div>
    <ul>
      <li>San Francisco</li>
      <li>Istanbul</li>
      <li>Tokyo</li>
    </ul>
  </div>
);
function App() {
  return (
    
    <div>
      <container>
       <Row>
          <Col xs="2"></Col>
          <Col xs="">
            
            <Home />
        
            <TableAPI />
          /* This is For Routing in React */
            <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/airports">Airports</Link></li>
          <li><Link to="/cities">Cities</Link></li>
        </ul>

        <Route path="/" component={Homee}/>
        <Route path="/airports" component={Airport}/>
        <Route path="/cities" component={City}/>
          </Col>
          <Col xs="2"></Col>
        </Row>
       
      </container>
    </div>
    
  );
}

export default App;
