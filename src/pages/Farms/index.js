import React, {useState, useEffect, useCallback} from 'react'
import * as d3 from 'd3'
import useMap from '@/hooks/useMap'
import Container from '@/components/Container'
import Map from '@/components/Map'
import Farms from '@/components/Farms'

export default () => {
    const { instanceMap, addMarker, updateCamera, createMap } = useMap(-14.3272, -58.5631, 4)
    const [markerClicked, setMarkerClicked] = useState(null)
    const [farms, setFarms] = useState([])

    const loadFarms = async () => {
        const data = await d3.csv('/data/farms.csv')
        setFarms(data)
    }

    const onClickMarkerHandler = (farm, zoom=4, e) => {
        setMarkerClicked(farm)
        updateCamera(farm.latitude, farm.longitude, zoom)
    }

    const addFarmsInMap = useCallback(() => {
        farms.map((farm) =>
            addMarker(farm, onClickMarkerHandler)
        )
    }, [farms, addMarker, onClickMarkerHandler])

    useEffect(() => { 
        loadFarms() 
    }, [])
    
    useEffect(() => {
        createMap()
    }, [createMap])

    useEffect(() => {
        addFarmsInMap()
    }, [instanceMap, farms, addFarmsInMap])

    return (
        <Container>
            <Map/>
            <Farms 
                list={farms} 
                onClickMarkerHandler={onClickMarkerHandler}
                markerClicked={markerClicked}
            />
        </Container>
    )
}
