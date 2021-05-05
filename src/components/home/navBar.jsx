import React from 'react';

import {Link} from 'react-router-dom'

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
                                        <img src='images/logosmall.png' alt="images" />
                                </div>
                                <div class="btn-menu">
                                    <span></span>
                                </div>
                           
                                <div class="nav-wrap">                                
                                    <nav id="mainnav" class="mainnav">
                                        <ul class="menu">
                                            <li class="home active">
                                                <Link to="/">Home</Link>
                                            </li>
                                            
                                            <li class="resources has-mega-menu">
                                                <Link class="has-mega" to="#">Platform</Link>
                                                <div class="submenu mega-menu">
                                                    <div class="col-md-12 tabs-container">
                                                        <div class="col-md-2 col-sm-2 no-padding">
                                                          <ul class="nav nav-tabs tabs-left">
                                                            <li class="active" id="defaultOpen" onmouseover="learning(event, 'tab1-v')">Learning360.AI</li>
                                                            <li onmouseover="openSales(event, 'tab2-v')">My360.AI</li>
                                                          </ul>
                                                        </div>
                                                      
                                                        <div class="col-md-10 col-sm-10 no-padding1"> 
                                                          <div class="tab-content">
                                                            <div class="tabpane active" id="tab1-v">
                                                                <div class="col-md-3 col-sm-3 border-right">
                                                                    <Link to="/aboutLearning"><img src="images/company1.png" />
                                                                    <p>About Learning360.AI</p></Link>
                                                                  </div>
                                                                <div class="col-md-3 col-sm-3 border-right">
                                                                    <Link to="/appsInPlatform"><img src="images/company4.png" />
                                                                    <p>Apps in Platform</p></Link>
                                                                </div>
                                                              
                                                              <div class="clearfix"></div>
                                                      
                                                            </div>
                                                            <div class="tabpane active" id="tab2-v">
                                                                <div class="col-md-3 col-sm-3 border-right">
                                                                    <Link to="/aboutMy360Main"><img src="images/company4.png" />
                                                                    <p>About My360.AI </p></Link>
                                                                  </div>
                                                                <div class="col-md-3 col-sm-3 border-right">
                                                                    <Link to="/salesAnalyticsMain"><img src="images/company1.png" />
                                                                    <p>Sales Analytics </p></Link>
                                                                  </div>
                                                                  <div class="col-md-3 col-sm-3 border-right">
                                                                    <Link to="financeAnalytics.html"><img src="images/company2.png" />
                                                                    <p>Cash Flow Analytics</p></Link>
                                                                </div>
                                                              <div class="clearfix"></div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div class="clearfix"></div>
                                                      </div>
                                                      
                                                </div>
                                            </li>
                                            <li class="has-mega-menu">
                                                <Link class="has-mega" to="#mega">Technologies</Link>
                                                <div class="submenu mega-menu">
                                                    <div class="row">
                                                            <div class="col-md-3 col-sm-3 col-xs-6">
                                                                <div class="entry-cover">
                                                                    <Link to="dataManagment.html">
                                                                        <img src="images/huddle.png" alt="images" />
                                                                        <span>Data Management</span>
                                                                    </Link>
                                                                </div>
                                                            </div>

                                                            <div class="col-md-3 col-sm-3 col-xs-6">
                                                                <div class="entry-cover">
                                                                    <Link to="dataIntegration.html">
                                                                        <img src="images/job-portal.png" alt="images" />
                                                                        <span>Data Integration and Virtualization</span>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-3 col-sm-3 col-xs-6">
                                                                <div class="entry-cover">
                                                                    <Link to="dataReport.html">
                                                                        <img src="images/App1.png" alt="images" />
                                                                        <span>Data Story Telling</span>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-3 col-sm-3 col-xs-6">
                                                                <div class="entry-cover">
                                                                    <Link to="digitalTechnologies.html">
                                                                        <img src="images/App2.png" alt="images" />
                                                                        <span>Digitalization</span>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            <div class="flat-divider d40px"></div>
                                                            
                                                        
                                                        <div class="flat-divider d40px"></div>
                                                    </div>
                                                    <div class="row">
                                                            <div class="col-md-3 col-sm-3 col-xs-6">
                                                                <div class="entry-cover">
                                                                    <Link to="dataWarehouse.html">
                                                                        <img src="images/App3.png" alt="images" />
                                                                        <span>Data Warehouse & Data Lakes</span>
                                                                    </Link>
                                                                </div>
                                                            </div>

                                                            <div class="col-md-3 col-sm-3 col-xs-6">
                                                                <div class="entry-cover">
                                                                    <Link to="cloudTechnologies.html">
                                                                        <img src="images/cloud.png" alt="images" />
                                                                        <span>Cloud Technologies</span>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-3 col-sm-3 col-xs-6">
                                                                <div class="entry-cover">
                                                                    <Link to="mobileTechnologies.html">
                                                                        <img src="images/DataAnalysis.png" alt="images" />
                                                                        <span>Mobile Technologies</span>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-3 col-sm-3 col-xs-6">
                                                                <div class="entry-cover">
                                                                    <Link to="openSource.html">
                                                                        <img src="images/DataAnalysis.png" alt="images" />
                                                                        <span>Open Source</span>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="has-mega-menu">
                                                <Link class="has-mega" to="#mega">Services</Link>
                                                <div class="submenu mega-menu">
                                                    <div class="row">
                                                        <div class="col-md-3 col-sm-3">
                                                            <div class="entry-cover">
                                                                <Link to="consulting.html">
                                                                    <img src="images/services/services3.png" alt="images" />
                                                                    <span>Consulting Services</span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-3 col-sm-3">
                                                            <div class="entry-cover">
                                                                <Link to="knowledge.html">
                                                                    <img src="images/services/services1.png" alt="images" />
                                                                    <span>Knowledge Service</span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                            <div class="col-md-3 col-sm-3">
                                                                <div class="entry-cover">
                                                                    <Link to="projectService.html">
                                                                        <img src="images/services/services2.png" alt="images" />
                                                                        <span>Managed Services</span>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                </div>
                                            </li>     
                                            <li class="resources has-mega-menu">
                                                <Link class="has-mega" to="#">Resources</Link>
                                                <div class="submenu mega-menu">
                                                    <div class="row">
                                                            <div class="col-md-4 ">
                                                                <div class="mega-title">
                                                                    <h5 class="btn-mega">BLOGPOSTS</h5>
                                                                </div>
                                                                <ul class="mega-menu-sub"> 
    <li><Link to="blog-EltActivity.html">Top 10 ETL Activities in DW Projects</Link></li>
    <li><Link to="blog-storytelling.html">Finding Story / 360 in Data sets</Link></li>                  
    <li><Link to="blog-platform.html">Importance of Analytics Platform for Small Business</Link></li>
    <li><Link to="blog.html" class="resources_data">See more blogs</Link></li>
</ul>
                                                            </div>
                                                            <div class="col-md-4">
                                                                <div class="mega-title">
                                                                    <h5 class="btn-mega">Books</h5>
                                                                </div>
                                                                <ul class="mega-menu-sub"> 
                                                                   <li><Link to="books.html">ABC dataWarehousing</Link></li>
                                                                  <li><Link to="books1.html">Retail 101 Glossary</Link></li>
                                                                    
                                                                </ul>
                                                            </div>
                                                            
                                                        </div>
                                                    </div>
                                            </li>
                                            
                                            <li class="resources has-mega-menu">
                                                <Link class="has-mega" to="#">Company</Link>
                                                <div class="submenu mega-menu">
                                                    <div class="row">
                                                            <div class="col-md-4">
                                                                <div class="mega-title">
                                                                    <h5 class="btn-mega">About</h5>
                                                                </div>
                                                                <ul class="mega-menu-sub"> 
                                                                   
                                                                    <li><Link to="approach.html">Our Approach</Link></li>                  
                                                                    <li><Link to="culture.html">Our Culture</Link></li>
                                                                    <li><Link to="team.html">Our Team</Link></li>                                                   
                                                                  
                                                                </ul>
                                                            </div>
                                                            <div class="col-md-4">
                                                                <div class="mega-title">
                                                                    <h5 class="btn-mega">Careers</h5>
                                                                </div>
                                                                <ul class="mega-menu-sub"> 
                                                                    <li><Link to="career.html">SQL Developer</Link></li>
                                                                    <li><Link to="career.html">IT Recruiter</Link></li>     
                                                                    <li><Link to="career.html">BlockChain Developer</Link></li>         
                                                                    <li><Link to="positions.html" class="resources_data">See All Positions</Link></li>
                                                                    
                                                                </ul>
                                                            </div>
                                                            
                                                           
                                                    </div>
                                                  
                                                </div>
                                            </li>
                                            <li><Link to="contact.html">Contact</Link></li>
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