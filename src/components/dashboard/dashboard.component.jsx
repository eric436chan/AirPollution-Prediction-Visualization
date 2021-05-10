import React, {Component} from 'react';
import {Tabs, Tab} from 'react-bootstrap';


import AirQualityLineChart from "./graphs/airqualitylinechart.component.jsx";
import EmissionsLinechart from "./graphs/emissionlinechart.component.jsx";
import OpenWeatherMapHistorical from './graphs/historical/openweathermap-historical.component.jsx';
import BroadwayHistorical from './graphs/historical/broadway-historical.component.jsx';
import MemorialColiseumHistorical from './graphs/historical/memorialcoliseum-historical.component'
import OpenWeatherMapLive from './graphs/live/openweathermap-live.component.jsx';
import BroadwayLive from './graphs/live/broadway-live.component.jsx';
import MemorialColiseumLive from './graphs/live/memorialcoliseum-live.component.jsx';
import BarChart from "./graphs/barchart.component.jsx";
import LincolnHeightsLive from './graphs/live/lincolnheights-live.component.jsx';
import LincolnHeightsHistorical from './graphs/historical/lincolnheights-historical.component.jsx';
import MagnoliaLive from './graphs/live/magnolia-live.component.jsx';
import MagnoliaHistorical from './graphs/historical/magnolia-historical.component.jsx';


export default class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            key: 'General'
        }
    }

    changeKey(newKey) {
        this.setState({key: newKey})
    }

    render() {

        return (
            <div>
                <div>
                    <Tabs defaultActiveKey={
                            this.state.key
                        }
                        activeKey={
                            this.state.key
                        }
                        onSelect={
                            (k) => this.changeKey(k)
                    }>
                        <Tab eventKey='General' title='General Los Angeles'><OpenWeatherMapLive/></Tab>
                        <Tab eventKey='Broadway' title='3rd and Broadway'><BroadwayLive/></Tab>
                        <Tab eventKey='Coliseum' title='Memorial Coliseum'><MemorialColiseumLive/></Tab>
                        <Tab eventKey='Lincoln' title='Lincoln Heights'><LincolnHeightsLive/></Tab>
                        <Tab eventKey='Magnolia' title='7th and Magnolia'><MagnoliaLive/></Tab>
                    </Tabs>
                </div>

                <br/>

                <div>
                    <Tabs defaultActiveKey={
                            this.state.key
                        }
                        activeKey={
                            this.state.key
                        }
                        onSelect={
                            (k) => this.changeKey(k)
                    }>
                        <Tab eventKey='General' title='General Los Angeles'><OpenWeatherMapHistorical/></Tab>
                        <Tab eventKey='Broadway' title='3rd and Broadway'><BroadwayHistorical/></Tab>
                        <Tab eventKey='Coliseum' title='Memorial Coliseum'><MemorialColiseumHistorical/></Tab>
                        <Tab eventKey='Lincoln' title='Lincoln Heights'><LincolnHeightsHistorical/></Tab>
                        <Tab eventKey='Magnolia' title='7th and Magnolia'><MagnoliaHistorical/></Tab>
                    </Tabs>
                </div>

                <br/>
                <BarChart title="Greenhouse Gas Emissions By Sectors (EPA)"
                    dataPoints={
                        [
                            {
                                y: 22,
                                label: "Industry"
                            },
                            {
                                y: 28,
                                label: "Transport"
                            },
                            {
                                y: 27,
                                label: "Electricity"
                            },
                            {
                                y: 12,
                                label: "Commercial and Residential"
                            }, {
                                y: 10,
                                label: "Agriculture"
                            }
                        ]
                    }/>
                <br/>


                <BarChart title="Deaths Caused by Ambient Air Pollution (WHO)"
                    dataPoints={
                        [
                            {
                                y: 40,
                                label: "Ischemic Heart Disease"
                            },
                            {
                                y: 40,
                                label: "Stroke"
                            },
                            {
                                y: 11,
                                label: "Chronic Obstructive Pulmonary Disease"
                            },
                            {
                                y: 6,
                                label: "Lung Cancer"
                            }, {
                                y: 3,
                                label: "Acute Lower Respiratory Infections in Children"
                            }
                        ]
                    }/>
                <br/>

                <BarChart title="Deaths Caused by Indoor Air Pollution (WHO)"

                    dataPoints={
                        [
                            {
                                y: 27,
                                label: "Pneumonia"
                            },
                            {
                                y: 18,
                                label: "Stroke"
                            },
                            {
                                y: 27,
                                label: "Ischaemic Heart Disease"
                            },
                            {
                                y: 20,
                                label: "Chronic Obstructive Pulmonary Disease"
                            }, {
                                y: 8,
                                label: "Lung Cancer"
                            }
                        ]
                    }/>


                <br/>


                <AirQualityLineChart/>
                <br/>

                <EmissionsLinechart/>


            </div>
        );
    }
}
