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

    //More Blogs
      import ETLActivitiesMore from './components/resources/blogposts/seeMoreBlogsNBooks/eTLActivities';
      import FindingStoryMore from './components/resources/blogposts/seeMoreBlogsNBooks/findingStoryMore';
      import AnalyticsPlatformMore from './components/resources/blogposts/seeMoreBlogsNBooks/analyticsPlatformMore';
      import DataCitizens from './components/resources/blogposts/seeMoreBlogsNBooks/dataCitizens';
      import ConversationalBI from './components/resources/blogposts/seeMoreBlogsNBooks/conversationalBI';
      import ModernizationofAnalytical from './components/resources/blogposts/seeMoreBlogsNBooks/modernizationOfAnalytical';
      import DataAnalyst from './components/resources/blogposts/seeMoreBlogsNBooks/dataAnalyst';
      import VisualizationAnalysis from './components/resources/blogposts/seeMoreBlogsNBooks/visualizationAnalysis';
      import DashboardDesign from './components/resources/blogposts/seeMoreBlogsNBooks/dashboardDesign';
      import CultureInAnEnterprise from './components/resources/blogposts/seeMoreBlogsNBooks/cultureInAnEnterprise';
      import DataScienceTeam from './components/resources/blogposts/seeMoreBlogsNBooks/dataScienceTeam';
      import DataLayer from './components/resources/blogposts/seeMoreBlogsNBooks/dataLayer';
      import CalculatingROI from './components/resources/blogposts/seeMoreBlogsNBooks/calculatingROI';
      import InsightVisualizationAndAnalytics from './components/resources/blogposts/seeMoreBlogsNBooks/insightVisualizationAndAnalytics';
      import BusinessExecutivesDevelop from './components/resources/blogposts/seeMoreBlogsNBooks/businessExecutivesDevelop';

    // More Books
      import BooksMore from './components/resources/blogposts/seeMoreBlogsNBooks/booksMore';


//Company
import OurApproach from './components/company/about/ourApproach';
import OurCulture from './components/company/about/ourCulture';
import OurTeam from './components/company/about/ourTeam';
import DotNetDeveloper from './components/company/careers/dotNetDeveloper';
import AngularDeveloper from './components/company/careers/angularDeveloper';
import MSBIDeveloper from './components/company/careers/mSBIDeveloper';
import SeeAllPositions from './components/company/careers/seeAllPositions';

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

            {/* More Blogs */}
              <Route path='/eTLActivitiesMore' component={ETLActivitiesMore} />
              <Route path='/findingStoryMore' component={FindingStoryMore} />
              <Route path='/analyticsPlatformMore' component={AnalyticsPlatformMore} />
              <Route path='/dataCitizens' component={DataCitizens} />
              <Route path='/conversationalBI' component={ConversationalBI} />
              <Route path='/modernizationofAnalytical' component={ModernizationofAnalytical} />
              <Route path='/dataAnalyst' component={DataAnalyst} />
              <Route path='/visualizationAnalysis' component={VisualizationAnalysis} />
              <Route path='/dashboardDesign' component={DashboardDesign} />
              <Route path='/cultureInAnEnterprise' component={CultureInAnEnterprise} />
              <Route path='/dataScienceTeam' component={DataScienceTeam} />
              <Route path='/dataLayer' component={DataLayer} />
              <Route path='/calculatingROI' component={CalculatingROI} />
              <Route path='/insightVisualizationAndAnalytics' component={InsightVisualizationAndAnalytics} />
              <Route path='/businessExecutivesDevelop' component={BusinessExecutivesDevelop} />

            {/* More Books */}
              <Route path='/booksMore' component={BooksMore} />


          {/* Company */}
            <Route path='/ourApproach' component={OurApproach} />
            <Route path='/ourCulture' component={OurCulture} />
            <Route path='/ourTeam' component={OurTeam} />
            <Route path='/dotNetDeveloper' component={DotNetDeveloper} />
            <Route path='/angularDeveloper' component={AngularDeveloper} />
            <Route path='/mSBIDeveloper' component={MSBIDeveloper} />
            <Route path='/seeAllPositions' component={SeeAllPositions} />

          {/* Contact */}
            <Route path='/contactUs' component={ContactUs} />
        
          {/* Home */}
            <Route path='/home' component={Home} />
            <Route path="/" exact component={Home} />
        </Switch>

        <Footer />

   </React.Fragment>
  );
}

export default App;
