import {useState, useCallback} from 'react'
import * as l from 'leaflet'
import 'leaflet-providers'

export default (latitude, longitude, zoom, mapId='map') => {
    const [instanceMap, setInstanceMap] = useState(null)

    const createMap = useCallback((geoJsonData=null) => {
        if(instanceMap) return

        const map = l.map(mapId).setView([latitude, longitude], zoom)
        if(geoJsonData) {
            l.geoJSON(geoJsonData).addTo(map)
        }
       l.tileLayer.provider('Esri.WorldImagery').addTo(map)

        setInstanceMap(map)        
    }, [instanceMap, mapId, latitude, longitude, zoom])

    const addMarker = (farm, onClick=() => {}) => {
        const marker = l.marker([farm.latitude, farm.longitude]).addTo(instanceMap)
        marker.bindPopup(farm.name)
        marker.on('click', e => onClick(farm, 14, e))
    }

    const updateCamera = (latitude, longitude, zoom) => {
        instanceMap.setView([latitude, longitude], zoom)
    }

    return {
        createMap,
        updateCamera,
        addMarker,
        instanceMap,
    }
}
