import TestResource from 'components/test/test-resource';
import TestHome from '../components/test/test-home';
import GetAll from '../components/test/test-getAll';
import { TestComponent } from '../components/test/test-component';

export default [
    {
        title: 'Home',
        component: TestHome,
        url: '/',
        exact: true,
        requirePermission: true,
        hideNavigation: true,
    },
    {
        title: 'Home',
        component: TestHome,
        url: '/home',
        exact: true,
        requirePermission: true,
        hideNavigation: true,
    },
    {
        title: 'Test Component',
        component: TestComponent,
        url: '/test',
        exact: true,
        requirePermission: true,
        hideNavigation: true,
    },
    {
        title: 'Test Component',
        component: GetAll,
        url: '/getAll',
        exact: true,
        requirePermission: true,
        hideNavigation: true,
    },
    {
        title: 'Test Component',
        component: TestResource,
        url: '/getById',
        exact: true,
        requirePermission: true,
        hideNavigation: true,
    },
];
