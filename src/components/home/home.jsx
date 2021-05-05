import React from 'react';

import Header from './header'
import About from './about'
import OurValues from './ourValues';
import MyServises from './myServises'
import Testimonial from './testimonial'
import Clients from './clients'


const Home = () => {
    return ( 
        <React.Fragment>
           
            <Header />
            <About />
            <OurValues />
            <MyServises />
            <Testimonial />
            <Clients />

        </React.Fragment>
       
     );
}
 
export default Home;