import Login from './views/login';
import Home from './views/home';

const Routes = [
  {
    path: '/l',
    component: Login,
  },
  {
    path: '/',
    component: Home,
  },
];
export default Routes;
