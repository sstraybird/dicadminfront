import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import  AdminHome  from './components/admin/AdminHome' 
import  Sections  from './components/admin/Sections' 
const Home = () => (
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
class App extends Component {
  render() {
    return (
			<div>
        <ul>
          <li><Link to="/admin">Home</Link></li>
          <li><Link to="/admin/addSections">Add Sections</Link></li>
          <li><Link to="/cities">aaa</Link></li>
        </ul>

        <Route exact path="/" component={Home}/>
        <Route path="/airports" component={Airport}/>
        <Route path="/cities" component={City}/>
        <Route exact path="/admin" component={AdminHome}/>
        <Route path="/admin/addSections" component={Sections} />
      </div>
    );
  }
}

export default App;
