import React, { Component } from "react";

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';

import { library } from '@fortawesome/fontawesome-svg-core';

import Header from "./components/Header";
import HomeContainer from "./containers/HomeContainer";
import CreatePollPageContainer from './containers/CreatePollPageContainer';
import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer';
import { Router, Route } from 'react-router-dom';
import history from './history';

import {
  faEnvelope, faKey, faFileWord, faThumbtack,
  faFile, faPencilAlt, faSyncAlt, faSave, faTrashAlt,
  faBars,
  faPlus, faMinus,
  faUser, faHome, faSignOutAlt, faUserCircle,
  faSearch, faFolder, faFileAlt, faFilter,
  faEye,
  faEllipsisH,
  faArrowCircleLeft,
} from '@fortawesome/free-solid-svg-icons';

library.add(faEnvelope, faKey, faFileWord, faThumbtack, faPlus, faMinus, faFile, faPencilAlt, faSyncAlt, faBars, faSave,
  faUser, faHome, faSignOutAlt, faUserCircle, faSearch, faFolder, faFileAlt, faFilter, faTrashAlt, faEye, faEllipsisH, faArrowCircleLeft);

class App extends Component {
  render() {
    return (
      <div className="c-luxfacta-layout">
        <Router history={history}>
          <Header />
          <ToastContainer hideProgressBar position="bottom-right" />
          <Route path="/create-poll" exact component={CreatePollPageContainer} />
          <Route path="/" exact component={HomeContainer} />
          <Footer year={2020} version={'1.0'} />
        </Router>
      </div>
    );
  }
}

export default App;