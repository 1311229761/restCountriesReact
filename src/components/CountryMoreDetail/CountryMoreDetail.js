import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './CountryMoreDetail .css'

const CountryMoreDetail = () => {
   const {countryId} = useParams()
   const [country, setCountry] = useState([])
   console.log(country);
    useEffect(()=>{
     const url = `https://restcountries.eu/rest/v2/name/${countryId}`
     fetch(url)
        .then(response => response.json())
        .then(data => setCountry(data[0]))
    }, [])
    const {name,flag,region,population, subregion} = country
    return (
        <div>
         <div className="card text-center">
         <img src={flag} className="img-fluid"/>
  <div className="container">
    <h4><b>name: {name}</b></h4> 
    <p>region: {region} </p> 
    <p>subregion: {subregion} </p> 
    <p>population: {population} </p> 
  </div>
</div>
            
            
        </div>
    );
};

export default CountryMoreDetail;