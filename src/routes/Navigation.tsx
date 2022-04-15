import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect
} from 'react-router-dom';

import { DynamicFormPage, FormikAbsractPage, FormikComponentPage, FormikPage, FormikYupPage, RegisterPage, RegisterFormikPage } from '../forms/pages';

import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
         <nav>
            <img src={ logo } alt="React Logo" />
            <ul>
               <li>
                  <NavLink to="/register" activeClassName="nav-active" exact> Registro </NavLink>
               </li>
               <li>
                  <NavLink to="/formik" activeClassName="nav-active" exact> Formik </NavLink>
               </li>
               <li>
                  <NavLink to="/formikYup" activeClassName="nav-active" exact> Formik Yup</NavLink>
               </li>
               <li>
                  <NavLink to="/formikComponent" activeClassName="nav-active" exact> Formik Component</NavLink>
               </li>
               <li>
                  <NavLink to="/formikAbstract" activeClassName="nav-active" exact> Formik Abstract</NavLink>
               </li>
               <li>
                  <NavLink to="/registerFormik" activeClassName="nav-active" exact> Register Formik</NavLink>
               </li>
               <li>
                  <NavLink to="/dynamicForm" activeClassName="nav-active" exact> Dynamic Form </NavLink>
               </li>
            </ul>
         </nav>

         <Switch>
            <Route path="/register" component={ RegisterPage } />
            <Route path="/formik" component={ FormikPage } />
            <Route path="/formikYup" component={ FormikYupPage } />
            <Route path="/formikComponent" component={ FormikComponentPage } />
            <Route path="/formikAbstract" component={ FormikAbsractPage } />
            <Route path="/registerFormik" component={ RegisterFormikPage } />
            <Route path="/dynamicForm" component={ DynamicFormPage } />
            <Redirect path='*'  to='lazy1' />
        </Switch>
      </div>
    </Router>
   );
}