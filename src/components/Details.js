import React, { useContext, useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import Countries from './Countries'
import axios from 'axios';
import '../style/details.css'
import Button from './Button';
import arrowLeft from '../images/arrow-left-solid.svg'

const Details = ({country}) => {

    const [data, setData] = useState([])

    const {theme} = useContext(ThemeContext)
    const {countryName} = useParams()

    useEffect(() => {
        axios.get(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`).then((res) => setData(res.data))
    }, [])

    const currencyArray = data[0] ? Object.keys(data[0].currencies) : []
    const languageArray = data[0] ? Object.keys(data[0].languages) : []

    return (
        <>
            {data.map((countryName) => 
            <div className='contain'>       
            <div className='contain-header'>
                  <h1 className={theme ? 'color-light' : 'color-dark'}>Where in the world ?</h1>
                  <Button />
            </div> 
            <Link className={theme ? 'link color-light' : 'link color-dark'} to='/' path={<Countries />}>
                <img className='arrow' src={arrowLeft} alt='flèche pour retourner à la page précédente'/>
                Back
            </Link> 
               <div className='container-details'>      
                    <span className='contain-adaptiv-img'>
                        <img src={countryName.flags.svg} alt={"drapeau of" + countryName.name.common} />
                    </span>
                    <div className='container-info'>
                        <h2 className={theme ? 'color-light' : 'color-dark'}>{countryName.name.common}</h2>
                        <div className='contain-info-detail'>
                            <div className='contain-detail'>
                                <p className={theme ? 'color-light' : 'color-dark'}>Native Name : {countryName.name.common}</p>
                                <p className={theme ? 'color-light' : 'color-dark'}>Population : {countryName.population}</p>
                                <p className={theme ? 'color-light' : 'color-dark'}>Région : {countryName.region}</p>
                                <p className={theme ? 'color-light' : 'color-dark'}>Sub Région : {countryName.subregion}</p>
                                <p className={theme ? 'color-light' : 'color-dark'}>Capital : {countryName.capital}</p>
                            </div>
                            <div className='contain-detail'>
                                <p className={theme ? 'color-light' : 'color-dark'}>Top level domain : {countryName.tld}</p>
                                <p className={theme ? 'color-light' : 'color-dark'}>Currencie : {currencyArray.join(',')}</p>
                                <p className={theme ? 'color-light' : 'color-dark'}>Languages : {languageArray.join(',')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
            )}
        </>
    )
}

export default Details