import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Message from './components/Message';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import Status from './components/Status';
import Gallery from './components/Gallery';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import Register from './components/Register';
import ShoppingCart from './components/ShopingCart';
import Employees from './components/Employees';
import AddEmp from './components/AddEmp';
import EditEmp from './components/EditEmp';

import store from './store';
import { Provider } from 'react-redux';

import Books from './containers/Book';
import CreateBook from './containers/CreateBook';

import { createBrowserHistory } from 'history';
export const history = createBrowserHistory({ forceRefresh: true });

const Header = () => (
  <header>
    <NavLink to="/" className="btn btn-primary">Home</NavLink>&nbsp;&nbsp;
    <NavLink to="/about" className="btn btn-primary">About</NavLink>&nbsp;&nbsp;
    <NavLink to="/contact" className="btn btn-primary">Contact</NavLink>&nbsp;&nbsp;
    <NavLink to="/register" className="btn btn-primary">Register</NavLink>&nbsp;&nbsp;
    <NavLink to="/cart" className="btn btn-primary">Cart</NavLink>&nbsp;&nbsp;
    <NavLink to="/employees" className="btn btn-primary">Employees</NavLink>&nbsp;&nbsp;
    <NavLink to="/books" className="btn btn-primary">Books</NavLink>&nbsp;&nbsp;
  </header>
);

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Message title="Functional Component 1" /> */}
    {/* <Message title="Functional Component 2" /> */}
    {/* <ClickCounter title="Click Counter" description="This is a click counter component" /> */}
    {/* <HoverCounter title="Click Counter" description="This is a click counter component" /> */}
    {/* <Status /> */}
    {/* <Gallery /> */}
    <Provider store={store}>
      <BrowserRouter>
        <div className="container mt-5">
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/register" component={Register} />
            <Route path="/cart" component={ShoppingCart} />
            <Route path="/employees" component={Employees} />
            <Route path="/add-emp" component={AddEmp} />
            <Route path="/edit-emp/:id" component={EditEmp} />
            <Route path="/books" component={Books} />
            <Route path="/add-book" component={CreateBook} />
            <Route path="/edit-book" component={(props) => <CreateBook {...props} />} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
