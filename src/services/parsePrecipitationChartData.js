import {monthText} from '@/services'
export default (id, precipitation, ndvi) => {
    
    const raw = precipitation.map(p => {

        let ndvi_id = 0

        ndvi.map(n => {
            if(p.date !== n.date) return
            ndvi_id = n[`ndvi_${id}`]
        })

        return {
            date: p.date,
            precipitation: parseInt(p[`precipitation_${id}`]),
            ndvi: parseFloat(ndvi_id), 
        }
    })

}
