import React from 'react';

import {Link} from 'react-router-dom'

// import image from '../../../public/images/icon/'



const NavBar = () => {
    return ( 
        <React.Fragment>

<div id="site-header">
            <header id="header" class="header clearfix">
                <div class="header-wrap clearfix">
                    <div class="container">
                        <div class="row">
                            <div class="flat-wrapper">
                                <div id="logo" class="logo">
                                    <img src={"images/logosmall.png"} alt="images" />
                                </div>
                                <div class="btn-menu">
                                    <span></span>
                                </div>

                                <div class="nav-wrap">
                                    <nav id="mainnav" class="mainnav">
                                        <ul class="menu">
                                            <li class="home ">
                                                <a href="/">Home</a>
                                            </li>
                                            
                                            <li class="resources has-mega-menu">
                                                <Link class="has-mega" to="#">Platform</Link>
                                                <div class="submenu mega-menu menu2">
                                                    <div class="col-md-12 tabs-container">
                                                        <div class="col-md-3 col-sm-10 no-padding1">
                                                          <ul class="nav nav-tabs tabs-left">
                                                            <li class="active" id="defaultOpen" onmouseover="learning(event, 'tab1-v')">Learning360.AI</li>
                                                            <li onmouseover="openSales(event, 'tab2-v')">My360.AI</li>
                                                          </ul>
                                                        </div>
                                                      
                                                        <div class="col-md-8 col-sm-10 no-padding1"> 
                                                          <div class="tab-content">
                                                            <div class="tabpane active tab" id="tab1-v">
                                                                <ul class="border-right">
                                                                    <li class="span-text">
                                                                        <Link to="/aboutLearning"><img src="images/icon/open-book.png" />
                                                                        <span>About Learning360.AI</span></Link>
                                                                    </li>
                                                                    <li class="span-text">
                                                                        <Link to="/appsInPlatform"><img src="images/icon/mobile-app.png" />
                                                                        <span>Apps in Platform</span></Link>
                                                                    </li>
                                                                </ul>
                                                              <div class="clearfix"></div>
                                                            </div>
                                                            <div class="tabpane active tab" id="tab2-v">
                                                                <ul class="border-right">
                                                                    <li class="span-text">
                                                                        <Link to="aboutMy360Main"><img src="images/icon/about.png" />
                                                                        <span>About My360.AI </span></Link>
                                                                    </li>
                                                                    <li class="span-text">
                                                                        <Link to="/salesAnalyticsMain"><img src="images/icon/sales.png" />
                                                                        <span>Sales Analytics </span></Link>
                                                                    </li>
                                                                    <li class="span-text">
                                                                        <Link to="/cashFlowAnalytics"><img src="images/icon/cash-flow.png" />
                                                                        <span>Cash Flow Analytics </span></Link>
                                                                    </li>
                                                                </ul>
                                                              <div class="clearfix"></div>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div class="clearfix"></div>
                                                    </div>

                                                </div>
                                            </li>
                                            
                                            <li class="has-mega-menu">
                                                <Link class="has-mega" to="#">Technologies</Link>
                                                <div class="submenu mega-menu menu2">
                                                    <div class="col-md-12 tabs-container">
                                                        <div class="col-md-3 col-sm-10 no-padding1">
                                                          <ul class="nav nav-tabs tabs-left">
                                                            <li class="active" id="defaultOpen1" onmouseover="learning1(event, 'tab1-v1')">Data</li>
                                                            <li onmouseover="openSales1(event, 'tab2-v2')">Digital</li>
                                                            
                                                          </ul>
                                                        </div>
                                                            <div class="col-md-9 col-sm-10 no-padding1">
                                                                <div class="tab-content">
                                                                    <div class="tabpane1 active tab1" id="tab1-v1">
                                                                        <ul class="border-right">
                                                                            <li class="span-text">
                                                                                <Link to="/dataManagementMain"><img src="images/icon/infrastructure.png" />
                                                                                <span>Data Management</span></Link>
                                                                            </li>
                                                                            <li class="span-text">
                                                                                <Link to="/dataIntegration"><img src="images/icon/descriptor.png" />
                                                                                    <span>Data Integration and Virtualization</span></Link>
                                                                            </li>
                                                                            <li class="span-text">
                                                                                <Link to="/dataStoryTelling"><img src="images/icon/storytelling.png" />
                                                                                    <span>Data Story Telling</span></Link>
                                                                            </li>
                                                                            <li class="span-text">
                                                                                <Link to="/openSource"><img src="images/icon/open-source.png" />
                                                                                    <span>Open Source</span></Link>
                                                                            </li>
                                                                        </ul>
                                                                        <div class="clearfix"></div>
                                                                    </div>
                                                                    <div class="tabpane1" id="tab2-v2">
                                                                        <ul class="border-right">
                                                                            <li class="span-text">
                                                                                <Link to="/digitalization"><img src="images/icon/webinar.png" />
                                                                                <span>Digitalization</span></Link>
                                                                            </li>
                                                                            <li class="span-text">
                                                                                <Link to="/dataWarehouse"><img src="images/icon/big-data.png" />
                                                                                    <span>Data Warehouse & Data Lakes</span></Link>
                                                                            </li>
                                                                            <li class="span-text">
                                                                                <Link to="/cloudTechnologies"><img src="images/icon/cloud-computing.png" />
                                                                                    <span>Cloud Technologies</span></Link>
                                                                            </li>
                                                                            <li class="span-text">
                                                                                <Link to="mobileTechnologies"><img src="images/icon/social-media.png" />
                                                                                <span>Mobile Technologies</span></Link>
                                                                            </li>
                                                                        </ul>
                                                                        <div class="clearfix"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        <div class="clearfix"></div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="has-mega-menu">
                                                <Link class="has-mega" to="#mega">Services</Link>
                                                <div class="submenu mega-menu menu2 menu3">
                                                        <div class="col-md-12 col-sm-10 padding1">
                                                            <ul class="border-right">
                                                                <li class="span-text">
                                                                    <Link to="/consultingServices"><img src="images/icon/customer-service.png" />
                                                                    <span>Consulting Services</span></Link>
                                                                </li>
                                                                <li class="span-text">
                                                                    <Link to="/knowledgeServices"><img src="images/icon/thought.png" />
                                                                    <span>Knowledge Services</span></Link>
                                                                </li>
                                                                <li class="span-text">
                                                                    <Link to="/managedServices"><img src="../static/images/icon/managed.png" />
                                                                    <span>Managed Services</span></Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                </div>
                                            </li>
                                            <li class="resources has-mega-menu">
                                                <Link class="has-mega" to="#">Resources</Link>
                                                <div class="submenu mega-menu menu2">
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="mega-title">
                                                                <h5 class="btn-mega">BLOGPOSTS</h5>
                                                            </div>
                                                            <ul class="mega-menu-sub">
                                                                <li><Link to="/eTLActivities">Top 10 ETL
                                                                        Activities in DW Projects</Link></li>
                                                                <li><Link to="/findingStory">Finding Story / 360
                                                                        in Data sets</Link></li>
                                                                <li><Link to="/analyticsPlatform">Importance of Analytics
                                                                        Platform for Small Business</Link></li>
                                                                <li><Link to="/seeMoreBlogs" class="resources_data">See more
                                                                        blogs</Link></li>
                                                            </ul>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="mega-title">
                                                                <h5 class="btn-mega">Books</h5>
                                                            </div>
                                                            <ul class="mega-menu-sub">
                                                                <li><Link to="/aBCDataWareHouse">ABC dataWarehousing</Link></li>
                                                                <li><Link to="/retail101Glossary">Retail 101 Glossary</Link></li>
                                                              
                                                            </ul>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </li>
                                            
                                            <li class="resources has-mega-menu">
                                                <Link class="has-mega" to="#">Company</Link>
                                                <div class="submenu mega-menu menu">
                                                    <div class="row">
                                                        <div class="col-md-4">
                                                            <div class="mega-title">
                                                                <h5 class="btn-mega">About</h5>
                                                            </div>
                                                            <ul class="mega-menu-sub">
                                                                
                                                                <li><Link to="/ourApproach">Our Approach</Link></li>
                                                                <li><Link to="/ourCulture">Our Culture</Link></li>
                                                                <li><Link to="/ourTeam">Our Team</Link></li>
                                                                
                                                            </ul>
                                                        </div>
                                                        <div class="col-md-4 ">
                                                            <div class="mega-title">
                                                                <h5 class="btn-mega">Careers</h5>
                                                            </div>
                                                            <ul class="mega-menu-sub">
                                                                <li><Link to="/dotNetDeveloper">.NET Developer</Link></li>
                                                                <li><Link to="/angularDeveloper">Angular Developer</Link></li>
                                                                <li><Link to="/mSBIDeveloper">MSBI Developer</Link></li>
                                                                <li><Link to="/seeAllPositions" class="resources_data">See
                                                                        All Positions</Link></li>

                                                            </ul>
                                                        </div>


                                                    </div>

                                                </div>
                                            </li>
                                           
                                            <li><Link to="/contactUs">Contact</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>


        </React.Fragment>
     );
}
 
export default NavBar;