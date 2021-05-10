import React, {Component} from 'react';
import "./facts.style.scss"


export default class Facts extends Component{

    render(){
        
        return(
            <div className='factoid'>
                <h4>Did You Know?</h4>
                <br/>
                <h6>General</h6>
                <ul>
                    <li>6% of global deaths are attributed to air pollution (<a href='https://ourworldindata.org/outdoor-air-pollution'>OurWorldInData</a>) </li>
                    <li>Outdoor air pollution is one of the leading factors for premature deaths and accounts for 3.4 million deaths each year (<a href='https://www.who.int/'>WHO</a>)</li>
                    <li>95% of the global population is exposed to mean concentrations of particulate matter that exceed the recommended limit (<a href='https://www.who.int/'>WHO</a>)</li>
                </ul>
                <h6>Wildfires</h6>
                <ul>
                    <li>The 6 primary air pollutant emissions from wildfires are Carbon, Methane, Carbon monoxide, Carbon dioxide, Dry Matter, and Particulate Matter (<a href='https://maps.disasters.nasa.gov/arcgis/apps/MapSeries/index.html?appid=8014e6c744a945baa8700797ccffccf6'>NASA</a>)</li>
                    <li>The emissions from wildfires affect radiation, clouds, and climate on regional and global scales (<a href='https://csl.noaa.gov/factsheets/csdWildfiresFIREX.pdf'>NOAA</a>)</li>
                    <li>Populations in regions far away from wildfires can still be affected as the air is transported (<a href='https://csl.noaa.gov/factsheets/csdWildfiresFIREX.pdf'>NOAA</a>)</li>
                    <li>People with lung/heart disease, people who are older in age, people with diabetes, pregnant women and children are most at risk from air pollutants from wildfires (<a href='https://www.epa.gov/'>EPA</a>)</li>
                </ul>
                <h6>Wind and Weather</h6>
                <ul>
                    <li>Wind allows for air pollutants to be transferred from one area to another (<a href='https://scied.ucar.edu/learning-zone/air-quality/how-weather-affects-air-quality'>UCAR</a>)</li>
                    <li>Cold temperatures allow for air pollution, especially exhaust from vehicles, chimneys, and smokestacks, to be more visible (<a href='https://scied.ucar.edu/learning-zone/air-quality/how-weather-affects-air-quality'>UCAR</a>)</li>
                    <li>Hot temperatures contribute to the increase in the amount of ozone and particulat matter pollution (<a href='https://scied.ucar.edu/learning-zone/air-quality/how-weather-affects-air-quality'>UCAR</a>)</li>
                    <li>Higher air temperatures speed up chemical reactions in the air (<a href='https://www.waikatoregion.govt.nz/environment/air/weather-and-air/'>Waikato</a>)</li>
                    <li>Sunlight makes certain air pollutants undergo checmical reactions producing smog (<a href='https://www.waikatoregion.govt.nz/environment/air/weather-and-air/'>Waikato</a>)</li>
                    <li>Rain helps wash out water-soluble pollutants and particulate matter (<a href='https://www.waikatoregion.govt.nz/environment/air/weather-and-air/'>Waikato</a>)</li>
                </ul>
            </div>
        );
    }

}