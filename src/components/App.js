import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DynamicImport from './DynamicImport';
import Header from './Header';
import Footer from './Footer';

const ContactPage = (props) => (
  <DynamicImport load={() => import('./Contacts/ContactPage')}>
    {(Component) => Component === null
      ? <span></span>
      : <Component {...props} />}
  </DynamicImport>
)

const AddContact = (props) => (
  <DynamicImport load={() => import('./Contacts/AddContact')}>
    {(Component) => Component === null
      ? <span></span>
      : <Component {...props} />}
  </DynamicImport>
)

const EditContact = (props) => (
  <DynamicImport load={() => import('./Contacts/EditContact')}>
    {(Component) => Component === null
      ? <span></span>
      : <Component {...props} />}
  </DynamicImport>
)

const App = () => (
  <Router>
    <Fragment>
      <Header />
      <Switch>
        <Route path="/" component={ContactPage} exact={true} />
        <Route path="/create" component={AddContact} />
        <Route path="/edit/:id" component={EditContact} />
      </Switch>
      <Footer />
    </Fragment>
  </Router>
);

export default App;
