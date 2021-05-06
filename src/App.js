import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Route,Switch} from 'react-router-dom';

import NavBar from './components/home/navBar'
import Footer from './components/home/footer'


import Home from './components/home/home'

// Platform
import AboutLearning from './components/platForm/aboutLearning360/aboutLearning';
import AppsInPlatform from './components/platForm/appsInPlatform/appsInPlatform';
import AboutMy360Main from './components/platForm/aboutMy360.AI/aboutMy360Main';
import SalesAnalyticsMain from './components/platForm/SalesAnalytics/salesAnalyticsMain';
import CashFlowAnalytics from './components/platForm/cashFlowAnalytics/cashFlowAnalytics';

// Technologies
import DataManagementMain from './components/technologies/data/dataManagementMain';
import DataIntegration from './components/technologies/data/dataIntegration';
import DataStoryTelling from './components/technologies/data/dataStoryTelling';
import OpenSource from './components/technologies/data/openSource';
import Digitalization from './components/technologies/digital/digitalization';
import DataWarehouse from './components/technologies/digital/dataWarehouse';
import CloudTechnologies from './components/technologies/digital/cloudTechnologies';
import MobileTechnologies from './components/technologies/digital/mobileTechnologies';

// Services 
import ConsultingServices from './components/services/consultingServices';
import KnowledgeServices from './components/services/knowledgeServices';
import ManagedServices from './components/services/managedServices';

//Resources
import ETLActivities from './components/resources/blogposts/eTLActivities';
import FindingStory from './components/resources/blogposts/findingStory';
import AnalyticsPlatform from './components/resources/blogposts/analyticsPlatform';
import SeeMoreBlogs from './components/resources/blogposts/seeMoreBlogs';
import ABCDataWareHouse from './components/resources/books/aBCDataWareHouse';
import Retail101Glossary from './components/resources/books/retail101Glossary';

// Contact 
import ContactUs from './components/contact/contactUs';




function App() {
  return (
    <React.Fragment>
        <NavBar />
        <Switch>

          {/* Platform */}
            <Route path='/aboutLearning' component={AboutLearning} />
            <Route path='/appsInPlatform' component={AppsInPlatform} />
            <Route path='/aboutMy360Main' component={AboutMy360Main} />
            <Route path='/salesAnalyticsMain' component={SalesAnalyticsMain} />
            <Route path='/cashFlowAnalytics' component={CashFlowAnalytics} />

          {/* Technologies */}
            <Route path='/dataManagementMain' component={DataManagementMain} />
            <Route path='/dataIntegration' component={DataIntegration} />
            <Route path='/dataStoryTelling' component={DataStoryTelling} />
            <Route path='/openSource' component={OpenSource} />
            <Route path='/digitalization' component={Digitalization} />
            <Route path='/dataWarehouse' component={DataWarehouse} />
            <Route path='/cloudTechnologies' component={CloudTechnologies} />
            <Route path='/mobileTechnologies' component={MobileTechnologies} />

          {/* Services */}
            <Route path='/consultingServices' component={ConsultingServices} />
            <Route path='/knowledgeServices' component={KnowledgeServices} />
            <Route path='/managedServices' component={ManagedServices} />

          {/* Resources */}
            <Route path='/eTLActivities' component={ETLActivities} />
            <Route path='/findingStory' component={FindingStory} />
            <Route path='/analyticsPlatform' component={AnalyticsPlatform} />
            <Route path='/seeMoreBlogs' component={SeeMoreBlogs} />
            <Route path='/aBCDataWareHouse' component={ABCDataWareHouse} />
            <Route path='/retail101Glossary' component={Retail101Glossary} />

          {/* Contact */}
          <Route path='/contactUs' component={ContactUs} />


            <Route path="/" exact component={Home} />
        </Switch>

        <Footer />

   </React.Fragment>
  );
}

export default App;
