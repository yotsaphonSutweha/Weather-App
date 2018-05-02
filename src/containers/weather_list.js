import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'; 
import _ from 'lodash';

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
                        <SparklinesReferenceLine type="avg" />
                    </Sparklines>
                    <div>{_.round(_.sum(temperature)/temperature.length)}</div>    
                </td>
                <td>
                    <Sparklines height={50} width={100} data={pressure}>
                        <SparklinesLine color="green" />
                        <SparklinesReferenceLine type="avg" />
                    </Sparklines>
                    <div>{_.round(_.sum(pressure)/pressure.length)}</div>    
                </td>
                <td>
                    <Sparklines height={50} width={100} data={humidity}>
                        <SparklinesLine color="yellow" />
                        <SparklinesReferenceLine type="avg" />
                    </Sparklines>
                    <div>{_.round(_.sum(humidity)/humidity.length)}</div>    
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