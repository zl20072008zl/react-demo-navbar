import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

class NavBar extends React.Component{
    constructor(){
        super();
        this.state = {
            data : [
                {
                    "menuName":"Jobs",
                    "items":[
                        {
                            "text":"Job bank",
                            "path":"/job_bank"
                        },
                        {
                            "text":"Find a job",
                            "path":"/find_job"
                        },
                        {
                            "text":"Training",
                            "path":"/training"
                        }
                    ]
                },
                {
                    "menuName":"Immigration",
                    "items":[
                        {
                            "text":"My Application",
                            "path":"/my_application"
                        },
                        {
                            "text":"Immigrate",
                            "path":"/immigrate"
                        },
                        {
                            "text":"Visit",
                            "path":"/visit"
                        },
                        {
                            "text":"Work",
                            "path":"/work"
                        },
                        {
                            "text":"Study",
                            "path":"/study"
                        }
                    ]
                },
                {
                    "menuName":"Travel",
                    "items":[
                        {
                            "text":"Travel Advice and Advisories",
                            "path":"/travel_advice_advisories"
                        },
                        {
                            "text":"Canadian attractions, events and experiences",
                            "path":"/canadian_attractions_events_experiences"
                        },
                        {
                            "text":"Canadian passports",
                            "path":"/canadian_passports"
                        },
                        {
                            "text":"Travelling abroad",
                            "path":"/travelling_abroad"
                        }
                    ]
                }
            ]
        }
    }

    render(){
        return(
            <div className="navbar">
                {this.state.data.map((menu,i) => 
                <DropDown key = {i} menuName = {menu.menuName}
                items = {menu.items}/>
                )}
            </div>
        );
    }
}

class DropDown extends React.Component{
    render(){
        return(
            <div className="dropdown">
                <button className="dropbtn">{this.props.menuName} 
                <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                <DropDownItem items = {this.props.items}/>
                </div>
            </div> 
        );
    }
}

class DropDownItem extends React.Component{
    render(){
        return(
            <div>
                {this.props.items.map((item,i) =>
                    <a href="#" key = {i}>
                    <Link to={item.path}>{item.text}</Link>
                    </a>
                )}
            </div>
        );
    }
}

export default NavBar;