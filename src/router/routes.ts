import Login from '../views/Login/login';
import MainPage from '../views/MainPage/MainPage';
import Search from '../views/Search/search';

export default[
    {
        path:'/index',
        component:MainPage,
        exact:true,
    },
    {
        path:'/login',
        component:Login,
        exact:true,
    },
    {
        path:'/search',
        component:Search,
        exact:true,
    },
    {
        path:'/channel/rid=:rid',
        exact:true,
    }
]
