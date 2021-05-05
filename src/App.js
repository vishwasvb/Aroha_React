import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Route,Switch} from 'react-router-dom';

import NavBar from './components/home/navBar'
import Footer from './components/home/footer'


import Home from './components/home/home'
import AboutLearning from './components/platForm/aboutLearning360/aboutLearning';
import AppsInPlatform from './components/platForm/appsInPlatform/appsInPlatform';
import AboutMy360Main from './components/platForm/aboutMy360.AI/aboutMy360Main';
import SalesAnalyticsMain from './components/platForm/SalesAnalytics/salesAnalyticsMain'




function App() {
  return (
    <React.Fragment>
        <NavBar />
        {/* <Home /> */}
        <Switch>
            <Route path='/aboutLearning' component={AboutLearning} />
            <Route path='/appsInPlatform' component={AppsInPlatform} />
            <Route path='/aboutMy360Main' component={AboutMy360Main} />
            <Route path='/salesAnalyticsMain' component={SalesAnalyticsMain} />

            <Route path="/" exact component={Home} />
        </Switch>

        <Footer />

   </React.Fragment>
  );
}

export default App;
