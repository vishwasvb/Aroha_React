import React from 'react';

import {Link} from 'react-router-dom'

const CalculatingROI = () => {
    return ( 
        <React.Fragment>

             <div id="site-content">
            <div id="page-header">
                <div class="container">
                    <div class="row">
                        <div class="page-title">
                            <h2 class="title">Ways of calculating ROI from BIDW implementations</h2>
                        </div>
                        <div id="page-breadcrumbs">            
                            <nav class="breadcrumb-trail breadcrumbs">
                                <h2 class="trail-browse">You are here:</h2>
                                <ul class="trail-items">
                                    <li class="trail-item trail-begin">Blog Details</li>
                                    <li class="trail-item trail-end"><Link to="/seeMoreBlogs">/Back</Link></li>
                                </ul>
                            </nav>           
                        </div>
                    </div>
                </div>
            </div>

            <div id="page-body">
                <div class="container">
                    <div class="row">
                        <div class="blog-single">
                            <div class="main-content">
                                <article class="post">
                                    <div class="entry-wrapper">
                                        <div class="entry-cover">
                                            <a href="blog-rio.html">
                                                <img src="images/blog/6.jpg" alt="images" />
                                            </a>
                                        </div>
                                        <div class="entry-header">
                                            <span class="entry-time">May 5, 2016</span>
                                            <h2 class="entry-title">Ways of calculating ROI from BIDW implementations</h2>
                                            <div class="entry-meta">
                                                <span>By</span>
                                                
                                               
                                                <span class="entry-categories"><a href="#">Rajesh Kumar Shanmugam</a></span>
                                                <span class="entry-comments-link"><a href="#">3</a></span>
                                            </div>
                                        </div>                                       
                                        <div class="entry-content">
                                            <p>Most of us read that, about 75% of implementations don't give the ROI in BIDW related projects. When I first started to work in BIDW projects, I used to wonder why management / team is not able to prove the ROI. After being in this area for a while, its very evident that why we say 75% of implementations did not give quantifiable ROI.</p>
                                            <blockquote><p>The Program Manager / Owner is responsible to keep an eye on how many different business managers used the system which equips them with better negotiation skills. This can be done by a CIO level Survey regarding the BIDW application usage.</p></blockquote>
                                            <b><p>Store the following information to prove the VALUE of BI applications.</p></b>
                                            <p>1. Usage of Application<br/>
                                                2. Decision Maker Stories and Impact<br/>
                                                3. Streamlining the data transfer between BIDW and Downstream applications</p>
                                                <p class="box-readmore ">
                                                    <a href="https://www.linkedin.com/pulse/ways-calculating-roi-from-bidw-implementations-rajesh-shanmugam/" class="text-left" target="blank">Read More</a>
                                                </p>
                                                <hr/>
                                            </div>
                                        </div>
                                        </article>
                                    </div>
                                </div>
                                </div>
                                </div>
                                </div>
                                </div>
                      
                        

        </React.Fragment>
     );
}
 
export default CalculatingROI;
