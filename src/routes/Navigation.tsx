import { Suspense } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from 'react-router-dom';

import logo from '../logo.svg';
import { routes } from './routes';

export const Navigation = () => {
  return (
      <Suspense fallback={ <div> Loading... </div> }>
         <Router>
            <div className="main-layout">
               <nav>
                  <img src={ logo } alt="React Logo" />
                  <ul>
                  { routes.map( ( route, index ) => (  
                     <li key={ index } >
                        <NavLink to={ route.to } activeClassName="nav-active" exact> { route.name } </NavLink>
                     </li>
                  ) ) }
                  </ul>
               </nav>

               {/* A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */}
               <Switch>
                  { routes.map( ( { path, Component }, index ) => (  
                     <Route key={ index } path={ path } render={  () => <Component />  } />
                  ) ) }
                  <Redirect  to={ routes[0].to } />
               </Switch>
            </div>
         </Router>
      </Suspense>
   );
}