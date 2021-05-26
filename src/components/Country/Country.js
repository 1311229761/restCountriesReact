import React, { useEffect, useState } from 'react';
import CountryDetail from '../CountryDetail/CountryDetail'
import Detail from '../Detail/Detail'

const Country = () => {
    const [countries, setCountries] = useState([])
    const countries20 = countries.slice(0,20)
    useEffect( () =>{
        
        fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div>
            <h1>country loaded: {countries.length}</h1>
            <div className="container">
                <div className="row">
                           

                            {
                                countries20.map(country =><Detail country={country} key={country.name}></Detail>)
                            }
                </div>
            </div>
         
        </div>
    );
};

export default Country;