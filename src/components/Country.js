import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, capital, population, flag} = props.country;
    const handleAddCountry = props.handleAddCountry;
    return (
        <div className="countryDiv">
            <img src={flag} alt="There is a flag of this country"/>
            <h3>Name: {name}</h3>
            <p>Capital: {capital}</p>
            <p>Population: {population}</p>
            <button onClick={() =>handleAddCountry(props.country)}>Add country</button>
        </div>
    );
};

export default Country;