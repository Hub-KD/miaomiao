import listing from './listing'
import list from './list'
export default {
    path: '/home',
    children: [
        listing,
        list
    ],
    redirect: '/home/listing',
    component: () =>
        import ('@/views/home')
}