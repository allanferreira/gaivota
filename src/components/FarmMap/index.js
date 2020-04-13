import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import useMap from '@/hooks/useMap'
import Map from '@/components/Map'

export default () => {

    const { id, latitude, longitude } = useParams()
    const [error, setError] = useState(null)
    const { createMap, updateCamera, instanceMap } = useMap(-14.3272, -58.5631, 4)

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`/data/farm_${id}.json`)
                const data = await response.json()
                createMap(data)
            } catch (error) {
                setError(error)
            }
        })()
    }, [createMap, id])

    useEffect(() => {
        if(!instanceMap) return
        updateCamera(latitude, longitude, 14)
    }, [createMap, instanceMap, latitude, longitude, updateCamera])

    return (
        <>
            {error && <div>Error ao carregar o mapa</div>}
            <Map/>
        </>
    ) 
}
