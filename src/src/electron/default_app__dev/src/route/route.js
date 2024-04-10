import HomePage from "../views/homePage"
import TestPage from "../views/testPage"
import Render from "../views/Render"
const routes = [

    {
        name: 'HomePage',
        path: '/',
        component: HomePage
    },    {
        name: 'TestPage',
        path: '/testpage',
        component: TestPage
    },
    {
        name: 'Render',
        path: '/render',
        component: Render
    }
]
export default routes
