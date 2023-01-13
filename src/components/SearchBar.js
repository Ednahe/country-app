import React, { useContext, useEffect, useState } from "react";
import '../style/search.css'
import { ThemeContext } from "../context/ThemeContext";
import Select from 'react-select'

const SearchBar = ({list, selectedRegion, setSelectedRegion}) => {

    const [regionsObject, setRegionsObject] = useState([])

    useEffect(() => {

    }, [selectedRegion])

    useEffect(() => {
        list.map((region) => {
            setRegionsObject(prevState => ([...prevState, {value: region, label: region}]))
        })    
    }, [list])
    
    const {theme} = useContext(ThemeContext)
    
    return (
        <>
            <Select onChange={(option) => setSelectedRegion(option.value)} key={regionsObject} options={regionsObject} defaultValue={selectedRegion} placeholder="filter by region" />
        </>
    )
}

export default SearchBar