/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { StLayout } from '@strobes/components';
import { Route, RouteComponentProps, RouteProps } from 'react-router-dom';

type RoleBasedRouteProps = {
    title: string;
    requirePermission: boolean;
    component: React.ComponentType<RouteComponentProps<any>>;
} & RouteProps;
// eslint-disable-next-line import/prefer-default-export
export const RoleBasedRoute: React.FC<RoleBasedRouteProps> = ({
    title,
    children,
    component: Component,
    requirePermission,
    ...rest
}) => {
    // check for permission

    return (
        <StLayout>
            <Route
                {...rest}
                render={(compProps) => {
                    const restProps = { ...compProps, title };
                    return <Component {...restProps} />;
                }}
            />
        </StLayout>
    );
};
