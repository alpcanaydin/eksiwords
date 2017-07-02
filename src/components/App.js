import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './shared/Header';
import Footer from './shared/Footer';
import Content from './shared/Content';

import Home from '../routes/Home';
import General from '../routes/General';
import GeneralTopics from '../routes/GeneralTopics';
import GeneralEntries from '../routes/GeneralEntries';
import Search from '../routes/Search';
import Topic from '../routes/Topic';
import Author from '../routes/Author';

import './App.css';

const App = () => (
  <div className="App">
    <Header />
    <Content>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/genel" component={General} />
        <Route exact path="/genel/basliklar" component={GeneralTopics} />
        <Route exact path="/genel/entryler" component={GeneralEntries} />
        <Route exact path="/arama" component={Search} />
        <Route exact path="/baslik" component={Topic} />
        <Route exact path="/yazar" component={Author} />
      </Switch>
    </Content>
    <Footer />
  </div>
);

export default App;
