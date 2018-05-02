import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines'; 

class WeatherList extends Component{
    renderWeather(cityData) {
        const cityName = cityData.city.name;
        const temperature = cityData.list.map(weather => weather.main.temp);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        return (
            <tr key={cityName}>
                <td>{cityName}</td>
                <td>
                    <Sparklines height={38} width={100} data={temperature}>
                        <SparklinesLine color="red" />
                    </Sparklines>    
                </td>
                <td>
                    <Sparklines height={50} width={100} data={pressure}>
                        <SparklinesLine color="green" />
                    </Sparklines>
                </td>
                <td>
                    <Sparklines height={50} width={100} data={humidity}>
                        <SparklinesLine color="yellow" />
                    </Sparklines>
                </td>
            </tr>
        );
    }

    render(){
        return(
            <table className="table table-hover table-dark table-striped">
                <thead>
                    <tr>
                        <th scope="col">City</th>
                        <th scope="col">Temperature</th>
                        <th scope="col">Pressure</th>
                        <th scope="col">Humidity</th>
                    </tr>            
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
           
        );
    }
}

function mapStateToProps(state){
    return { weather: state.weather };
}

export default connect(mapStateToProps)(WeatherList);