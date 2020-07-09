import React, { useState } from 'react';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
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
        
        <h1 className="searchbox_title">POST OR TRAVEL</h1>
            <md-card-container className="search_content" maxWidth="md">
                <form className="searchForm">
                <input className="input_bar_location" type="text" autoComplete="on" placeholder="destination" />
                <DatePicker className="input_bar_date" dateFormat="dd/MM/yyyy" placeholderText="depature date" type="date" onChange={handleDayChange} selected={selectedDay} ></DatePicker>
                <button className="searchBtn" type="button" >search </button>
                </form>  
            </md-card-container>
            
        </div>
    );

};
export default Searchbox;