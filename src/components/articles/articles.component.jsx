import React, {Component} from 'react';

import './articles.style.scss';

require('dotenv').config()

export default class Articles extends Component {



    constructor(props){
        super(props);
        this.key = '1002ab6d1amsh969613d6623a143p13b559jsn0395c6b6fa85'
        this.state = {
            articles: []
        }
    }

    retrieveData(){
        fetch("https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=air%20pollution&pageNumber=1&pageSize=9&autoCorrect=true&withThumbnails=true&fromPublishedDate=null&toPublishedDate=null", 
        {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": this.key,
		        "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com"
            }
        })
        .then((response) => response.json())
        .then(data => {
            console.log(data);
            this.setState({
                articles: data.value
            });
        })
        .catch(err => {
            console.error(err);
        });
    }

    componentDidMount(){
        console.log("Articles mounted...")
        this.retrieveData();
    }

    render(){
        return(
            <div>
            {this.state.articles.map((value, index) => {
                return <div key={index} className='articles'>
                    <h6>{value.title}</h6>
                    <a href={value.url}>Original Source</a>
                    <img src={value.image.url}/>
                    <br/>
                    <p>Description: {value.description}</p>
                </div>
            })}
            </div>
        );
    }
}