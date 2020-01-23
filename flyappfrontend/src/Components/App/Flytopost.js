import React from 'react';

import Searchbox from '../Action/Searchbox';
import Body from '../Body/Body';
import Navigation from './../Header/Navigation';
import Footer from '../Footer/Footer';
import '../../styles/style.scss';
import '../../styles/modal.scss';
import '../../Images/takeoff.png';
import Trips from '../Body/trips';

const Flytopost = () => {
    // contacts = []

    // componentDidMount=()=> {
    //     fetch('http://flytopost/frontend/users')
    //     .then(res => res.json())
    //     .then((data) => {
    //       this.setState({ contacts: data })
    //     })
    //     .catch(console.log)
    //   }

    return (

        <div>
            <Navigation />
            <Searchbox />
            <Body />
            <Trips/>
            <Footer />
        </div>

    );
 
};

export default Flytopost;