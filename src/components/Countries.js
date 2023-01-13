import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import Cards from "./Cards";
import SearchBar from "./SearchBar";
import Details from "./Details";
import '../style/country.css'
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import Button from "./Button";

const Countries = () => {

    const [filterRegion, setFilterRegion] = useState([])
    const [selectedRegion, setSelectedRegion] = useState('')
    const [data, setData] = useState([])
    const [searchCountry, setSearchCountry] = useState('')
    const {toggleTheme, theme} = useContext(ThemeContext)
    const [filterCountry, setFilterCountry] = useState([])
    const continents = []
    
    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all').then((res) => setData(res.data))
    }, [])

    useEffect(() => {
      if(data.length) {
        data.map(country => {
            continents.push(country.region);
        })
        setFilterRegion([...new Set(continents)])
      }
      setFilterCountry(data)
    }, [data])

    useEffect(() => {
      setFilterCountry(data.filter(country => country.region === selectedRegion))
    }, [selectedRegion])

    return (
        <>
        <div className={theme ? "contain-nav background-light" : "contain-nav background-dark"}>
            <h1 className={theme ? 'color-light' : 'color-dark'}>Where in the world ?</h1>
            <Button />
        </div>
        <div className="contain-search">
            <div className="contain-first">
                <input className={theme ? "input-search background-light" : "input-search background-dark"} type='search' placeholder='Search for a country...' value={searchCountry} 
                onChange={(e) => setSearchCountry(e.target.value)}/>
                <SearchBar list={filterRegion} setList={setFilterRegion} selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion}/>
            </div>
            <div className="container">
                {filterCountry.filter((country) => {
                    return searchCountry.toLowerCase() === '' ? country : country.name.common.toLowerCase().includes(searchCountry)
                }).map((country) => (                    
                    <div>
                        <Link to={`details/${country.name.common}`} key={country.name.common} element={<Details country={country}/>}>
                            <Cards key={country.name.common} country={country} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default Countries;