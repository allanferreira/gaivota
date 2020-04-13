import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import {parsePrecipitationChartData} from '@/services'
import * as d3 from 'd3'

export default () => {
    const { id } = useParams()
    const [precipitation, setPrecipitation] = useState([])
    const [ndvi, setNdvi] = useState([])

    const loadPrecipitation = async () => {
        const data = await d3.csv(`/data/farms_precipitation.csv`)
        setPrecipitation(data)
    }

    const loadNdvi = async () => {
        const data = await d3.csv(`/data/farms_ndvi.csv`)
        setNdvi(data)
    }

    useEffect(() => { 
        loadPrecipitation() 
        loadNdvi()
    }, [])

    useEffect(() => {
        if(precipitation.length === 0 || ndvi.length === 0) return

        const data = parsePrecipitationChartData(id, precipitation, ndvi)
    }, [precipitation, ndvi])

    return (
        <></>
    ) 
}
