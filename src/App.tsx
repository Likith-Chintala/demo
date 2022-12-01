/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import 'reflect-metadata';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from 'redux/providers/auth-provider';
import { ThemeProvider, ThemeType } from '@strobes/components';
import './App.scss';
import axiosInterceptor from './services/axios-service';
import store from './redux/store';
import routes from './routes';
import { RoleBasedRoute } from './routes/role-based-routes';

axiosInterceptor();
const App: React.FC<any> = () => {
    return (
        <ThemeProvider theme={ThemeType.dark}>
            <Provider store={store}>
                <AuthProvider userManager={null} store={store}>
                    <div className="App">
                        <BrowserRouter>
                            <switch>
                                {routes.map(
                                    ({ component: Component, url, exact, ...rest }: any) => {
                                        return (
                                            <RoleBasedRoute
                                                key={url}
                                                path={url}
                                                exact={exact}
                                                component={Component}
                                                // eslint-disable-next-line react/jsx-props-no-spreading
                                                {...rest}
                                            />
                                        );
                                    },
                                )}
                            </switch>
                        </BrowserRouter>
                    </div>
                </AuthProvider>
            </Provider>
        </ThemeProvider>
    );
};

export default App;
