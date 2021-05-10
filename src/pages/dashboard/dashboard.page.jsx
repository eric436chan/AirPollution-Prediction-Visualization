import React from 'react';

import AirQuality from "../../components/airquality/airquality.component.jsx";
import Articles from "../../components/articles/articles.component.jsx";
import Dashboard from "../../components/dashboard/dashboard.component.jsx";
import Facts from "../../components/facts/facts.component.jsx";

import './dashboardpage.style.scss'

export default class DashboardPage extends React.Component{

    constructor(props){
        super(props);
    }


    render(){
        return(

            <div className='dashboard-page'>
                
                <AirQuality />
                <div className='graph-container dashboard'>

          <Facts/>
          <br/>
          <div>
          <Dashboard/>
          </div>
        </div>
       
        <div className='article-container dashboard'>
          <Articles/>
        </div>
            </div>
        );
    }

}