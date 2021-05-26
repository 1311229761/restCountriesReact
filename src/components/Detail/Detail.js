import React from "react";
import ReactDOM from "react-dom";


import {Link } from "react-router-dom";

// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link,
//     useRouteMatch,
//     useParams
//   } from "react-router-dom";

const Detail = (props) => {
 
    const country = props.country
    const {name,flag,region,population, subregion} = country
    console.log(country);
    return (
        
        <div className="col-md-3">
            <div  className="rounded shadow p-5 mb-2 text-center">
                <img src={flag} className="img-fluid"/>
            <h4>{name}</h4>
            <p>{region}</p>
            <p>{population}</p>
            {/* <button type="button"><Link to={`/country/${name}`}>click me</Link></button> */}
            <button  type="button" className="btn btn-primary"><Link to={`/country/${name}`} style={{color: "white"}}>click me</Link></button>
          
            
           
            </div>
          
        </div>
    );
};

export default Detail;