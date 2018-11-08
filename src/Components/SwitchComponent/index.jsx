import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import { Main, About, NotFound } from '../../Components/RouterExample';

export default class SwitchComponent extends React.Component {
  render() {
    return (
      <div>
        <nav>
         <ul>
            <li><NavLink to="/" activeStyle={{color:"green", fontWeight:"bold"}} > Home </NavLink></li>
            <li><NavLink to="/about/user" activeStyle={{color:"green", fontWeight:"bold"}}> About</NavLink></li>
            <li><NavLink to="/notfound/user" activeStyle={{color:"green", fontWeight:"bold"}}> NotFound</NavLink></li>
          </ul>
       </nav>
        <hr />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/about/user" component={About} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    );
  }
}
