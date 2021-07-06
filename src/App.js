// create your App component here
import React from 'react';

export default class App extends React.Component{
    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(response=>response.json())
        .then(data=>{ console.log(data) })
        .catch(error=>console.log(error));
    }
    render(){
        return(
            <div>

            </div>
        );
    }
}
