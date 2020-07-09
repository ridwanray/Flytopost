import React from 'react';

import Searchbox from '../Action/Searchbox';
import Body from '../Body/Body';
import Menu from './../Header/Menu';
import Footer from '../Footer/Footer';
import Trips from '../Body/trips';
import '../../styles/style.scss';
import '../../styles/modal/_modal.scss';
import '../../Images/takeoff.png';


const Flytopost = () => {

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
            <Menu />
            <Searchbox />
            <Body />
            <Trips/>
            <Footer />
        </div>

    );
 
};

export default Flytopost;