import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect
} from 'react-router-dom';

// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';
import { routes } from './routes';

import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
            <img src={ logo } alt="React Logo" />
          <ul>
            { routes.map( ( link, index ) => (
               <li key={ index } >
                  <NavLink to={ link.to } activeClassName="nav-active" exact> { link.name } </NavLink>
               </li>     
            ) ) }
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
            { routes.map( ( r, index ) => ( 
               <Route key={ index } path={ r.path } component={ r.Component } />
            ) ) }
            <Redirect path='*'  to='lazy1' />
            
        </Switch>
      </div>
    </Router>
  );
}