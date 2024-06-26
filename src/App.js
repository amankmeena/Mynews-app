import './App.css';
// News | food hyper account Api key: c22ac999fd5a4766ab49dfcbdfd77f40
// News | Gulab shankar account Api key: cbdbaac2ef8c4c8d82f7a2f17b22388a

import React, { Component } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

import Navbar from './components/Navbar';
import News from './components/News';
import About from './components/About';

export default class App extends Component {

  // apikey = 'c22ac999fd5a4766ab49dfcbdfd77f40'
  apikey = process.env.REACT_APP_NEWS_API

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({progress: progress})
  }

  render() {
    return (
      <>
        {/* <Navbar /> */}
        {/* <News pageSize={5} country="in" category="science" /> */}
        {/* <About /> */}

        <BrowserRouter>
          <Navbar />

          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
          />

          <Routes>
            <Route exact path="/" element={<News apikey={this.apikey} setprogress={this.setProgress} key="general" /*pageSize={5}*/ country="in" category="general" />} />
            
            <Route exact path="/business" element={<News apikey={this.apikey} setprogress={this.setProgress} key="business" /*pageSize={5}*/ country="in" category="business" />} />
            
            <Route exact path="/entertainment" element={<News apikey={this.apikey} setprogress={this.setProgress} key="entertainment" /*pageSize={5}*/ country="in" category="entertainment" />} />
            
            <Route exact path="/health" element={<News apikey={this.apikey} setprogress={this.setProgress} key="health" /*pageSize={5}*/ country="in" category="health" />} />
            
            <Route exact path="/science" element={<News apikey={this.apikey} setprogress={this.setProgress} key="science" /*pageSize={5}*/ country="in" category="science" />} />
            
            <Route exact path="/sports" element={<News apikey={this.apikey} setprogress={this.setProgress} key="sports" /*pageSize={5}*/ country="in" category="sports" />} />
            
            <Route exact path="/technology" element={<News apikey={this.apikey} setprogress={this.setProgress} key="technology" /*pageSize={5}*/ country="in" category="technology" />} />

            <Route exact path="/about" element={<About />} />
          </Routes>

        </BrowserRouter>
      </>
    )
  }
}