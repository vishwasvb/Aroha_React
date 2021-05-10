import React from 'react';
import {Link} from 'react-router-dom'

const BusinessExecutivesDevelop = () => {
    return ( 
        <React.Fragment>

<div id="site-content">
            <div id="page-header">
                <div class="container">
                    <div class="row">
                        <div class="page-title">
                            <h2 class="title">Can Business Executives develop Dashboards?</h2>
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
                                            <a href="blog-business.html">
                                                <img src="images/blog/8.jpg" alt="images"/>
                                            </a>
                                        </div>
                                        <div class="entry-header">
                                            <span class="entry-time">Feb. 24, 2016</span>
                                            <h2 class="entry-title">Can Business Executives develop Dashboards?</h2>
                                            <div class="entry-meta">
                                                <span>By</span>
                                                <span class="entry-categories"><a href="#">Rajesh Kumar Shanmugam</a></span>
                                                <span class="entry-comments-link"><a href="#">3</a></span>
                                            </div>
                                        </div>                                       
                                        <div class="entry-content">
                                            <p>Most of the Dashboard software companies tell the businesses that Business executives can develop their own Dashboards or they can un earth the patterns in the data with out any IT help. In less than 5% of scenarios, this may be true.</p>
                                            <blockquote><p>Part of the problem is, not all end users have the skills to understand the data what organizations have, the format in which its coming in, the blending / joining methods to use to relate datasets. Here things don't go according to their expectation and they give up or end up loosing more time or cursing the product what they use.</p></blockquote>
                                            <p>In reality, a Software Engineer needs some training to explore and relate the tool to their past experience in reporting and analysis. We start comparing where this tool gives better performance than others, where it causes the pain compared to others, ease of use, administrative abilities and the list goes on.</p>
                                           
                                            <p class="box-readmore ">
                                                <a href="https://www.linkedin.com/pulse/can-business-executives-develop-dashboards-rajesh-shanmugam/" class="text-left" target="blank">Read More</a>
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
 
export default BusinessExecutivesDevelop;