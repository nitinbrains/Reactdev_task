import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import Services from '../components/Services'
import Navbar from '../components/Navbar'


const Home=()=> {
    return (
        <div>
            <Navbar/>
            <Hero>
                <Banner title="Introducing Homes" subtitle="Deluxe Homes starting at Rs.9999">
                <Link to='/rooms' className="btn-primary">
                    Our Homes
                </Link>
                </Banner>
            </Hero>
            <Services/>
        </div>
    )
}


export default Home;
