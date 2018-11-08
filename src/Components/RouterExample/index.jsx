import React from 'react';
import {
  BrowserRouter, NavLink, Route, Switch,
} from 'react-router-dom';
import SwitchComponent from '../SwitchComponent';
import PathParam from '../PathParam';

export const About = () => <h2>О сайте</h2>;

export const NotFound = () => <h2>Ресурс не найден</h2>;

export const Main = () => <h2>Главная</h2>;

export default class SimpleRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li><NavLink to="/" activeStyle={{ color: 'green', fontWeight: 'bold' }}> Home </NavLink></li>
              <li><NavLink to="/about" activeStyle={{ color: 'green', fontWeight: 'bold' }}> About</NavLink></li>
              <li><NavLink to="/new" activeStyle={{ color: 'green', fontWeight: 'bold' }}> New </NavLink></li>
               <li><NavLink to="/route/1/vlad" > Route </NavLink></li>
            </ul>
          </nav>
          <hr />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/about" component={About} />
            <Route path="/new" component={SwitchComponent} />
            <Route path="/route/:id/:name" component={PathParam} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
