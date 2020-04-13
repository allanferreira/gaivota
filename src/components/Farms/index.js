import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {List, Farm, Name, Detail, Item, Category} from './style'

export default ({list, onClickMarkerHandler, markerClicked=null}) => {
    const [open, setOpen] = useState()

    const onClickHandler = (farm) => {  
        
        if(open === farm.farm_id) {
            setOpen()
            onClickMarkerHandler({latitude: -14.3272, longitude: -58.5631})
        } else {
            setOpen(farm.farm_id)
            onClickMarkerHandler(farm, 14)
        }
    }

    useEffect(() => {
        if(!markerClicked) return
        setOpen(markerClicked.farm_id)
    }, [markerClicked])

    return (
        <List>
            {list.map((farm, index) => 
                <Farm 
                    key={index}
                    onClick={() => onClickHandler(farm)}
                >
                    <Name>{farm.name}</Name>
                    <Detail open={open === farm.farm_id}>
                        <Item>
                            <Category>Latitude:</Category> 
                            {farm.latitude}
                        </Item>
                        <Item>
                            <Category>Longitude:</Category>
                            {farm.longitude}
                        </Item>
                        <Item>
                            <Category>Culture:</Category>
                            {farm.culture}
                        </Item>
                        <Item>
                            <Category>Variety:</Category>
                            {farm.variety}
                        </Item>
                        <Item>
                            <Category>Total area:</Category>
                            {farm.total_area}
                        </Item>
                        <Item>
                            <Category>Yield estimation:</Category>
                            {farm.yield_estimation}
                        </Item>
                        <Item>
                            <Category>Price:</Category>
                            {farm.price}
                        </Item>
                        <Item>
                            <Link to={`/farm/${farm.farm_id}/${farm.latitude}/${farm.longitude}`}>Ver mais detalhes</Link>
                        </Item>
                    </Detail>
                </Farm>
            )}
        </List>
    )
}
