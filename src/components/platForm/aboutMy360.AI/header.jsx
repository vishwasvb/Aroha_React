import React from 'react';

const Header = () => {
    return ( 
        <React.Fragment>

<header>
            <h2 class="h2-heading center">Mission of this Platform </h2>
            <div class="owl-carousel owl-theme">
                <div class="item">
                    <img src="images/slides/1.jpg" alt="images not found" />
                    <div class="cover">
                        <div class="container">
                            <div class="header-content">
                                <div class="line"></div>
                                <h2>Insights</h2>
                                <ul class="c">
                                    <li>Show Patterns & Trends of your DATA.</li>
                                </ul>
                              
                            </div>
                        </div>
                     </div>
                </div>                    
                <div class="item">
                    <img src="images/slides/2.jpg" alt="images not found" />
                    <div class="cover">
                        <div class="container">
                            <div class="header-content">
                                <div class="line animated bounceInLeft"></div>
                                <h2>Forecasts</h2>
                                <ul class="c">
                                    <li>Use Machine Learning (ML) to know the Knowns and Unknowns.. to begin with.</li>
                                </ul>
                             
                            </div>
                        </div>
                     </div>
                </div>                
                <div class="item">
                    <img src="images/slides/3.jpg" alt="images not found" />
                    <div class="cover">
                        <div class="container">
                            <div class="header-content">
                                <div class="line animated bounceInLeft"></div>
                                <h2>Partnership</h2>
                                <ul class="c">
                                    <li>Be an Analytical Partner in every step of your organization growth.</li>
                                </ul>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
        </header>

        </React.Fragment>
     );
}
 
export default Header;