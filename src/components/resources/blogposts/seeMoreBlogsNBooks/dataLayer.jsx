import React from 'react';

import {Link} from 'react-router-dom'

const DataLayer = () => {
    return ( 
        <React.Fragment>

<div id="site-content">
            <div id="page-header">
                <div class="container">
                    <div class="row">
                        <div class="page-title">
                            <h2 class="title">Data Layer for Visual Analytics</h2>
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
                                            <a href="blog-datalayer.html">
                                                <img src="images/blog/5.png" alt="images" />
                                            </a>
                                        </div>
                                        <div class="entry-header">
                                            <span class="entry-time">Dec. 17, 2016</span>
                                            <h2 class="entry-title">Data Layer for Visual Analytics</h2>
                                            <div class="entry-meta">
                                                <span>By</span>
                                                
                                               
                                                <span class="entry-categories"><a href="#">Rajesh Kumar Shanmugam</a></span>
                                                <span class="entry-comments-link"><a href="#">3</a></span>
                                            </div>
                                        </div>                                     
                                        <div class="entry-content">
                                            <p>When companies sell Visual Analysis tools, they use standard excel or csv data (in many cases) to show case the ability of the tool. Once the tool comes into IT infrastructure, team assumes that tool fits in the existing environment with ease.</p>
                                            <p>But things go wrong in first few months if existing data is not stored in a way the visual tool consumes. We may have data in the format which is not suitable to consume by the visual analytics tool (if you are having more reports based on stored procedures, its true in most cases).</p>
                                            <blockquote><p>Any Visual Analysis tool in the market today is designed by keeping the current issues in OALP tools.</p></blockquote>
                                            <p><b>What are the current issues in the current OLAP tools?</b></p>
                                            <p>It cannot perform very well on huge amount of data pull (slow response time) in some cases.
                                                Even if we refresh the data once in a day in OLAP tools, the file size becomes very big as there is no compression happens in the data layer of the report.</p>
                                         
                                            <p class="box-readmore ">
                                                <a href="https://www.linkedin.com/pulse/data-layer-visual-analytics-rajesh-shanmugam/" class="text-left" target="blank">Read More</a>
                                            </p>
                                        </div>
                                    </div>
                                </article>
                                <hr/>
                                
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        </React.Fragment>
     );
}
 
export default DataLayer;
