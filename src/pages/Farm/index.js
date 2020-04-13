import React from 'react'
import Container from '@/components/Container'
import FarmMap from '@/components/FarmMap'
import {Precipitation as PrecipitationChart} from '@/components/Charts'

export default () => (
    <Container>
        <FarmMap/>
        <PrecipitationChart/>
    </Container>
) 
