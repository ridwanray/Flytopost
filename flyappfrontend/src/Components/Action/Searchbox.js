import React, { useState } from 'react';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import Button from 'react-bootstrap'

const Searchbox = () => {

    const[selectedDay, setDay] = useState(undefined)

    const weightOption = [
        { value: 1, label: "1-5kg"},
        { value: 2,label: "5-10kg"},
        { value: 3,label: "10-20kg"},
        { value: 4,label: "20-40kg"},
    ];
    const cityList = [
        "Toronto", "Ottawa","Halifax","Calgary"
    ];

    const handleDayChange =(day) =>{
        setDay(day)
    };

    return (
        <div className="search_box">
        
        <h1 className="searchbox_title">Post Your Next Trip And Get Paid</h1>
            <md-card-container className="search_content" maxWidth="md">
                <form className="searchForm">
                <input className="input_bar_location" type="text" autoComplete="off" placeholder="location" />
                <DatePicker className="input_bar_date" dateFormat="dd/MM/yyyy" placeholderText="depature" type="text" onChange={handleDayChange} selected={selectedDay} ></DatePicker>
                <button className="searchBtn" type="button" >search </button>
                </form>  
            </md-card-container>
            
        </div>
    );

};
export default Searchbox;