import React, { useContext } from 'react';
import '../style/cards.css';
import { ThemeContext } from "../context/ThemeContext";

const Cards = ({country}) => {

    const {theme} = useContext(ThemeContext)

    return (
        <div className={theme ? "card background-light" : "card background-dark"}>
            <span className='contain-adaptiv-img'>
                <img src={country.flags.svg} alt={"drapeau" + country.name.common} />
            </span>
            <div className="info">
                <h2 className={theme ? 'color-light' : 'color-dark'}>{country.name.common}</h2>
                <p className={theme ? 'color-light' : 'color-dark'}>Population : {country.population.toLocaleString()}</p>
                <p className={theme ? 'color-light' : 'color-dark'}>Région : {country.region}</p>
                <p className={theme ? 'color-light' : 'color-dark'}>Capitale : {country.capital}</p>                
            </div>
        </div>
    );
};

export default Cards;