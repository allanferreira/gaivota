import Home from '@/pages/Home'
import Farms from '@/pages/Farms'
import Farm from '@/pages/Farm'

export default [
    {
        name: 'Home',
        component: Home,
        path: '/',
        exact: true,
    },
    {
        name: 'Farms',
        component: Farms,
        path: '/farms',
    },
    {
        name: 'Farm',
        component: Farm,
        path: '/farm/:id/:latitude/:longitude',
        hidden: true,
    },
]
