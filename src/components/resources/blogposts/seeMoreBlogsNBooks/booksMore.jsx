import React from 'react';
import {Link} from 'react-router-dom';

const BooksMore = () => {
    return ( 
        <React.Fragment>

<div id="site-content">
                <div class="container">
                    <div id="page-body">
                        <div class="flat-row pad-top100px pad-bottom80px">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-12  text-center">
                                        <div class="flat-tabs">
                                            <ul class="menu-tabs">
                                                <li><Link to="/seeMoreBlogs">Blogs</Link></li>
                                                <li class="active"><Link to="#">Books</Link></li>
                                               
                                            </ul>
                                            <div class="content-tab">
                                                
        
                                                <div class="content-inner">
                                                    <div class="row">
                                                        <div class="col-md-4 col-md-offset-2">
                                                            <Link to="/aBCDataWareHouse"><div class="imagebox">
                                                                <div class="box-wrapper">
                                                                    <div class="box-image">
                                                                        <img src="images/blog/book.jpg" alt="images"/>
                                                                    </div>
                                                                    <div class="box-header">
                                                                        <h3 class="box-title">
                                                                            <Link to="books.html">ABC of Datawarehousing</Link>    
                                                                        </h3>
                                                                    </div>
                                                                    <div class="box-content text-size">
                                                                        <div class="box-desc">Every thing we do in the world have some part of design principles. </div>
                                                                        <p class="box-readmore">
                                                                            <Link to="books.html">Read More</Link>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div></Link>
                                                        </div>
                            
                                                        <div class="col-md-4 ">
                                                            <Link to="/retail101Glossary"><div class="imagebox">
                                                                <div class="box-wrapper">
                                                                    <div class="box-image">
                                                                        <img src="images/blog/book1.jpg" alt="images"/>
                                                                    </div>
                                                                    <div class="box-header">
                                                                        <h3 class="box-title">
                                                                            <Link to="books1.html">Book2</Link>    
                                                                        </h3>
                                                                    </div>
                                                                    <div class="box-content text-size">
                                                                        <div class="box-desc">For those looking to invest in the growth of your business or create.</div>
                                                                        <p class="box-readmore">
                                                                            <Link to="books1.html">Read More</Link>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div></Link>
                                                        </div>
                            
                                                    </div>
                                                </div>
        
                                                    
                                            </div>
                                        </div>
                                    </div>
        
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

           
        </div>


        </React.Fragment>
     );
}
 
export default BooksMore;